"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Pagination } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export default function ActionsNavigationShowcase() {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentPage, setCurrentPage] = useState(1);

  const states = [
    { label: "Default", props: {} },
    { label: "Hover", props: { isHovered: true } },
    { label: "Active", props: { isActive: true } },
    { label: "Disabled", props: { disabled: true } },
    { label: "Error", props: { isError: true } },
  ];

  const variants = [
    { label: "Primary", value: "primary" as const },
    { label: "Secondary", value: "secondary" as const },
    { label: "Destructive", value: "destructive" as const },
  ];

  return (
    <div className="p-8 space-y-16 bg-neutral-0">
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-900">Buttons</h2>
          <p className="text-neutral-500 text-sm">Button states and variations using project design tokens.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider w-32">Variant</th>
                {states.map((state) => (
                  <th key={state.label} className="py-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider text-center">{state.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {variants.map((variant) => (
                <tr key={variant.value}>
                  <td className="py-6 text-sm font-medium text-neutral-700">{variant.label}</td>
                  {states.map((state) => (
                    <td key={state.label} className="py-6 text-center">
                      <Button variant={variant.value} {...state.props}>
                        Action
                      </Button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-8 space-y-6">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Icon & Text Combinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 border border-neutral-100 rounded-xl space-y-4">
              <Button variant="primary">
                <PlusIcon />
                <span>Text</span>
              </Button>
              <span className="text-xs text-neutral-400 font-medium">Leading Icon</span>
            </div>
            <div className="flex flex-col items-center p-6 border border-neutral-100 rounded-xl space-y-4">
              <Button variant="primary">
                <span>Text</span>
                <PlusIcon />
              </Button>
              <span className="text-xs text-neutral-400 font-medium">Trailing Icon</span>
            </div>
            <div className="flex flex-col items-center p-6 border border-neutral-100 rounded-xl space-y-4">
              <Button variant="primary" size="icon">
                <PlusIcon />
              </Button>
              <span className="text-xs text-neutral-400 font-medium">Icon Only</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2">Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Breadcrumbs</h3>
            <Breadcrumbs
              items={[
                { label: "Home", href: "#" },
                { label: "Settings", href: "#" },
                { label: "Notifications" },
              ]}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Search</h3>
            <SearchInput placeholder="Search factory assets..." />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2">Tabs & Pagination</h2>
        <div className="space-y-8">
          <Tabs
            tabs={[
              { label: "Overview", value: "overview" },
              { label: "Analytics", value: "analytics" },
              { label: "Reports", value: "reports" },
              { label: "Settings", value: "settings" },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
}
