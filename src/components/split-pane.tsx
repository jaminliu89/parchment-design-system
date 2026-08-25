import * as React from "react";
import { cn } from "../lib/cn";

export interface SplitPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function SplitPane({ orientation = "horizontal", className, ...props }: SplitPaneProps) {
  return <div data-orientation={orientation} className={cn("p-split-pane", `p-split-pane-${orientation}`, className)} {...props} />;
}

export function SplitPanePanel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-split-pane-panel", className)} {...props} />;
}

export function SplitPaneDivider({ orientation = "horizontal", className, ...props }: React.HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" }) {
  return <div role="separator" aria-orientation={orientation === "horizontal" ? "vertical" : "horizontal"} className={cn("p-split-pane-divider", className)} {...props} />;
}
