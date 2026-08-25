import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";
export type ButtonSize = "compact" | "regular" | "comfortable";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild = false, loading = false, variant = "secondary", size = "regular", className, children, disabled, type = "button", ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      type={asChild ? undefined : type}
      className={cn("p-btn", `p-btn-${variant}`, `p-control-${size}`, loading && "p-btn-loading", className)}
      aria-busy={loading || undefined}
      aria-disabled={disabled || loading || undefined}
      disabled={asChild ? undefined : disabled || loading}
      {...props}
    >
      <span aria-hidden={loading || undefined}>{children}</span>
      {loading ? <span className="p-sr-only">Loading</span> : null}
    </Comp>
  );
});
