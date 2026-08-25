import * as React from "react";
import { cn } from "../lib/cn";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
  selected?: boolean;
}

export function ListItem({ icon, primary, secondary, meta, actions, selected = false, className, ...props }: ListItemProps) {
  return <div className={cn("p-pattern-list-item", selected && "p-pattern-list-item-selected", className)} aria-selected={selected || undefined} {...props}>
    {icon ? <div className="p-pattern-list-item-icon" aria-hidden="true">{icon}</div> : null}
    <div className="p-pattern-list-item-copy"><div className="p-pattern-list-item-title">{primary}</div>{secondary ? <div className="p-pattern-list-item-subtitle">{secondary}</div> : null}</div>
    {meta ? <div className="p-pattern-list-item-meta">{meta}</div> : null}
    {actions ? <div className="p-pattern-list-item-actions">{actions}</div> : null}
  </div>;
}
