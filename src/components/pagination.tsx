import * as React from "react";
import { cn } from "../lib/cn";

export function Pagination({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Pagination" className={cn("p-pagination", className)} {...props} />;
}

export interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  current?: boolean;
}

export function PaginationButton({ current = false, className, ...props }: PaginationButtonProps) {
  return <button type="button" aria-current={current ? "page" : undefined} className={cn("p-pagination-button", current && "p-pagination-current", className)} {...props} />;
}
