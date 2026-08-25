import * as React from "react";
import { cn } from "../lib/cn";

export interface InspectorLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  inspector: React.ReactNode;
  inspectorPosition?: "left" | "right";
}

export function InspectorLayout({ inspector, inspectorPosition = "right", className, children, ...props }: InspectorLayoutProps) {
  return <div className={cn("p-pattern-inspector-layout", `p-pattern-inspector-${inspectorPosition}`, className)} {...props}>
    {inspectorPosition === "left" ? <aside className="p-pattern-inspector-panel">{inspector}</aside> : null}
    <main className="p-pattern-inspector-content">{children}</main>
    {inspectorPosition === "right" ? <aside className="p-pattern-inspector-panel">{inspector}</aside> : null}
  </div>;
}
