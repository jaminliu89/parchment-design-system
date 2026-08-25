import * as React from "react";
import { Button, type ButtonProps } from "./button";
import { cn } from "../lib/cn";

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  label: string;
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, className, children, ...props },
  ref,
) {
  return (
    <Button ref={ref} aria-label={label} className={cn("p-icon-btn", className)} {...props}>
      <span aria-hidden="true">{children}</span>
    </Button>
  );
});
