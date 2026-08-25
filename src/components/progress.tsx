import * as React from "react";
import { cn } from "../lib/cn";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  indeterminate?: boolean;
}

export function Progress({ value = 0, max = 100, indeterminate = false, className, ...props }: ProgressProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const percent = max > 0 ? (clamped / max) * 100 : 0;
  return (
    <div className={cn("p-progress", indeterminate && "p-progress-indeterminate", className)} role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={indeterminate ? undefined : clamped} {...props}>
      <div className="p-progress-indicator" style={{ transform: indeterminate ? undefined : `scaleX(${percent / 100})` }} />
    </div>
  );
}
