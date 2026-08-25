import * as React from "react";
import { cn } from "../lib/cn";

export type AIStatusState = "idle" | "processing" | "generated" | "applied" | "attention" | "error";

export interface AIStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: AIStatusState;
  label: React.ReactNode;
}

export function AIStatus({ state = "idle", label, className, ...props }: AIStatusProps) {
  const live = state === "processing" ? "polite" : state === "error" ? "assertive" : undefined;
  return (
    <div className={cn("p-ai-status", `p-ai-status-${state}`, className)} role={state === "error" ? "alert" : "status"} aria-live={live} {...props}>
      <span className="p-ai-status-marker" aria-hidden />
      <span>{label}</span>
    </div>
  );
}
