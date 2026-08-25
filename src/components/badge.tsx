import * as React from "react";
import { cn } from "../lib/cn";

export type BadgeTone = "default" | "success" | "warning" | "error" | "muted";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export function Badge({ tone = "default", className, ...props }: BadgeProps) {
  return <span className={cn("p-badge", `p-badge-${tone}`, className)} {...props} />;
}
