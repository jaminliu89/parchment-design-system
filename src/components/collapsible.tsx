import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "../lib/cn";

export const Collapsible = CollapsiblePrimitive.Root;

export const CollapsibleTrigger = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>>(function CollapsibleTrigger(
  { className, ...props },
  ref,
) {
  return <CollapsiblePrimitive.Trigger ref={ref} className={cn("p-collapsible-trigger", className)} {...props} />;
});

export const CollapsibleContent = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.Content>, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>>(function CollapsibleContent(
  { className, ...props },
  ref,
) {
  return <CollapsiblePrimitive.Content ref={ref} className={cn("p-collapsible-content", className)} {...props} />;
});
