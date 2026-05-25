"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { DataTableFilter } from "@/components/shared/data-table-filter";
import { DataTable } from "@/components/shared/data-table";
import { PlusIcon } from "@/components/ui/icons";
import { INVENTORY_DATA, ASSETS_BREADCRUMBS } from "@/constants/mock-data";

export default function MachineInventoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  return (
    <div className="p-4 md:p-8 space-y-6 bg-neutral-50 min-h-screen">
      <PageHeader
        breadcrumbItems={ASSETS_BREADCRUMBS}
        title="Machine Inventory"
        description="Comprehensive directory and real-time status of all factory floor assets."
        action={{
          label: "Add New Asset",
          icon: <PlusIcon />,
          onClick: () => router.push("/form"),
        }}
      />

      <div className="space-y-6">
        <DataTableFilter 
          placeholder="Search inventory..." 
          onExport={() => console.log("Exporting...")}
        />
        
        <DataTable 
          data={INVENTORY_DATA} 
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
