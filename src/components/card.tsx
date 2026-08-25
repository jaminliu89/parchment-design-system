import * as React from "react";
import { cn } from "../lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, elevated = false, ...props },
  ref,
) {
  return <div ref={ref} className={cn("p-card", elevated && "p-card-elevated", className)} {...props} />;
});
