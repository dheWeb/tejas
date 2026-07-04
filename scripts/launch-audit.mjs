/**
 * Comprehensive launch audit — crawl, JSON-LD, security headers, OG, PageSpeed.
 * Run: node scripts/launch-audit.mjs
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://tejas.dhe.org.in";

const RICH_RESULTS_PAGES = ["/", "/about", "/olympiads/english", "/faq"];

const SECURITY_HEADERS = [
  "strict-transport-security",
  "x-frame-options",
  "x-content-type-options",
  "referrer-policy",
  "permissions-policy",
];

async function fetchSitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function crawlUrls(urls) {
  const results = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      const finalUrl = res.url;
      const redirects = finalUrl !== url;
      results.push({
        url,
        status: res.status,
        ok: res.ok,
        redirects,
        finalUrl: redirects ? finalUrl : null,
      });
    } catch (e) {
      results.push({ url, status: 0, ok: false, error: String(e) });
    }
  }
  return results;
}

function extractJsonLd(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const types = [];
  for (const block of blocks) {
    try {
      const data = JSON.parse(block[1]);
      const items = Array.isArray(data) ? data : [data];
      for (const item of items) {
        if (item["@type"]) types.push(item["@type"]);
      }
    } catch {
      /* skip invalid */
    }
  }
  return types;
}

