import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          ref={ref}
          className="peer absolute h-0 w-0 opacity-0"
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...props}
        />
        <div
          className={cn(
            "h-6 w-11 cursor-pointer rounded-full bg-neutral-300 transition-colors peer-checked:bg-primary-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            className
          )}
          onClick={(e) => {
            const input = e.currentTarget.previousElementSibling as HTMLInputElement;
            if (!props.disabled) {
              input.click();
            }
          }}
        >
          <div
            className={cn(
              "absolute left-1 top-1 h-4 w-4 rounded-full bg-neutral-0 transition-transform peer-checked:translate-x-5 shadow-sm"
            )}
          />
        </div>
      </div>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
