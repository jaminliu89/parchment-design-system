import * as React from "react";
import { cn } from "../lib/cn";

export function Toolbar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="toolbar" className={cn("p-toolbar", className)} {...props} />;
}

export function ToolbarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="group" className={cn("p-toolbar-group", className)} {...props} />;
}
