import * as React from "react";
import { cn } from "../lib/cn";

export interface AssetLibraryProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  filters?: React.ReactNode;
  sidebar?: React.ReactNode;
  viewControls?: React.ReactNode;
  emptyState?: React.ReactNode;
  isEmpty?: boolean;
}

export function AssetLibrary({ header, filters, sidebar, viewControls, emptyState, isEmpty = false, className, children, ...props }: AssetLibraryProps) {
  return <div className={cn("p-pattern-asset-library", className)} {...props}>
    {header ? <div className="p-pattern-asset-library-header">{header}</div> : null}
    {(filters || viewControls) ? <div className="p-pattern-asset-library-tools"><div>{filters}</div><div>{viewControls}</div></div> : null}
    <div className="p-pattern-asset-library-body">
      {sidebar ? <aside className="p-pattern-asset-library-sidebar">{sidebar}</aside> : null}
      <main className="p-pattern-asset-library-content">{isEmpty ? emptyState : children}</main>
    </div>
  </div>;
}
