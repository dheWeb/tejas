export type PhaseStatus = "complete" | "current" | "planned";

export interface RoadmapPhase {
  phase: string;
  focus: string;
  status: PhaseStatus;
}

export const tejasRoadmap: RoadmapPhase[] = [
  { phase: "Phase 0", focus: "Foundation & Branding", status: "complete" },
  { phase: "Phase 1", focus: "Premium UI/UX", status: "complete" },
  { phase: "Phase 2", focus: "Content & Information Architecture", status: "complete" },
  { phase: "Phase 2.5", focus: "Launch Readiness & Product Polish", status: "current" },
  { phase: "Phase 3", focus: "Authentication & User Management", status: "planned" },
  { phase: "Phase 4", focus: "Registration, Payments & Exam Engine", status: "planned" },
  { phase: "Phase 5", focus: "Results, Certificates & Rankings", status: "planned" },
  { phase: "Phase 6", focus: "AI Mentor & Analytics", status: "planned" },
  { phase: "Phase 7", focus: "Mobile Apps & National Expansion", status: "planned" },
];
