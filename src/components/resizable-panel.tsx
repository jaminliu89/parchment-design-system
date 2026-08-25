import * as React from "react";
import { Panel, PanelGroup, PanelResizeHandle, type PanelGroupProps, type PanelProps, type PanelResizeHandleProps } from "react-resizable-panels";
import { cn } from "../lib/cn";

export function ResizablePanelGroup({ className, ...props }: PanelGroupProps) {
  return <PanelGroup className={cn("p-resizable-group", className)} {...props} />;
}

export function ResizablePanel({ className, ...props }: PanelProps) {
  return <Panel className={cn("p-resizable-panel", className)} {...props} />;
}

export function ResizableHandle({ className, ...props }: PanelResizeHandleProps) {
  return <PanelResizeHandle className={cn("p-resizable-handle", className)} {...props}><span className="p-resizable-handle-line" aria-hidden="true" /></PanelResizeHandle>;
}
