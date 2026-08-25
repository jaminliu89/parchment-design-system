import * as React from "react";
import { cn } from "../lib/cn";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
}

export function Field({ invalid = false, className, ...props }: FieldProps) {
  return <div className={cn("p-field", invalid && "p-field-invalid", className)} data-invalid={invalid || undefined} {...props} />;
}

export function FieldLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("p-label", className)} {...props} />;
}

export function FieldHelp({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-field-help", className)} {...props} />;
}

export function FieldError({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-field-error", className)} role="alert" {...props} />;
}