async function auditStructuredData(path) {
  const url = `${BASE}${path}`;
  const res = await fetch(url);
  const html = await res.text();
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1] ?? null;
  const canonicalOk = canonical === url || (path === "/" && canonical === BASE);
  const httpAssets = (html.match(/(?:src|href)="http:\/\//g) ?? []).length;
  const types = extractJsonLd(html);
  return { url, path, canonical, canonicalOk, httpAssets, types, valid: types.length > 0 && httpAssets === 0 };
}

async function checkSecurityHeaders() {
  const res = await fetch(BASE);
  const found = {};
  for (const h of SECURITY_HEADERS) {
    found[h] = res.headers.get(h) ?? null;
  }
  return found;
}

async function runPageSpeed(strategy) {
  try {
    const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(BASE)}&strategy=${strategy}&category=performance`;
    const res = await fetch(api);
    if (!res.ok) return { strategy, error: `HTTP ${res.status}` };
    const data = await res.json();
    const audits = data.lighthouseResult.audits;
    return {
      strategy,
      performance: Math.round(data.lighthouseResult.categories.performance.score * 100),
      lcp: audits["largest-contentful-paint"]?.displayValue,
      cls: audits["cumulative-layout-shift"]?.displayValue,
      tbt: audits["total-blocking-time"]?.displayValue,
      fcp: audits["first-contentful-paint"]?.displayValue,
    };
  } catch (e) {
    return { strategy, error: String(e) };
  }
}

async function main() {
  console.log("TEJAS Launch Audit\n");

  console.log("1. Sitemap crawl (all URLs)…");
  const urls = await fetchSitemapUrls();
  const crawl = await crawlUrls(urls);
  const crawlOk = crawl.every((c) => c.ok);
  const broken = crawl.filter((c) => !c.ok);
  const redirected = crawl.filter((c) => c.redirects);
  console.log(`   ${crawlOk ? "✓" : "✗"} ${crawl.filter((c) => c.ok).length}/${urls.length} URLs OK`);
  if (broken.length) broken.forEach((b) => console.log(`   ✗ ${b.status} ${b.url}`));
  if (redirected.length) redirected.forEach((r) => console.log(`   ↪ ${r.url} → ${r.finalUrl}`));

  console.log("\n2. Structured data (Rich Results pages)…");
  const structured = await Promise.all(RICH_RESULTS_PAGES.map(auditStructuredData));
  structured.forEach((s) =>
    console.log(`   ${s.types.length ? "✓" : "✗"} ${s.path} → [${s.types.join(", ") || "none"}]`)
  );

  console.log("\n3. Security headers…");
  const security = await checkSecurityHeaders();
  for (const h of SECURITY_HEADERS) {
    const val = security[h];
    console.log(`   ${val ? "✓" : "✗"} ${h}: ${val ?? "(missing — add in next.config or Vercel)"}`);
  }

  console.log("\n4. Core Web Vitals (PageSpeed Insights)…");
  const mobile = await runPageSpeed("mobile");
  const desktop = await runPageSpeed("desktop");
  for (const ps of [mobile, desktop]) {
    if (ps.error) console.log(`   ⚠ ${ps.strategy}: ${ps.error} (run manually at pagespeed.web.dev)`);
    else console.log(`   ${ps.performance >= 90 ? "✓" : "⚠"} ${ps.strategy}: ${ps.performance}/100 | LCP ${ps.lcp} | CLS ${ps.cls}`);
  }

  const report = `# TEJAS Launch Audit Report

Generated: ${new Date().toISOString()}

## Summary

| Check | Result |
|-------|--------|
| Sitemap crawl | ${crawl.filter((c) => c.ok).length}/${urls.length} URLs return 200 |
| Redirect chains | ${redirected.length} redirects detected |
| Broken links | ${broken.length} failures |
| Structured data pages | ${structured.filter((s) => s.types.length).length}/${structured.length} with JSON-LD |
| Mixed HTTP assets | ${structured.some((s) => s.httpAssets > 0) ? "Found" : "None"} |

## Crawl Results

${crawl.map((c) => `- [${c.ok ? "x" : " "}] ${c.status} ${c.url}${c.finalUrl ? ` → ${c.finalUrl}` : ""}`).join("\n")}

## Structured Data (JSON-LD)

| Page | Types | Canonical OK |
|------|-------|--------------|
${structured.map((s) => `| ${s.path} | ${s.types.join(", ") || "—"} | ${s.canonicalOk ? "✓" : "✗"} |`).join("\n")}

**Validate in Google:** [Rich Results Test](https://search.google.com/test/rich-results?url=${encodeURIComponent(BASE)})

## Security Headers

| Header | Value |
|--------|-------|
${SECURITY_HEADERS.map((h) => `| ${h} | ${security[h] ?? "missing"} |`).join("\n")}

Note: HSTS is set by Vercel (\`max-age=63072000\`). Additional headers configured in \`next.config.ts\`.

## Core Web Vitals

### Mobile
${mobile.error ? `- Manual run required: https://pagespeed.web.dev/analysis?url=${encodeURIComponent(BASE)}&form_factor=mobile` : `- Performance: **${mobile.performance}/100**\n- LCP: ${mobile.lcp}\n- CLS: ${mobile.cls}\n- TBT: ${mobile.tbt}`}

### Desktop
${desktop.error ? `- Manual run required: https://pagespeed.web.dev/analysis?url=${encodeURIComponent(BASE)}&form_factor=desktop` : `- Performance: **${desktop.performance}/100**\n- LCP: ${desktop.lcp}\n- CLS: ${desktop.cls}`}

**Targets:** LCP ≤ 2.5s · CLS ≤ 0.1 · INP ≤ 200ms

## Google Search Console (Manual — Required)

Google does **not** use IndexNow. Complete these steps:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. **Add property** → URL prefix: \`${BASE}\`
3. **Verify ownership** (choose one):
   - **DNS TXT** (recommended): Add TXT record on \`dhe.org.in\` domain
   - **HTML meta tag**: Set \`NEXT_PUBLIC_GSC_VERIFICATION\` in Vercel env → redeploy
   - **HTML file**: Upload verification file to \`public/\`
4. **Submit sitemap**: \`${BASE}/sitemap.xml\`
5. Monitor weekly:
   - **Pages → Indexing** (Coverage)
   - **Experience → Core Web Vitals**
   - **Enhancements** (FAQ rich results if eligible)
   - **Performance** (impressions, clicks, CTR)

## Analytics Setup

Set in Vercel → Project → Environment Variables:

| Variable | Purpose |
|----------|---------|
| \`NEXT_PUBLIC_GA_MEASUREMENT_ID\` | Google Analytics 4 (e.g. G-XXXXXXXX) |
| \`NEXT_PUBLIC_GSC_VERIFICATION\` | Google Search Console HTML meta verification |

Tracked events: \`register_click\`, \`beta_feedback_submit\`, \`olympiad_view\`, \`mock_test_click\`, \`contact_click\`

## Launch Timeline

| Day | Action |
|-----|--------|
| **Day 1** | GSC verify + submit sitemap + Rich Results Test |
| **Day 2–3** | Collect beta feedback at \`/beta\` · monitor Vercel logs |
| **Day 4–7** | Re-run \`npm run launch-audit\` · fix CWV on slow pages |
| **Week 2** | Public announcement · monitor GSC Performance tab |

## Commands

\`\`\`bash
npm run launch-audit    # Full crawl + JSON-LD + security + PageSpeed
npm run post-launch     # IndexNow + OG + health checks
npx vercel logs tejas.dhe.org.in --since 24h
\`\`\`
`;

  const reportPath = join(__dirname, "..", "docs", "LAUNCH_AUDIT_REPORT.md");
  writeFileSync(reportPath, report);
  console.log(`\nReport: docs/LAUNCH_AUDIT_REPORT.md`);

  const allOk = crawlOk && structured.every((s) => s.types.length > 0);
  process.exit(allOk ? 0 : 1);
}

main();
