import * as React from "react";
import { cn } from "../lib/cn";

export type AIMessageRole = "assistant" | "user" | "system";

export interface AIMessageProps extends React.HTMLAttributes<HTMLElement> {
  roleType?: AIMessageRole;
  meta?: React.ReactNode;
}

export function AIMessage({ roleType = "assistant", meta, className, children, ...props }: AIMessageProps) {
  return (
    <article data-role={roleType} className={cn("p-ai-message", `p-ai-message-${roleType}`, className)} {...props}>
      {meta ? <header className="p-ai-message-meta">{meta}</header> : null}
      <div className="p-ai-message-content">{children}</div>
    </article>
  );
}
