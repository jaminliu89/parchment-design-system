import * as React from "react";
import { cn } from "../lib/cn";

export function KeyValue({ className, ...props }: React.HTMLAttributes<HTMLDListElement>) {
  return <dl className={cn("p-key-value", className)} {...props} />;
}

export interface KeyValueItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
}

export function KeyValueItem({ label, value, className, ...props }: KeyValueItemProps) {
  return (
    <div className={cn("p-key-value-item", className)} {...props}>
      <dt className="p-key-value-key">{label}</dt>
      <dd className="p-key-value-value">{value}</dd>
    </div>
  );
}
