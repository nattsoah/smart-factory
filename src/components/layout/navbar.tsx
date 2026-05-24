"use client";

import React from "react";
import { SearchInput } from "@/components/ui/search-input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const StatusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M7.76 7.76a6 6 0 0 0 0 8.48" />
    <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 h-16 w-full bg-neutral-0 border-b border-neutral-200 flex items-center justify-between px-8 backdrop-blur-md bg-opacity-95">
      {/* Left: Global Search */}
      <div className="flex-1 max-w-md text-neutral-700 focus-within:text-neutral-900 transition-colors">
        <SearchInput 
          placeholder="Search systems, assets, or logs..." 
          className="h-10 bg-neutral-50 border-neutral-200 text-neutral-700 focus:text-neutral-900 placeholder:text-neutral-400"
        />
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-6">
        {/* Global Icons */}
        <div className="flex items-center gap-1">
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              <BellIcon />
            </Button>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error-500 rounded-full border-2 border-neutral-0" />
          </div>
          <Button variant="ghost" size="icon" className="text-neutral-700 hover:text-neutral-900 transition-colors">
            <StatusIcon />
          </Button>
        </div>

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-neutral-200" />

        {/* Simplified Admin Profile */}
        <div className="flex items-center gap-3 pl-1 group cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-0 shadow-sm border border-neutral-700 group-hover:bg-neutral-900 transition-colors">
            <UserIcon />
          </div>
          <span className="text-sm font-bold text-neutral-700 group-hover:text-neutral-900 transition-colors tracking-tight">
            Ops Admin
          </span>
        </div>
      </div>
    </header>
  );
}
