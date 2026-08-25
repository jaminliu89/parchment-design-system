import * as React from "react";
import { cn } from "../lib/cn";

export function PropertyPanel({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <aside className={cn("p-property-panel", className)} {...props} />;
}

export function PropertyPanelSection({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <section className={cn("p-property-panel-section", className)} {...props} />;
}

export function PropertyPanelHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-property-panel-header", className)} {...props} />;
}
