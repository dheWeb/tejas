import { cn } from "@/lib/utils";
import { tejasRoadmap, type PhaseStatus } from "@/content/roadmap";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

const statusIcon: Record<PhaseStatus, typeof CheckCircle2> = {
  complete: CheckCircle2,
  current: Loader2,
  planned: Circle,
};

const statusStyle: Record<PhaseStatus, string> = {
  complete: "text-tejas-emerald",
  current: "text-tejas-saffron",
  planned: "text-stone-400",
};

export function PhaseRoadmap() {
  return (
    <div id="roadmap" className="scroll-mt-32">
      <div className="overflow-x-auto rounded-2xl border border-stone-200">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="bg-tejas-ivory">
              <th className="px-6 py-4 font-semibold">Phase</th>
              <th className="px-6 py-4 font-semibold">Focus</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {tejasRoadmap.map((row) => {
              const Icon = statusIcon[row.status];
              return (
                <tr key={row.phase} className={cn("border-t border-stone-100", row.status === "current" && "bg-tejas-saffron/5")}>
                  <td className="px-6 py-4 font-semibold text-tejas-ink">{row.phase}</td>
                  <td className="px-6 py-4 text-tejas-muted">{row.focus}</td>
                  <td className={cn("px-6 py-4 capitalize", statusStyle[row.status])}>
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-4 w-4" aria-hidden />
                      {row.status === "complete" ? "Complete" : row.status === "current" ? "In Progress" : "Planned"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
