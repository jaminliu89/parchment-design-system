import * as React from "react";
import { cn } from "../lib/cn";

export interface AIDiffProps extends React.HTMLAttributes<HTMLDivElement> {
  before?: React.ReactNode;
  after?: React.ReactNode;
  heading?: React.ReactNode;
}

export function AIDiff({ before, after, heading = "AI changes", className, ...props }: AIDiffProps) {
  return <section className={cn("p-ai-diff", className)} {...props}><div className="p-ai-section-heading">{heading}</div><div className="p-ai-diff-grid"><div className="p-ai-diff-before" aria-label="Before">{before}</div><div className="p-ai-diff-after" aria-label="After">{after}</div></div></section>;
}
