"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Switch } from "@/components/ui/switch";
import { FileUpload } from "@/components/ui/file-upload";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function MachineFormEntry() {
  const router = useRouter();

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Assets", href: "/assets" },
    { label: "Register Unit" },
  ];

  return (
    <div className="p-8 pb-32 space-y-8 bg-neutral-50 min-h-screen">
      {/* 100% Reuse: Using PageHeader from shared components */}
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title="Machine Form Entry"
        description="Follow the industrial registration protocol to add new factory assets."
      />

      <div className="max-w-4xl space-y-8">
        {/* Section 1: General Information */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 bg-neutral-0 border-b border-neutral-100">
            {/* Inline SVG - No custom component defined */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <div className="flex-1">
              <CardTitle>General Information</CardTitle>
            </div>
            {/* Inline Tooltip implementation following project pattern */}
            <div className="relative group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 hover:text-neutral-600 cursor-help">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 group-hover:scale-100 transition-all duration-200 z-50">
                <div className="bg-neutral-900 text-neutral-0 text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                  Asset identification data
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="asset-name">Asset Name</Label>
                <Input id="asset-name" placeholder="Robotic Arm - Sector A" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="asset-tag">Asset Tag ID</Label>
                <Input id="asset-tag" isError defaultValue="INV-0000" />
                <span className="text-xs text-error-700 font-medium">Required format: FAC-ASSET-0000</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Machine Category</Label>
              <Select id="category">
                <option value="">Select category...</option>
                <option value="prod">Production</option>
                <option value="maint">Maintenance</option>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Configuration */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 bg-neutral-0 border-b border-neutral-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" />
            </svg>
            <div className="flex-1">
              <CardTitle>Configuration</CardTitle>
            </div>
            <div className="relative group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 hover:text-neutral-600 cursor-help">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 group-hover:scale-100 transition-all duration-200 z-50">
                <div className="bg-neutral-900 text-neutral-0 text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                  Operational parameters
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="flex items-center justify-between gap-6 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
              <div className="flex items-center gap-3">
                <Switch id="active-toggle" defaultChecked />
                <Label htmlFor="active-toggle">Active Status</Label>
              </div>
              <div className="w-64">
                <DatePicker />
              </div>
            </div>
            <FileUpload 
              label="Click to upload technical manuals or schematics" 
              helperText="PDF, PNG, JPG (max. 50MB)" 
            />
          </CardContent>
        </Card>

        {/* Section 3: Internal Notes */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 bg-neutral-0 border-b border-neutral-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
            </svg>
            <div className="flex-1">
              <CardTitle>Internal Notes</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Textarea placeholder="Confidential maintenance logs..." className="min-h-[120px]" />
          </CardContent>
        </Card>
      </div>

      {/* Footer Actions: Using only built-in Button components */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-neutral-0 border-t border-neutral-200 flex items-center justify-end px-12 z-40 ml-[280px]">
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => router.push("/assets")}>Cancel</Button>
          <Button variant="primary" className="px-12 font-bold shadow-lg">Save Asset</Button>
        </div>
      </div>
    </div>
  );
}
