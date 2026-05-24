import * as React from "react";
import { cn } from "@/lib/utils";

export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, label = "Upload File", helperText, ...props }, ref) => {
    return (
      <div className={cn("space-y-2", className)}>
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer bg-neutral-0 hover:bg-neutral-50 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
            <svg
              className="w-8 h-8 mb-3 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="mb-1 text-sm text-neutral-700 font-medium">{label}</p>
            {helperText && <p className="text-xs text-neutral-400">{helperText}</p>}
          </div>
          <input ref={ref} type="file" className="hidden" {...props} />
        </label>
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";

export { FileUpload };
