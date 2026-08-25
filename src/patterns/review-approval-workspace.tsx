import * as React from "react";
import { cn } from "../lib/cn";
export interface ReviewApprovalWorkspaceProps extends React.HTMLAttributes<HTMLDivElement> { context?: React.ReactNode; content: React.ReactNode; diff?: React.ReactNode; decision: React.ReactNode; history?: React.ReactNode; }
export function ReviewApprovalWorkspace({ context, content, diff, decision, history, className, ...props }: ReviewApprovalWorkspaceProps) { return <div className={cn("p-pattern-review-approval", className)} {...props}>{context ? <aside className="p-pattern-review-approval-context">{context}</aside> : null}<main className="p-pattern-review-approval-content">{content}{diff}</main><aside className="p-pattern-review-approval-decision">{decision}{history}</aside></div>; }
