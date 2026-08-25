import * as React from "react";
import { cn } from "../lib/cn";

export interface AIArtifactProps extends React.HTMLAttributes<HTMLElement> {
  heading?: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
}

export function AIArtifact({ heading, meta, actions, className, children, ...props }: AIArtifactProps) {
  return <article className={cn("p-ai-artifact", className)} {...props}><header className="p-ai-artifact-header"><div>{heading ? <div className="p-ai-section-heading">{heading}</div> : null}{meta ? <div className="p-ai-muted">{meta}</div> : null}</div>{actions ? <div className="p-ai-actions">{actions}</div> : null}</header><div className="p-ai-artifact-body">{children}</div></article>;
}
