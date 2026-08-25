import * as React from "react";
import { Input, type InputProps } from "./input";
import { cn } from "../lib/cn";

export interface SearchInputProps extends Omit<InputProps, "type"> {
  onClear?: () => void;
  clearLabel?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { className, onClear, clearLabel = "Clear search", value, defaultValue, ...props },
  ref,
) {
  const hasValue = value !== undefined ? String(value).length > 0 : defaultValue !== undefined ? String(defaultValue).length > 0 : false;
  return (
    <div className={cn("p-search-input", className)}>
      <span className="p-search-icon" aria-hidden="true">⌕</span>
      <Input ref={ref} type="search" value={value} defaultValue={defaultValue} className="p-search-control" {...props} />
      {onClear && hasValue ? <button type="button" className="p-search-clear" aria-label={clearLabel} onClick={onClear}>×</button> : null}
    </div>
  );
});
