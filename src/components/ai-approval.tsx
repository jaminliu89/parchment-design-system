import * as React from "react";
import { cn } from "../lib/cn";

export interface AIApprovalProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: React.ReactNode;
  description?: React.ReactNode;
  actions: React.ReactNode;
}

export function AIApproval({ heading, description, actions, className, ...props }: AIApprovalProps) {
  const headingId = React.useId();
  return (
    <section className={cn("p-ai-approval", className)} aria-labelledby={headingId} {...props}>
      <div className="p-ai-approval-copy">
        <div id={headingId} className="p-ai-approval-title">{heading}</div>
        {description ? <div className="p-ai-approval-description">{description}</div> : null}
      </div>
      <div className="p-ai-approval-actions">{actions}</div>
    </section>
  );
}
