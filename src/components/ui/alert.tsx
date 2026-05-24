import * as React from "react";
import { cn } from "@/lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", icon, children, ...props }, ref) => {
    const variants = {
      info: "bg-info-50 text-info-700 border-info-500",
      success: "bg-success-50 text-success-700 border-success-500",
      warning: "bg-warning-50 text-warning-700 border-warning-500",
      error: "bg-error-50 text-error-700 border-error-500",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-md border text-sm font-medium",
          variants[variant],
          className
        )}
        {...props}
      >
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="flex-1">{children}</div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

export { Alert };
