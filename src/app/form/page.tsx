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
import { Tooltip } from "@/components/ui/tooltip";
import { InfoIcon, HelpCircleIcon, SettingsIcon, FileTextIcon } from "@/components/ui/icons";
import { FORM_BREADCRUMBS } from "@/constants/mock-data";

export default function MachineFormEntry() {
  const router = useRouter();

  return (
    <div className="p-8 pb-32 space-y-8 bg-neutral-50 min-h-screen">
      <PageHeader
        breadcrumbItems={FORM_BREADCRUMBS}
        title="Machine Form Entry"
        description="Follow the industrial registration protocol to add new factory assets."
      />

      <div className="max-w-full space-y-8">
        {/* Section 1: General Information */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 bg-neutral-0 border-b border-neutral-100">
            <InfoIcon className="text-primary-600" />
            <div className="flex-1">
              <CardTitle>General Information</CardTitle>
            </div>
            <Tooltip content="Asset identification data">
              <HelpCircleIcon className="text-neutral-400 hover:text-neutral-600 cursor-help" />
            </Tooltip>
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
            <SettingsIcon className="text-primary-600" />
            <div className="flex-1">
              <CardTitle>Configuration</CardTitle>
            </div>
            <Tooltip content="Operational parameters">
              <HelpCircleIcon className="text-neutral-400 hover:text-neutral-600 cursor-help" />
            </Tooltip>
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
            <FileTextIcon className="text-primary-600" />
            <div className="flex-1">
              <CardTitle>Internal Notes</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Textarea placeholder="Confidential maintenance logs..." className="min-h-[120px]" />
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-20 bg-neutral-0 border-t border-neutral-200 flex items-center justify-end px-4 md:px-12 z-40 lg:ml-[280px]">
        <div className="flex gap-4 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none" onClick={() => router.push("/assets")}>Cancel</Button>
          <Button variant="primary" className="flex-1 sm:flex-none px-12 font-bold shadow-lg">Save Asset</Button>
        </div>
      </div>
    </div>
  );
}
