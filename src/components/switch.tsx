import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../lib/cn";

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(function Switch(
  { className, ...props },
  ref,
) {
  return (
    <SwitchPrimitive.Root ref={ref} className={cn("p-switch-root", className)} {...props}>
      <SwitchPrimitive.Thumb className="p-switch-thumb" />
    </SwitchPrimitive.Root>
  );
});
