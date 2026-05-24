"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const MoreHorizontalIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
);

const SortIcon = () => (
  <svg className="w-3 h-3 text-neutral-400 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

import { Card } from "@/components/ui/card";

interface DataItem {
  id: string;
  name: string;
  type: string;
  status: string;
  lastMaint: string;
}

interface DataTableProps {
  data: DataItem[];
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export function DataTable({ data, totalPages = 1, currentPage = 1, onPageChange }: DataTableProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((d) => d.id));
    }
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Card className="rounded-xl border-neutral-200 shadow-sm overflow-hidden bg-neutral-0">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-neutral-50/50 border-b border-neutral-200">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[50px] py-4 pl-6">
                <Checkbox 
                  checked={selectedRows.length === data.length && data.length > 0} 
                  onChange={toggleSelectAll} 
                />
              </TableHead>
              <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">
                ID <SortIcon />
              </TableHead>
              <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">
                Name
              </TableHead>
              <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">
                Type
              </TableHead>
              <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">
                Status
              </TableHead>
              <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">
                Last Maint.
              </TableHead>
              <TableHead className="w-[80px] text-right pr-6 text-neutral-500 font-bold text-[10px] uppercase tracking-widest">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow 
                key={item.id} 
                className={cn(
                  "border-b border-neutral-100 transition-colors",
                  selectedRows.includes(item.id) ? "bg-primary-50/30" : "hover:bg-neutral-50/50"
                )}
              >
                <TableCell className="py-4 pl-6">
                  <Checkbox 
                    checked={selectedRows.includes(item.id)} 
                    onChange={() => toggleRow(item.id)} 
                  />
                </TableCell>
                <TableCell className="font-mono text-xs font-bold text-neutral-900">{item.id}</TableCell>
                <TableCell className="font-semibold text-neutral-900 text-sm">{item.name}</TableCell>
                <TableCell className="text-neutral-500 text-sm">{item.type}</TableCell>
                <TableCell>
                  <Badge variant={
                    item.status === "OPERATIONAL" ? "success" : 
                    item.status === "MAINTENANCE" ? "warning" : "error"
                  }>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-neutral-500 text-sm">
                  {item.lastMaint}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-neutral-900 transition-colors">
                    <MoreHorizontalIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100 bg-neutral-0">
        <div className="text-xs text-neutral-500 font-medium">
          Showing <span className="text-neutral-900 font-bold">1</span> to <span className="text-neutral-900 font-bold">{data.length}</span> of <span className="text-neutral-900 font-bold">100</span> assets
        </div>
        {onPageChange && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={onPageChange} 
          />
        )}
      </div>
    </Card>
  );
}
