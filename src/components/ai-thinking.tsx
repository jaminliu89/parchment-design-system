import * as React from "react";
import { cn } from "../lib/cn";

export interface AIThinkingProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function AIThinking({ label = "Thinking", className, ...props }: AIThinkingProps) {
  return (
    <div role="status" aria-live="polite" aria-label={label} className={cn("p-ai-thinking", className)} {...props}>
      <span className="p-ai-thinking-bar" aria-hidden />
      <span className="p-ai-thinking-label">{label}</span>
    </div>
  );
}
