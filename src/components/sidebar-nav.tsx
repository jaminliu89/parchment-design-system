import * as React from "react";
import { cn } from "../lib/cn";

export function SidebarNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn("p-sidebar-nav", className)} {...props} />;
}

export interface SidebarNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const SidebarNavItem = React.forwardRef<HTMLButtonElement, SidebarNavItemProps>(function SidebarNavItem({ active, icon, trailing, className, children, ...props }, ref) {
  return (
    <button ref={ref} type="button" aria-current={active ? "page" : undefined} className={cn("p-sidebar-nav-item", active && "p-sidebar-nav-item-active", className)} {...props}>
      {icon ? <span className="p-sidebar-nav-icon" aria-hidden>{icon}</span> : null}
      <span className="p-sidebar-nav-label">{children}</span>
      {trailing ? <span className="p-sidebar-nav-trailing">{trailing}</span> : null}
    </button>
  );
});
