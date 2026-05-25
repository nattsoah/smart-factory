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

import { 
  TrendingUpIcon, 
  TrendingDownIcon, 
  DownloadIcon, 
  MoreHorizontalIcon, 
  AlertCircleIcon, 
  ClockIcon 
} from "@/components/ui/icons";
import { Sparkline, MainChart } from "@/components/shared/analytics";
import { FACTORY_DATA, DASHBOARD_METRICS, CHART_DATA, SYSTEM_ALERTS } from "@/constants/mock-data";

export default function DashboardPage() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedRows.length === FACTORY_DATA.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(FACTORY_DATA.map((d) => d.id));
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

      {/* 2. KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_METRICS.map((metric) => (
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

      {/* 3 & 4. Main Chart & Alert Box */}
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
            <MainChart data={CHART_DATA} />
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
            {SYSTEM_ALERTS.map((alert) => (
              <Alert key={alert.id} variant={alert.variant} icon={<AlertCircleIcon />}>
                <div className="flex flex-col">
                  <span className="font-bold text-[11px] uppercase tracking-wider">{alert.title}</span>
                  <span className="text-[10px] opacity-80 mt-1">{alert.message}</span>
                </div>
              </Alert>
            ))}
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
                    checked={selectedRows.length === FACTORY_DATA.length && FACTORY_DATA.length > 0} 
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
              {FACTORY_DATA.map((asset) => (
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

        {/* Minimal Footer */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-0 flex items-center justify-start">
          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            Total Assets: <span className="text-neutral-900">{FACTORY_DATA.length}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
