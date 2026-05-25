"use client";

import React from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem } from "@/types/shared";

interface PageHeaderProps {
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  description: string;
  action?: {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
}

export function PageHeader({ breadcrumbItems, title, description, action }: PageHeaderProps) {
  return (
    <div className="space-y-4 mb-6">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight leading-none">{title}</h1>
          <p className="text-sm text-neutral-500 leading-tight">{description}</p>
        </div>
        {action && (
          <div className="flex items-center w-full md:w-auto">
            <Button variant="primary" size="md" onClick={action.onClick} className="w-full md:w-auto min-h-[44px] font-bold px-6 py-0">
              {action.icon}
              <span className="ml-2">{action.label}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
