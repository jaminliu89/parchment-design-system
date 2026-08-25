import * as React from "react";
import { cn } from "../lib/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, error = false, ...props },
  ref,
) {
  return <textarea ref={ref} className={cn("p-textarea", error && "p-input-error", className)} aria-invalid={error || undefined} {...props} />;
});
