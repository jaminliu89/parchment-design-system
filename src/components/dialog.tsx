import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../lib/cn";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(function DialogContent({ className, children, ...props }, ref) {
  return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="p-dialog-overlay" /><DialogPrimitive.Content ref={ref} className={cn("p-dialog", className)} {...props}>{children}</DialogPrimitive.Content></DialogPrimitive.Portal>;
});
