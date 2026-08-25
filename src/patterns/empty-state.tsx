import * as React from "react";
import { cn } from "../lib/cn";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  heading: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

export function EmptyState({ icon, heading, description, actions, className, ...props }: EmptyStateProps) {
  return <div className={cn("p-pattern-empty-state", className)} {...props}>
    {icon ? <div className="p-pattern-empty-state-icon" aria-hidden="true">{icon}</div> : null}
    <div className="p-pattern-empty-state-title">{heading}</div>
    {description ? <div className="p-pattern-empty-state-description">{description}</div> : null}
    {actions ? <div className="p-pattern-empty-state-actions">{actions}</div> : null}
  </div>;
}
