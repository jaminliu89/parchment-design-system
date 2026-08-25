import * as React from "react";
import { cn } from "../lib/cn";

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  inspector?: React.ReactNode;
}

export function AppShell({ sidebar, header, inspector, className, children, ...props }: AppShellProps) {
  return (
    <div className={cn("p-pattern-app-shell", className)} {...props}>
      {sidebar ? <aside className="p-pattern-app-shell-sidebar">{sidebar}</aside> : null}
      <div className="p-pattern-app-shell-main">
        {header ? <header className="p-pattern-app-shell-header">{header}</header> : null}
        <main className="p-pattern-app-shell-content">{children}</main>
      </div>
      {inspector ? <aside className="p-pattern-app-shell-inspector">{inspector}</aside> : null}
    </div>
  );
}
