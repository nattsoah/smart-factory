"use client";

import React, { useState } from "react";
import { Alert } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const InfoIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WarningIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const SuccessIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ErrorIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function FeedbackOverlaysShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 space-y-12 bg-neutral-0">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Alerts & Notifications</h3>
          <div className="space-y-4">
            <Alert variant="info" icon={<InfoIcon />}>
              Scheduled maintenance for Sector 7 starting tomorrow at 08:00 AM.
            </Alert>
            <Alert variant="warning" icon={<WarningIcon />}>
              Critical pressure drop detected in Hydraulic System H-4.
            </Alert>
            <Alert variant="success" icon={<SuccessIcon />}>
              Asset successfully registered in the industrial network.
            </Alert>
            <Alert variant="error" icon={<ErrorIcon />}>
              Authorization failed. Access denied to secure control panel.
            </Alert>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Skeleton Loading Blocks</h3>
          <Card className="rounded-xl border-neutral-200">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-3 w-1/4" />
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Modal Structure</h3>
        <div className="p-12 rounded-xl border border-dashed border-neutral-200 bg-neutral-50/50 flex items-center justify-center">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Preview Modal Dialog
          </Button>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register New Industrial Asset"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Register Asset
            </Button>
          </>
        }
      >
        <div className="space-y-6">
          <p className="text-sm text-neutral-500">
            Complete the form below to register a new machine or IoT device. All fields marked with * are mandatory.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="asset-id">Asset ID *</Label>
              <Input id="asset-id" placeholder="e.g., CNC-A-104" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serial">Serial Number</Label>
              <Input id="serial" placeholder="S/N: 94810-X" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Machine Category</Label>
            <Input id="category" placeholder="Select category..." />
          </div>
        </div>
      </Modal>
    </div>
  );
}
