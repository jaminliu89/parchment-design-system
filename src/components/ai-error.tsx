import * as React from "react";
import { cn } from "../lib/cn";

export interface AIErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  retry?: React.ReactNode;
}

export function AIError({ heading = "AI action failed", description, retry, className, ...props }: AIErrorProps) {
  return <section role="alert" className={cn("p-ai-error", className)} {...props}><div><div className="p-ai-section-heading">{heading}</div>{description ? <div className="p-ai-muted">{description}</div> : null}</div>{retry ? <div className="p-ai-actions">{retry}</div> : null}</section>;
}
