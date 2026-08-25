import * as React from "react";
import { cn } from "../lib/cn";

export type AlertTone = "default" | "success" | "warning" | "error";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  title?: React.ReactNode;
}

export function Alert({ tone = "default", title, className, children, ...props }: AlertProps) {
  return (
    <div role={tone === "error" ? "alert" : "status"} className={cn("p-alert", `p-alert-${tone}`, className)} {...props}>
      {title ? <div className="p-alert-title">{title}</div> : null}
      <div className="p-alert-content">{children}</div>
    </div>
  );
}
