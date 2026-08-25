import * as React from "react";
import { cn } from "../lib/cn";

export type StatusTone = "neutral" | "success" | "warning" | "error" | "processing";

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: StatusTone;
  label: React.ReactNode;
}

export function StatusIndicator({ tone = "neutral", label, className, ...props }: StatusIndicatorProps) {
  return (
    <span className={cn("p-status", `p-status-${tone}`, className)} {...props}>
      <span className="p-status-dot" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
