import * as React from "react";
import { cn } from "../lib/cn";
export interface AIStateBarProps extends React.HTMLAttributes<HTMLDivElement> { status: React.ReactNode; progress?: React.ReactNode; detail?: React.ReactNode; actions?: React.ReactNode; }
export function AIStateBar({ status, progress, detail, actions, className, ...props }: AIStateBarProps) { return <div className={cn("p-pattern-ai-state-bar", className)} role="status" {...props}><div className="p-pattern-ai-state-bar-status">{status}</div>{detail ? <div className="p-pattern-ai-state-bar-detail">{detail}</div> : null}{progress ? <div className="p-pattern-ai-state-bar-progress">{progress}</div> : null}{actions ? <div className="p-pattern-ai-state-bar-actions">{actions}</div> : null}</div>; }
