import * as React from "react";
import { cn } from "../lib/cn";

export type AsyncStateKind = "loading" | "error" | "empty" | "ready";
export interface AsyncStateProps extends React.HTMLAttributes<HTMLDivElement> { state: AsyncStateKind; loading?: React.ReactNode; error?: React.ReactNode; empty?: React.ReactNode; children?: React.ReactNode; retry?: React.ReactNode; }
export function AsyncState({ state, loading, error, empty, children, retry, className, ...props }: AsyncStateProps) {
  let content = children;
  if (state === "loading") content = loading;
  if (state === "error") content = <>{error}{retry ? <div className="p-pattern-async-state-actions">{retry}</div> : null}</>;
  if (state === "empty") content = empty;
  return <div className={cn("p-pattern-async-state", `p-pattern-async-state-${state}`, className)} aria-busy={state === "loading" || undefined} {...props}>{content}</div>;
}
