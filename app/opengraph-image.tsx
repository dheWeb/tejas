import { ImageResponse } from "next/og";
import { brand } from "@/design-system/tokens";

export const runtime = "edge";
export const alt = `${brand.name} — ${brand.fullName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1E3A5F 0%, #152a45 50%, #FF9933 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "linear-gradient(135deg, #FF9933, #1E3A5F)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 900,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-0.02em" }}>{brand.name}</span>
            <span style={{ fontSize: 28, opacity: 0.9, marginTop: 8 }}>{brand.fullName}</span>
          </div>
        </div>
        <p style={{ fontSize: 32, maxWidth: 900, lineHeight: 1.4, opacity: 0.85 }}>
          Bharat&apos;s National Talent Development Ecosystem — Olympiads, Learning, Research &amp; Innovation
        </p>
        <p style={{ fontSize: 22, marginTop: "auto", opacity: 0.7 }}>{brand.parentOrg} · {brand.domain}</p>
      </div>
    ),
    { ...size }
  );
}
