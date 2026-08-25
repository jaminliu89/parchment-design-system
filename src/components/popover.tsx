import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/cn";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>(function PopoverContent(
  { className, sideOffset = 8, ...props },
  ref,
) {
  return <PopoverPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("p-popover-content", className)} {...props} />;
});
