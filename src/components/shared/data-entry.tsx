"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Switch } from "@/components/ui/switch";
import { FileUpload } from "@/components/ui/file-upload";

export default function DataEntryShowcase() {
  return (
    <div className="p-8 space-y-12 bg-neutral-0">
      <section className="max-w-4xl space-y-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-neutral-700">Data Entry Section</h2>
          <p className="text-neutral-500 text-sm">Strictly following the visual instructions and patterns from the design mockup.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Input & Date Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Basic Inputs</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input-default">Factory Serial Number</Label>
                <Input id="input-default" placeholder="e.g. SN-10293" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-picker">Production Date</Label>
                <DatePicker id="date-picker" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-error">Error State Reference</Label>
                <Input id="input-error" isError defaultValue="Invalid input" />
                <span className="text-xs text-error-700 font-medium">Please enter a valid serial number.</span>
              </div>
            </div>
          </div>

          {/* Select & Textarea Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Selection & Description</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="select-default">Asset Category</Label>
                <Select id="select-default">
                  <option value="">Select category...</option>
                  <option value="1">Heavy Machinery</option>
                  <option value="2">IoT Sensors</option>
                  <option value="3">Material Handling</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="textarea-default">Operational Notes</Label>
                <Textarea id="textarea-default" placeholder="Enter maintenance or operational logs..." className="min-h-[120px]" />
              </div>
            </div>
          </div>

          {/* Toggle & Upload Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">System Toggles</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="toggle-1" className="text-base font-normal">Automated Monitoring</Label>
                  <Switch id="toggle-1" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="toggle-2" className="text-base font-normal">Cloud Synchronization</Label>
                  <Switch id="toggle-2" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Documentation</h3>
              <FileUpload label="Click to upload ISO certificate" helperText="PDF, PNG, JPG (max. 10MB)" />
            </div>
          </div>

          {/* Choice Selection Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Checkboxes</h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-1" defaultChecked />
                  <Label htmlFor="check-1" className="font-normal text-sm">Critical Infrastructure</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="check-2" />
                  <Label htmlFor="check-2" className="font-normal text-sm">External Access Allowed</Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Priority Level</h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <Radio id="radio-1" name="prio" defaultChecked />
                  <Label htmlFor="radio-1" className="font-normal text-sm">Standard Priority</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Radio id="radio-2" name="prio" />
                  <Label htmlFor="radio-2" className="font-normal text-sm">Urgent Maintenance</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-12 border-t border-neutral-100 flex justify-end gap-4">
          <Button variant="outline" className="border-neutral-300 text-neutral-700">Reset Form</Button>
          <Button variant="primary" className="px-6">
            Save Unit Configuration
          </Button>
        </div>
      </section>
    </div>
  );
}
