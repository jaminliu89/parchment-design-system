import * as React from "react";
import { cn } from "../lib/cn";

export interface ViewSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function ViewSwitcher({ label = "View", className, ...props }: ViewSwitcherProps) {
  return <div role="group" aria-label={label} className={cn("p-view-switcher", className)} {...props} />;
}

export interface ViewSwitcherItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const ViewSwitcherItem = React.forwardRef<HTMLButtonElement, ViewSwitcherItemProps>(function ViewSwitcherItem({ selected, className, ...props }, ref) {
  return <button ref={ref} type="button" aria-pressed={selected} className={cn("p-view-switcher-item", selected && "p-view-switcher-item-selected", className)} {...props} />;
});
