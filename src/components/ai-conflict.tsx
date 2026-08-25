import * as React from "react";
import { cn } from "../lib/cn";

export interface AIConflictProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

export function AIConflict({ heading = "Conflict needs review", description, actions, className, ...props }: AIConflictProps) {
  return <section role="alert" className={cn("p-ai-conflict", className)} {...props}><div><div className="p-ai-section-heading">{heading}</div>{description ? <div className="p-ai-muted">{description}</div> : null}</div>{actions ? <div className="p-ai-actions">{actions}</div> : null}</section>;
}
