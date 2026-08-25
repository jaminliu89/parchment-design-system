import * as React from "react";
import { cn } from "../lib/cn";

export interface AIApprovalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions: React.ReactNode;
}

export function AIApproval({ title, description, actions, className, ...props }: AIApprovalProps) {
  const titleId = React.useId();
  return (
    <section className={cn("p-ai-approval", className)} aria-labelledby={titleId} {...props}>
      <div className="p-ai-approval-copy">
        <div id={titleId} className="p-ai-approval-title">{title}</div>
        {description ? <div className="p-ai-approval-description">{description}</div> : null}
      </div>
      <div className="p-ai-approval-actions">{actions}</div>
    </section>
  );
}
