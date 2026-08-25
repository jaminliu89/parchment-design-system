import * as React from "react";
import { cn } from "../lib/cn";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, breadcrumb, actions, className, ...props }: PageHeaderProps) {
  return (
    <header className={cn("p-pattern-page-header", className)} {...props}>
      <div className="p-pattern-page-header-copy">
        {breadcrumb ? <div className="p-pattern-page-header-breadcrumb">{breadcrumb}</div> : null}
        {eyebrow ? <div className="p-pattern-page-header-eyebrow">{eyebrow}</div> : null}
        <h1 className="p-pattern-page-header-title">{title}</h1>
        {description ? <div className="p-pattern-page-header-description">{description}</div> : null}
      </div>
      {actions ? <div className="p-pattern-page-header-actions">{actions}</div> : null}
    </header>
  );
}
