import * as React from "react";
import { cn } from "../lib/cn";

export interface EditorShellProps extends React.HTMLAttributes<HTMLDivElement> {
  navigator?: React.ReactNode;
  toolbar?: React.ReactNode;
  inspector?: React.ReactNode;
  statusbar?: React.ReactNode;
}

export function EditorShell({ navigator, toolbar, inspector, statusbar, className, children, ...props }: EditorShellProps) {
  return <div className={cn("p-pattern-editor-shell", className)} {...props}>
    {navigator ? <aside className="p-pattern-editor-shell-nav">{navigator}</aside> : null}
    <section className="p-pattern-editor-shell-stage">
      {toolbar ? <div className="p-pattern-editor-shell-toolbar">{toolbar}</div> : null}
      <div className="p-pattern-editor-shell-canvas">{children}</div>
      {statusbar ? <div className="p-pattern-editor-shell-status">{statusbar}</div> : null}
    </section>
    {inspector ? <aside className="p-pattern-editor-shell-inspector">{inspector}</aside> : null}
  </div>;
}
