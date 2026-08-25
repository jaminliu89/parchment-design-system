import * as React from "react";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { cn } from "../lib/cn";

export interface DataTableProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  emptyText?: React.ReactNode;
}

export function DataTable<TData, TValue>({ columns, data, emptyText = "No data", className, ...props }: DataTableProps<TData, TValue>) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
  return (
    <div className={cn("p-data-table-wrap", className)} {...props}>
      <table className="p-data-table">
        <thead>
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>{group.headers.map((header) => <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>)}</tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => (
            <tr key={row.id}>{row.getVisibleCells().map((cell) => <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>)}</tr>
          )) : <tr><td colSpan={columns.length} className="p-data-table-empty">{emptyText}</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
