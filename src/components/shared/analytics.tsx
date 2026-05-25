import React from "react";
import { ChartDataItem, MetricColor } from "@/types/dashboard";

export const Sparkline = ({ color = "primary" }: { color?: MetricColor }) => {
  const colorMap = {
    primary: "#0ea5e9",
    success: "#10b981",
    error: "#f43f5e",
  };

  return (
    <div className="h-10 w-full mt-4">
      <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
        <path
          d="M0 30 Q 15 10, 30 25 T 60 15 T 100 5"
          fill="none"
          stroke={colorMap[color]}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 30 Q 15 10, 30 25 T 60 15 T 100 5 V 40 H 0 Z"
          fill={`url(#gradient-${color})`}
          opacity="0.1"
        />
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colorMap[color]} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const MainChart = ({ data }: { data: ChartDataItem[] }) => {
  return (
    <div className="space-y-4">
      <div className="h-64 w-full relative flex items-end gap-6 pt-4 px-4">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between border-b border-l border-neutral-200 pointer-events-none mb-0">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full border-t border-neutral-100 border-dashed" />
          ))}
        </div>

        {/* Paired Bars */}
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex items-end gap-1.5 h-full relative z-10">
            <div
              className="bg-primary-100 w-full rounded-t-[1px] transition-all hover:bg-neutral-800"
              style={{ height: `${item.actual}%` }}
            />
            <div
              className="bg-neutral-900 w-full rounded-t-[1px] transition-all"
              style={{ height: `${item.target}%` }}
            />
          </div>
        ))}
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between px-4 pl-10">
        {data.map((item, i) => (
          <div key={i} className="flex-1 text-center">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tight">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
