import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-neutral-100 text-neutral-700 border border-neutral-200",
      success: "bg-success-50 text-success-700 border border-success-500",
      warning: "bg-warning-50 text-warning-700 border border-warning-500",
      error: "bg-error-50 text-error-700 border border-error-500",
      info: "bg-info-50 text-info-700 border border-info-500",
      outline: "border border-neutral-200 text-neutral-600 bg-transparent",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold transition-colors",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
