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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { Pagination } from "@/components/ui/pagination";
import { Tabs } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const MoreHorizontalIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const SortIcon = () => (
  <svg className="w-3 h-3 text-neutral-400 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

const factoryData = [
  { id: "CNC-A-104", name: "Haas Automation VF-2", type: "CNC Machine", status: "OPERATIONAL", lastMaint: "2023-10-15" },
  { id: "ROB-W-022", name: "Fanuc CRX-10iA/L", type: "Welding Robot", status: "MAINTENANCE", lastMaint: "2023-11-02" },
  { id: "PR-M-441", name: "Aida Stamping Press", type: "Mechanical Press", status: "OPERATIONAL", lastMaint: "2023-09-28" },
];

export default function DataDisplayShowcase() {
  const [selectedRows, setSelectedRows] = useState<string[]>(["ROB-W-022"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");

  const toggleSelectAll = () => {
    if (selectedRows.length === factoryData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(factoryData.map((d) => d.id));
    }
  };

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-8 space-y-12 bg-neutral-0 min-h-screen">
      {/* Header & OEE Summary */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-neutral-900">Section 3: Data Display</h2>
          <p className="text-neutral-500 text-sm">Complex data management and specialized status tracking.</p>
        </div>

        <div className="w-full max-w-sm">
          <Card className="rounded-xl border-neutral-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-500 uppercase tracking-wider">OEE (Total)</CardTitle>
              <div className="p-2 bg-neutral-100 rounded-lg text-neutral-700 font-bold text-xs">%</div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-neutral-900">87.4%</div>
              <p className="text-xs text-success-700 flex items-center mt-2 font-medium">
                <TrendingUpIcon />
                <span className="ml-1">+2.4% VS YESTERDAY</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="space-y-6">

        {/* Filter Card */}
        <Card className="rounded-xl border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-0">
            <div className="flex flex-1 items-center gap-3">
              <SearchInput placeholder="Search assets..." className="max-w-xs" />
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
            <Button variant="outline" size="sm" className="h-9">
              <DownloadIcon />
              <span className="ml-2">Export</span>
            </Button>
          </div>
        </Card>

        {/* Table Card */}
        <Card className="rounded-xl border-neutral-200 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-neutral-50">
              <TableRow className="hover:bg-transparent border-neutral-200">
                <TableHead className="w-[50px] py-4">
                  <Checkbox 
                    checked={selectedRows.length === factoryData.length} 
                    onChange={toggleSelectAll} 
                  />
                </TableHead>
                <TableHead className="text-neutral-500 font-semibold text-xs uppercase tracking-wider">
                  Asset ID <SortIcon />
                </TableHead>
                <TableHead className="text-neutral-500 font-semibold text-xs uppercase tracking-wider">
                  Name
                </TableHead>
                <TableHead className="text-neutral-500 font-semibold text-xs uppercase tracking-wider">
                  Type
                </TableHead>
                <TableHead className="text-neutral-500 font-semibold text-xs uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="text-right text-neutral-500 font-semibold text-xs uppercase tracking-wider">
                  Last Maint.
                </TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {factoryData.map((asset) => (
                <TableRow 
                  key={asset.id} 
                  className={cn(
                    "border-neutral-200 transition-colors",
                    selectedRows.includes(asset.id) ? "bg-primary-50/30" : "hover:bg-neutral-50/50"
                  )}
                >
                  <TableCell className="py-4">
                    <Checkbox 
                      checked={selectedRows.includes(asset.id)} 
                      onChange={() => toggleRow(asset.id)} 
                    />
                  </TableCell>
                  <TableCell className="font-mono text-xs font-semibold text-neutral-900">{asset.id}</TableCell>
                  <TableCell className="font-medium text-neutral-900">{asset.name}</TableCell>
                  <TableCell className="text-neutral-500 text-sm">{asset.type}</TableCell>
                  <TableCell>
                    <Badge variant={asset.status === "OPERATIONAL" ? "success" : "warning"}>
                      {asset.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-neutral-500 text-sm">
                    {asset.lastMaint}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-neutral-600">
                      <MoreHorizontalIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="p-4 flex items-center justify-between border-t border-neutral-200 bg-neutral-0">
            <div className="text-sm text-neutral-500">
              Showing <span className="font-medium text-neutral-900">1</span> to <span className="font-medium text-neutral-900">5</span> of <span className="font-medium text-neutral-900">100</span> assets
            </div>
            <Pagination 
              currentPage={currentPage} 
              totalPages={5} 
              onPageChange={setCurrentPage} 
            />
          </div>
        </Card>
      </div>

      {/* Variation Showcase Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Semantic Status Badges (With Borders)</h3>
          <div className="flex flex-wrap gap-4 p-6 rounded-xl border border-neutral-200 bg-neutral-50/50">
            <div className="flex flex-col items-center gap-2">
              <Badge variant="success" className="px-3 py-1 text-[10px] font-bold tracking-widest">RUNNING</Badge>
              <span className="text-[10px] text-neutral-400 font-medium">SUCCESS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="warning" className="px-3 py-1 text-[10px] font-bold tracking-widest">IDLE</Badge>
              <span className="text-[10px] text-neutral-400 font-medium">WARNING</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="error" className="px-3 py-1 text-[10px] font-bold tracking-widest">FAULT</Badge>
              <span className="text-[10px] text-neutral-400 font-medium">ERROR</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="default" className="px-3 py-1 text-[10px] font-bold tracking-widest bg-neutral-100">OFFLINE</Badge>
              <span className="text-[10px] text-neutral-400 font-medium">NEUTRAL</span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Tooltip Example</h3>
          <div className="p-10 rounded-xl border border-dashed border-neutral-300 bg-neutral-0 flex items-center justify-center relative group">
            <Button variant="outline" className="relative">
              Hover over for details
            </Button>
            <div className="absolute -top-2 scale-0 group-hover:scale-100 transition-all duration-200">
              <div className="bg-neutral-900 text-neutral-0 text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                Detailed metrics for asset CNC-A-104
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
