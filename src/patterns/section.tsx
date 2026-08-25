import * as React from "react";
import { cn } from "../lib/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

export function Section({ heading, description, actions, className, children, ...props }: SectionProps) {
  return <section className={cn("p-pattern-section", className)} {...props}>
    {(heading || description || actions) ? <div className="p-pattern-section-head"><div>{heading ? <h2 className="p-pattern-section-title">{heading}</h2> : null}{description ? <div className="p-pattern-section-description">{description}</div> : null}</div>{actions ? <div className="p-pattern-section-actions">{actions}</div> : null}</div> : null}
    <div className="p-pattern-section-content">{children}</div>
  </section>;
}
