import React from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 group-hover:scale-100 transition-all duration-200 z-50">
        <div className="bg-neutral-900 text-neutral-0 text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900" />
        </div>
      </div>
    </div>
  );
};
