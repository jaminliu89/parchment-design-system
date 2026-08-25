import * as React from "react";
import { Input, type InputProps } from "./input";
import { cn } from "../lib/cn";

export interface SearchInputProps extends Omit<InputProps, "type"> {
  leadingIcon?: React.ReactNode;
  onClear?: () => void;
  clearLabel?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { className, leadingIcon, onClear, clearLabel = "Clear", value, defaultValue, ...props },
  ref,
) {
  const hasValue = value !== undefined ? String(value).length > 0 : defaultValue !== undefined ? String(defaultValue).length > 0 : false;
  return (
    <div className={cn("p-search-input", className)}>
      {leadingIcon ? <span className="p-search-icon" aria-hidden="true">{leadingIcon}</span> : null}
      <Input ref={ref} type="search" value={value} defaultValue={defaultValue} className="p-search-control" {...props} />
      {onClear && hasValue ? <button type="button" className="p-search-clear" onClick={onClear}>{clearLabel}</button> : null}
    </div>
  );
});
