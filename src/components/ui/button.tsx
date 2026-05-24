import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "destructive" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  isHovered?: boolean;
  isActive?: boolean;
  isError?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isHovered, isActive, isError, ...props }, ref) => {
    const variants = {
      primary: cn(
        "bg-neutral-900 text-neutral-0 shadow-sm",
        !isHovered && !isActive && "hover:bg-neutral-800",
        isHovered && "bg-neutral-800",
        isActive && "bg-neutral-700"
      ),
      secondary: cn(
        "bg-primary-600 text-neutral-0",
        !isHovered && !isActive && "hover:bg-primary-700",
        isHovered && "bg-primary-700",
        isActive && "bg-primary-800"
      ),
      success: cn(
        "bg-success-500 text-neutral-0",
        !isHovered && !isActive && "hover:bg-success-700",
        isHovered && "bg-success-600",
        isActive && "bg-success-700"
      ),
      warning: cn(
        "bg-warning-500 text-neutral-0",
        !isHovered && !isActive && "hover:bg-warning-700",
        isHovered && "bg-warning-600",
        isActive && "bg-warning-700"
      ),
      error: cn(
        "bg-error-500 text-neutral-0",
        !isHovered && !isActive && "hover:bg-error-700",
        isHovered && "bg-error-600",
        isActive && "bg-error-700"
      ),
      destructive: cn(
        "bg-error-500 text-neutral-0 shadow-sm",
        !isHovered && !isActive && "hover:bg-error-700",
        isHovered && "bg-error-700",
        isActive && "bg-error-700"
      ),
      ghost: cn(
        "bg-transparent text-neutral-500",
        !isHovered && !isActive && "hover:bg-neutral-50",
        isHovered && "bg-neutral-50",
        isActive && "bg-neutral-100"
      ),
      outline: cn(
        "bg-transparent border border-neutral-300 text-neutral-900",
        !isHovered && !isActive && "hover:bg-neutral-50",
        isHovered && "bg-neutral-50",
        isActive && "bg-neutral-100"
      ),
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 py-2 text-sm gap-2",
      lg: "h-12 px-6 py-3 text-base gap-2.5",
      icon: "h-10 w-10 p-2 justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed",
          isError && "border-2 border-error-700 text-error-700 bg-error-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
