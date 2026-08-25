import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../lib/cn";

export const RadioGroup = RadioGroupPrimitive.Root;

export const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(function RadioGroupItem(
  { className, ...props },
  ref,
) {
  return (
    <RadioGroupPrimitive.Item ref={ref} className={cn("p-radio-root", className)} {...props}>
      <RadioGroupPrimitive.Indicator className="p-radio-indicator" />
    </RadioGroupPrimitive.Item>
  );
});
