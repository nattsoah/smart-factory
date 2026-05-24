"use client";

import React from "react";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

import { Card } from "@/components/ui/card";

interface DataTableFilterProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onExport?: () => void;
}

export function DataTableFilter({ placeholder = "Search assets...", onSearch, onExport }: DataTableFilterProps) {
  return (
    <Card className="rounded-xl border-neutral-200 shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-0">
        <div className="flex flex-1 items-center gap-3">
          <SearchInput 
            placeholder={placeholder} 
            className="max-w-xs" 
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <div className="h-8 w-px bg-neutral-200 hidden md:block" />
          <div className="flex items-center gap-2">
            <Select className="w-32 h-9 text-xs">
              <option value="">Status</option>
              <option value="operational">Operational</option>
              <option value="maintenance">Maintenance</option>
            </Select>
            <Select className="w-32 h-9 text-xs">
              <option value="">Floor</option>
              <option value="a">Floor A</option>
              <option value="w">Floor W</option>
            </Select>
            <Select className="w-32 h-9 text-xs">
              <option value="">Type</option>
              <option value="cnc">CNC</option>
              <option value="robot">Robot</option>
            </Select>
          </div>
        </div>
        <Button variant="outline" size="sm" className="h-9 font-semibold" onClick={onExport}>
          <DownloadIcon />
          <span className="ml-2">Export</span>
        </Button>
      </div>
    </Card>
  );
}
