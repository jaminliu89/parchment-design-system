import * as React from "react";
import { cn } from "../lib/cn";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export function Separator({ orientation = "horizontal", decorative = true, className, ...props }: SeparatorProps) {
  return <div role={decorative ? "none" : "separator"} aria-orientation={decorative ? undefined : orientation} className={cn("p-separator", `p-separator-${orientation}`, className)} {...props} />;
}
