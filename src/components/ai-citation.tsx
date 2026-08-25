import * as React from "react";
import { cn } from "../lib/cn";

export interface AICitationProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  source: React.ReactNode;
  meta?: React.ReactNode;
}

export function AICitation({ source, meta, className, children, ...props }: AICitationProps) {
  return (
    <a className={cn("p-ai-citation", className)} {...props}>
      <span className="p-ai-citation-source">{source}</span>
      {meta ? <span className="p-ai-citation-meta">{meta}</span> : null}
      {children ? <span className="p-ai-citation-detail">{children}</span> : null}
    </a>
  );
}
