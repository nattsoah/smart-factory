"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { DataTableFilter } from "@/components/shared/data-table-filter";
import { DataTable } from "@/components/shared/data-table";

// --- Icons ---

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

// --- Mock Data ---

const inventoryData = [
  { id: "CNC-A-104", name: "Haas Automation VF-2", type: "CNC Machine", status: "OPERATIONAL", lastMaint: "2023-10-15" },
  { id: "ROB-W-022", name: "Fanuc CRX-10iA/L", type: "Welding Robot", status: "MAINTENANCE", lastMaint: "2023-11-02" },
  { id: "PR-M-441", name: "Aida Stamping Press", type: "Mechanical Press", status: "OPERATIONAL", lastMaint: "2023-09-28" },
  { id: "INJ-M-005", name: "Arburg Allrounder", type: "Injection Molder", status: "OPERATIONAL", lastMaint: "2023-10-20" },
  { id: "LAS-C-010", name: "Trumpf TruLaser", type: "Laser Cutter", status: "WARNING", lastMaint: "2023-11-05" },
];

export default function MachineInventoryPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Assets Management" },
  ];

  return (
    <div className="p-8 space-y-6 bg-neutral-50 min-h-screen">
      {/* Page Header: Using variant 'secondary' for the brand's primary Blue color */}
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title="Machine Inventory"
        description="Comprehensive directory and real-time status of all factory floor assets."
        action={{
          label: "Add New Asset",
          icon: <PlusIcon />,
          onClick: () => console.log("Add asset clicked"),
        }}
      />

      {/* Structural separation between Filter and Table cards */}
      <div className="space-y-6">
        <DataTableFilter 
          placeholder="Search inventory..." 
          onExport={() => console.log("Exporting...")}
        />
        
        <DataTable 
          data={inventoryData} 
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
