import * as React from "react";
import { cn } from "../lib/cn";

export interface ComboboxOption { value: string; label: string; disabled?: boolean; }
export interface ComboboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  emptyText?: React.ReactNode;
}

export function Combobox({ options, value, onValueChange, className, emptyText = "No results", ...props }: ComboboxProps) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const listId = React.useId();
  const selected = options.find((item) => item.value === value);
  const filtered = options.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className={cn("p-combobox", className)}>
      <input
        {...props}
        className="p-input p-combobox-input"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        value={open ? query : selected?.label ?? query}
        onFocus={() => setOpen(true)}
        onChange={(event) => { setQuery(event.target.value); setOpen(true); }}
        onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}
      />
      {open ? (
        <div id={listId} role="listbox" className="p-combobox-list">
          {filtered.length ? filtered.map((item) => (
            <button
              key={item.value}
              type="button"
              role="option"
              aria-selected={item.value === value}
              disabled={item.disabled}
              className="p-combobox-option"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => { onValueChange?.(item.value); setQuery(""); setOpen(false); }}
            >{item.label}</button>
          )) : <div className="p-combobox-empty">{emptyText}</div>}
        </div>
      ) : null}
    </div>
  );
}
