import * as React from "react";
import { cn } from "../lib/cn";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
}

export function FormField({ label, help, error, required = false, className, children, ...props }: FormFieldProps) {
  return (
    <div className={cn("p-pattern-form-field", error && "p-pattern-form-field-error", className)} {...props}>
      <div className="p-pattern-form-field-label">{label}{required ? <span aria-hidden="true"> *</span> : null}</div>
      <div className="p-pattern-form-field-control">{children}</div>
      {error ? <div role="alert" className="p-pattern-form-field-message">{error}</div> : help ? <div className="p-pattern-form-field-help">{help}</div> : null}
    </div>
  );
}
