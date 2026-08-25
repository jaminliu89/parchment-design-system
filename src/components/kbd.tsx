import * as React from "react";
import { cn } from "../lib/cn";

export function Kbd({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <kbd className={cn("p-kbd", className)} {...props} />;
}
