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
import { DatePicker } from "@/components/ui/date-picker";
import { Alert } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

// --- Icons ---
const TrendingUpIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TrendingDownIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const MoreHorizontalIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Visual Components ---

const Sparkline = ({ color = "primary" }: { color?: "primary" | "success" | "error" }) => {
  const colorMap = {
    primary: "#0ea5e9", 
    success: "#10b981", 
    error: "#f43f5e",   
  };
  
  return (
    <div className="h-10 w-full mt-4">
      <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
        <path
          d="M0 30 Q 15 10, 30 25 T 60 15 T 100 5"
          fill="none"
          stroke={colorMap[color]}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 30 Q 15 10, 30 25 T 60 15 T 100 5 V 40 H 0 Z"
          fill={`url(#gradient-${color})`}
          opacity="0.1"
        />
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colorMap[color]} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const MainChart = () => {
  const chartData = [
    { time: "08:00 AM", actual: 25, target: 30 },
    { time: "10:00 AM", actual: 25, target: 15 },
    { time: "12:00 PM", actual: 70, target: 20 },
    { time: "02:00 PM", actual: 35, target: 55 },
    { time: "04:00 PM", actual: 15, target: 45 },
  ];

  return (
    <div className="space-y-4">
      <div className="h-64 w-full relative flex items-end gap-6 pt-4 px-4">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between border-b border-l border-neutral-200 pointer-events-none mb-0">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full border-t border-neutral-100 border-dashed" />
          ))}
        </div>
        
        {/* Paired Bars */}
        {chartData.map((data, i) => (
          <div key={i} className="flex-1 flex items-end gap-1.5 h-full relative z-10">
            <div 
              className="bg-primary-100 w-full rounded-t-[1px] transition-all hover:bg-neutral-800" 
              style={{ height: `${data.actual}%` }}
            />
            <div 
              className="bg-neutral-900 w-full rounded-t-[1px] transition-all" 
              style={{ height: `${data.target}%` }}
            />
          </div>
        ))}
      </div>
      
      {/* X-Axis Labels */}
      <div className="flex justify-between px-4 pl-10">
        {chartData.map((data, i) => (
          <div key={i} className="flex-1 text-center">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tight">
              {data.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Mock Data ---
const factoryData = [
  { id: "CNC-A-104", name: "Haas Automation VF-2", type: "CNC Machine", status: "OPERATIONAL", lastMaint: "2023-10-15" },
  { id: "ROB-W-022", name: "Fanuc CRX-10iA/L", type: "Welding Robot", status: "MAINTENANCE", lastMaint: "2023-11-02" },
  { id: "PR-M-441", name: "Aida Stamping Press", type: "Mechanical Press", status: "OPERATIONAL", lastMaint: "2023-09-28" },
];

const metrics = [
  { title: "Cycle Time (Avg)", value: "24.5s", trend: "-1.2s", status: "up", color: "success" as const, unit: "TIME" },
  { title: "Total Uptime", value: "18.2h", trend: "+2.4h", status: "up", color: "success" as const, unit: "TIME" },
  { title: "Down Time", value: "1.5h", trend: "-0.5h", status: "up", color: "success" as const, unit: "TIME" },
  { title: "Machines Active", value: "18/20", trend: "90%", status: "up", color: "primary" as const, unit: "PROG" },
];

export default function DashboardPage() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

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
    <div className="p-4 md:p-8 space-y-8 min-h-screen bg-neutral-100">
      {/* 1. Page Header */}
      <div className="flex flex-col md:flex-row md:items-start lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-neutral-500 text-sm">Industrial metrics and real-time asset monitoring.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <DatePicker className="w-full sm:w-[180px] bg-neutral-0 h-10" />
          <Button variant="outline" size="md" className="bg-neutral-0 h-10 px-6 w-full sm:w-auto">
            <DownloadIcon />
            <span>Export Report</span>
          </Button>
        </div>
      </div>

      {/* 2. KPI Cards (Revised Data Types) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="rounded-xl border-neutral-200 shadow-sm overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                {metric.title}
              </CardTitle>
              <div className="h-6 w-6 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 font-bold text-[10px]">
                {metric.unit === "TIME" ? <ClockIcon /> : "%"}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold text-neutral-900">{metric.value}</div>
                <div className={cn(
                  "text-[10px] flex items-center font-bold px-1.5 py-0.5 rounded-full",
                  metric.status === "up" ? "text-success-700 bg-success-50" : "text-error-700 bg-error-50"
                )}>
                  {metric.status === "up" ? <TrendingUpIcon /> : <TrendingDownIcon />}
                  <span className="ml-1">{metric.trend}</span>
                </div>
              </div>
              
              {/* Progress Bar for the 4th card, Sparkline for others */}
              {metric.unit === "PROG" ? (
                <div className="mt-6 space-y-1.5">
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-bold text-neutral-400 uppercase">
                    <span>Utilization</span>
                    <span>90%</span>
                  </div>
                </div>
              ) : (
                <Sparkline color={metric.color} />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 3 & 4. Main Chart (10 points + Time X-Axis) & Alert Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3. Main Chart */}
        <Card className="lg:col-span-2 rounded-xl border-neutral-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Production Performance</CardTitle>
              <Select className="w-32 h-8 text-[10px]">
                <option>Today (Hourly)</option>
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <MainChart />
            <div className="mt-6 flex items-center justify-center gap-8 border-t border-neutral-100 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-sm bg-primary-100" />
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Actual Output</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-sm bg-neutral-900" />
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Target Output</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Alert Box (Aside) */}
        <Card className="rounded-xl border-neutral-200 shadow-sm flex flex-col bg-neutral-0">
          <CardHeader className="flex flex-row items-center justify-between border-b border-neutral-100 py-4">
            <CardTitle className="text-sm font-bold text-neutral-900 uppercase tracking-wider">System Alerts</CardTitle>
            <button className="text-[10px] font-bold uppercase tracking-widest text-primary-600 hover:text-primary-700">
              View All
            </button>
          </CardHeader>
          <CardContent className="flex-1 space-y-4 pt-4">
            <Alert variant="error" icon={<AlertCircleIcon />}>
              <div className="flex flex-col">
                <span className="font-bold text-[11px] uppercase tracking-wider">Critical Fault: CNC-B-205</span>
                <span className="text-[10px] opacity-80 mt-1">Spindle temperature exceeded 95°C. Shutdown.</span>
              </div>
            </Alert>
            <Alert variant="warning" icon={<AlertCircleIcon />}>
              <div className="flex flex-col">
                <span className="font-bold text-[11px] uppercase tracking-wider">Maintenance: ROB-W-022</span>
                <span className="text-[10px] opacity-80 mt-1">Scheduled inspection required in 48 hours.</span>
              </div>
            </Alert>
            <Alert variant="warning" icon={<AlertCircleIcon />}>
              <div className="flex flex-col">
                <span className="font-bold text-[11px] uppercase tracking-wider">Quality Alert: Line C</span>
                <span className="text-[10px] opacity-80 mt-1">Deviation detected in production batch #8841.</span>
              </div>
            </Alert>
            <Alert variant="info" icon={<AlertCircleIcon />}>
              <div className="flex flex-col">
                <span className="font-bold text-[11px] uppercase tracking-wider">System Update</span>
                <span className="text-[10px] opacity-80 mt-1">Optimization firmware v2.4 successfully deployed.</span>
              </div>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* 5. Data Table Section */}
      <Card className="rounded-xl border-neutral-200 shadow-sm overflow-hidden">
        {/* Table Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-neutral-0 p-4 border-b border-neutral-200">
          <div className="flex flex-col md:flex-row flex-1 md:items-center gap-3">
            <SearchInput placeholder="Filter assets..." className="w-full md:max-w-xs h-9" />
            <div className="h-6 w-px bg-neutral-200 hidden md:block" />
            <div className="flex flex-wrap items-center gap-2">
              <Select className="flex-1 md:w-32 h-9 text-xs">
                <option value="">Status</option>
                <option value="operational">Operational</option>
                <option value="maintenance">Maintenance</option>
              </Select>
              <Select className="flex-1 md:w-32 h-9 text-xs">
                <option value="">Floor</option>
                <option value="1">Floor 1</option>
                <option value="2">Floor 2</option>
              </Select>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full lg:w-auto h-9">
            <DownloadIcon />
            <span>Export Table</span>
          </Button>
        </div>

        {/* Table Body */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-neutral-50 border-b border-neutral-200">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[50px] py-4">
                  <Checkbox 
                    checked={selectedRows.length === factoryData.length && factoryData.length > 0} 
                    onChange={toggleSelectAll} 
                  />
                </TableHead>
                <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">Asset ID</TableHead>
                <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">Name</TableHead>
                <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">Type</TableHead>
                <TableHead className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                <TableHead className="text-right text-neutral-500 font-bold text-[10px] uppercase tracking-widest">Last Maint.</TableHead>
                <TableHead className="w-[60px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-neutral-0">
              {factoryData.map((asset) => (
                <TableRow 
                  key={asset.id} 
                  className={cn(
                    "border-neutral-200 transition-colors",
                    selectedRows.includes(asset.id) ? "bg-primary-50/40" : "hover:bg-neutral-50/50"
                  )}
                >
                  <TableCell className="py-4">
                    <Checkbox 
                      checked={selectedRows.includes(asset.id)} 
                      onChange={() => toggleRow(asset.id)} 
                    />
                  </TableCell>
                  <TableCell className="font-mono text-xs font-bold text-neutral-900">{asset.id}</TableCell>
                  <TableCell className="font-semibold text-neutral-900 text-sm">{asset.name}</TableCell>
                  <TableCell className="text-neutral-500 text-xs font-medium">{asset.type}</TableCell>
                  <TableCell>
                    <Badge variant={
                      asset.status === "OPERATIONAL" ? "success" : 
                      asset.status === "MAINTENANCE" ? "warning" : "error"
                    } className="px-2 py-0.5 text-[10px] font-bold tracking-widest">
                      {asset.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-neutral-500 text-xs font-medium">
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
        </div>

        {/* Minimal Footer (No Pagination) */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-0 flex items-center justify-start">
          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            Total Assets: <span className="text-neutral-900">{factoryData.length}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
