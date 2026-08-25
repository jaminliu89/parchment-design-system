import * as React from "react";
import { Command } from "cmdk";
import { Dialog, DialogContent } from "./dialog";
import { cn } from "../lib/cn";

export interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
  emptyText?: React.ReactNode;
  children?: React.ReactNode;
}

export function CommandPalette({ open, onOpenChange, placeholder = "Search commands", emptyText = "No results", children }: CommandPaletteProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-command-dialog">
        <Command className="p-command" label="Command palette">
          <Command.Input className="p-command-input" placeholder={placeholder} autoFocus />
          <Command.List className="p-command-list">
            <Command.Empty className="p-command-empty">{emptyText}</Command.Empty>
            {children}
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export const CommandGroup = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Command.Group>>(function CommandGroup({ className, ...props }, ref) {
  return <Command.Group ref={ref} className={cn("p-command-group", className)} {...props} />;
});

export const CommandItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Command.Item>>(function CommandItem({ className, ...props }, ref) {
  return <Command.Item ref={ref} className={cn("p-command-item", className)} {...props} />;
});

export const CommandSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Command.Separator>>(function CommandSeparator({ className, ...props }, ref) {
  return <Command.Separator ref={ref} className={cn("p-command-separator", className)} {...props} />;
});
