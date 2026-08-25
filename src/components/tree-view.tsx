import * as React from "react";
import { cn } from "../lib/cn";

export interface TreeNode {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
}

export interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  nodes: TreeNode[];
  selectedId?: string;
  defaultExpandedIds?: string[];
  onSelect?: (id: string) => void;
}

export function TreeView({ nodes, selectedId, defaultExpandedIds = [], onSelect, className, ...props }: TreeViewProps) {
  const [expanded, setExpanded] = React.useState(() => new Set(defaultExpandedIds));
  const toggle = (id: string) => setExpanded((current) => { const next = new Set(current); next.has(id) ? next.delete(id) : next.add(id); return next; });
  const renderNodes = (items: TreeNode[], level: number) => items.map((node) => {
    const hasChildren = Boolean(node.children?.length);
    const isExpanded = expanded.has(node.id);
    return (
      <div key={node.id} role="treeitem" aria-level={level} aria-expanded={hasChildren ? isExpanded : undefined} aria-selected={node.id === selectedId} aria-disabled={node.disabled || undefined} className="p-tree-item">
        <button
          type="button"
          disabled={node.disabled}
          className={cn("p-tree-row", node.id === selectedId && "p-tree-row-selected")}
          onClick={() => onSelect?.(node.id)}
          onKeyDown={(event) => {
            if (!hasChildren) return;
            if (event.key === "ArrowRight" && !isExpanded) { event.preventDefault(); toggle(node.id); }
            if (event.key === "ArrowLeft" && isExpanded) { event.preventDefault(); toggle(node.id); }
          }}
        >
          <span className={cn("p-tree-expander", !hasChildren && "p-tree-expander-empty")} onClick={(event) => { if (hasChildren) { event.stopPropagation(); toggle(node.id); } }} aria-hidden="true" />
          {node.icon ? <span className="p-tree-icon" aria-hidden="true">{node.icon}</span> : null}
          <span className="p-tree-label">{node.label}</span>
        </button>
        {hasChildren && isExpanded ? <div role="group" className="p-tree-group">{renderNodes(node.children!, level + 1)}</div> : null}
      </div>
    );
  });
  return <div role="tree" className={cn("p-tree", className)} {...props}>{renderNodes(nodes, 1)}</div>;
}

export const FileTree = TreeView;
