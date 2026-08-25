import * as React from "react";
import { cn } from "../lib/cn";

export interface PropertyListItem { key: React.Key; label: React.ReactNode; value: React.ReactNode; actions?: React.ReactNode; }
export interface PropertyListProps extends React.HTMLAttributes<HTMLDListElement> { items: PropertyListItem[]; }

export function PropertyList({ items, className, ...props }: PropertyListProps) {
  return <dl className={cn("p-pattern-property-list", className)} {...props}>{items.map((item) => <div className="p-pattern-property-list-row" key={item.key}><dt>{item.label}</dt><dd>{item.value}</dd>{item.actions ? <div className="p-pattern-property-list-actions">{item.actions}</div> : null}</div>)}</dl>;
}
