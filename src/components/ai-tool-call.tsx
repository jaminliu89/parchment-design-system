import * as React from "react";
import { cn } from "../lib/cn";

export type AIToolCallState = "queued" | "running" | "success" | "error";

export interface AIToolCallProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  state?: AIToolCallState;
  detail?: React.ReactNode;
}

export function AIToolCall({ name, state = "queued", detail, className, ...props }: AIToolCallProps) {
  return (
    <div className={cn("p-ai-tool-call", `p-ai-tool-call-${state}`, className)} role="group" aria-label={`${name} tool call`} {...props}>
      <div className="p-ai-tool-call-head">
        <span className="p-ai-tool-call-marker" aria-hidden />
        <span className="p-ai-tool-call-name">{name}</span>
        <span className="p-ai-tool-call-state">{state}</span>
      </div>
      {detail ? <div className="p-ai-tool-call-detail">{detail}</div> : null}
    </div>
  );
}
