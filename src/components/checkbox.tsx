import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../lib/cn";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(function Checkbox(
  { className, children, ...props },
  ref,
) {
  return (
    <CheckboxPrimitive.Root ref={ref} className={cn("p-checkbox-root", className)} {...props}>
      <CheckboxPrimitive.Indicator className="p-checkbox-indicator">✓</CheckboxPrimitive.Indicator>
      {children}
    </CheckboxPrimitive.Root>
  );
});
