import * as React from "react";
import { cn } from "../lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

export function Skeleton({ animated = true, className, ...props }: SkeletonProps) {
  return <div aria-hidden="true" className={cn("p-skeleton", animated && "p-skeleton-animated", className)} {...props} />;
}
