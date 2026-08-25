import * as React from "react";
import { cn } from "../lib/cn";

export interface AIWorkspaceProps extends React.HTMLAttributes<HTMLDivElement> {
  context?: React.ReactNode;
  composer?: React.ReactNode;
  inspector?: React.ReactNode;
  status?: React.ReactNode;
}

export function AIWorkspace({ context, composer, inspector, status, className, children, ...props }: AIWorkspaceProps) {
  return <div className={cn("p-pattern-ai-workspace", className)} {...props}>
    {context ? <aside className="p-pattern-ai-workspace-context">{context}</aside> : null}
    <section className="p-pattern-ai-workspace-main">
      {status ? <div className="p-pattern-ai-workspace-status">{status}</div> : null}
      <div className="p-pattern-ai-workspace-thread">{children}</div>
      {composer ? <div className="p-pattern-ai-workspace-composer">{composer}</div> : null}
    </section>
    {inspector ? <aside className="p-pattern-ai-workspace-inspector">{inspector}</aside> : null}
  </div>;
}
