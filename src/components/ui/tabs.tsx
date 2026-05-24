import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn("flex border-b border-neutral-200", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-[2px]",
            activeTab === tab.value
              ? "border-primary-500 text-primary-600"
              : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
