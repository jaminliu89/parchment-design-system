import * as React from "react";
import { cn } from "../lib/cn";

export type AlertTone = "default" | "success" | "warning" | "error";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  heading?: React.ReactNode;
}

export function Alert({ tone = "default", heading, className, children, ...props }: AlertProps) {
  return (
    <div role={tone === "error" ? "alert" : "status"} className={cn("p-alert", `p-alert-${tone}`, className)} {...props}>
      {heading ? <div className="p-alert-title">{heading}</div> : null}
      <div className="p-alert-content">{children}</div>
    </div>
  );
}
