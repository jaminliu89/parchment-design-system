import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../lib/cn";

export const DropdownMenu = DropdownPrimitive.Root;
export const DropdownMenuTrigger = DropdownPrimitive.Trigger;
export const DropdownMenuGroup = DropdownPrimitive.Group;
export const DropdownMenuSeparator = DropdownPrimitive.Separator;
export const DropdownMenuSub = DropdownPrimitive.Sub;
export const DropdownMenuSubTrigger = DropdownPrimitive.SubTrigger;

export const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>>(function DropdownMenuContent(
  { className, sideOffset = 6, ...props },
  ref,
) {
  return <DropdownPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("p-menu-content", className)} {...props} />;
});

export const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Item>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>>(function DropdownMenuItem(
  { className, ...props },
  ref,
) {
  return <DropdownPrimitive.Item ref={ref} className={cn("p-menu-item", className)} {...props} />;
});

export const DropdownMenuSubContent = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.SubContent>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>>(function DropdownMenuSubContent(
  { className, ...props },
  ref,
) {
  return <DropdownPrimitive.SubContent ref={ref} className={cn("p-menu-content", className)} {...props} />;
});
