import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../lib/cn";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(function AccordionItem({ className, ...props }, ref) {
  return <AccordionPrimitive.Item ref={ref} className={cn("p-accordion-item", className)} {...props} />;
});
export const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(function AccordionTrigger({ className, ...props }, ref) {
  return <AccordionPrimitive.Header><AccordionPrimitive.Trigger ref={ref} className={cn("p-accordion-trigger", className)} {...props} /></AccordionPrimitive.Header>;
});
export const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(function AccordionContent({ className, ...props }, ref) {
  return <AccordionPrimitive.Content ref={ref} className={cn("p-accordion-content", className)} {...props} />;
});
