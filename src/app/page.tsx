import React from "react";

/**
 * UI Component Documentation (v1.5 - Pure Architecture)
 * This page verifies the theme by calling variables and utility classes.
 * NO hardcoded hex values. 
 * ONLY showing tokens explicitly defined in Design.md.
 */
export default function UIConfigPage() {
  return (
    <main className="min-h-screen p-8 lg:p-16 max-w-7xl mx-auto space-y-16 bg-neutral-0 text-neutral-900">
      <header className="space-y-4 border-b border-neutral-200 pb-8">
        <h1 className="text-4xl font-bold">Smart Factory UI System</h1>
        <p className="text-lg text-neutral-500">Theme Verification (v1.5 - Pure Architecture)</p>
      </header>

      {/* --- Colors Section --- */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-l-4 border-primary-500 pl-4">Color Palette</h2>
        
        {/* Primary Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Primary (Brand)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"].map((weight) => (
              <div key={weight} className="space-y-2">
                <div 
                  className="h-16 w-full rounded-md shadow-sm border border-neutral-100" 
                  style={{ backgroundColor: `var(--primary-${weight})` }} 
                />
                <div className="flex flex-col text-[10px] px-1 font-mono">
                  <span className="font-bold text-neutral-700">{weight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Neutral (Grays)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-4">
            {["0", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"].map((weight) => (
              <div key={weight} className="space-y-2">
                <div 
                  className="h-16 w-full rounded-md shadow-sm border border-neutral-100" 
                  style={{ backgroundColor: `var(--neutral-${weight})` }} 
                />
                <div className="flex flex-col text-[10px] px-1 font-mono">
                  <span className="font-bold text-neutral-700">{weight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="space-y-8">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Semantic</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["success", "warning", "error", "info"].map((type) => (
              <div key={type} className="space-y-3 p-4 border border-neutral-100 rounded-xl bg-neutral-50">
                <span className="text-sm font-bold text-neutral-700 capitalize">{type}</span>
                <div className="flex gap-2">
                  {["50", "500", "700"].map((w) => (
                    <div key={w} className="flex-1 flex flex-col gap-1">
                      <div 
                        className="h-12 rounded-md border border-neutral-200" 
                        style={{ backgroundColor: `var(--${type}-${w})` }} 
                      />
                      <span className="text-[10px] text-center text-neutral-500 font-bold font-mono">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Typography Section --- */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-l-4 border-primary-500 pl-4">Typography</h2>
        <div className="space-y-6 divide-y divide-neutral-100">
          <div className="pt-4">
            <p className="text-4xl font-bold leading-tight">Heading 4XL (36px)</p>
          </div>
          <div className="pt-4">
            <p className="text-2xl font-semibold leading-normal">Heading 2XL (24px)</p>
          </div>
          <div className="pt-4">
            <p className="text-base font-medium leading-normal text-neutral-700">Base Medium (16px)</p>
          </div>
          <div className="pt-4">
            <p className="text-sm font-normal leading-normal text-neutral-500">Small Normal (14px)</p>
          </div>
        </div>
      </section>

      {/* --- Radius & Shadows Section --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold border-l-4 border-primary-500 pl-4">Border Radius</h2>
          <div className="flex flex-wrap gap-4">
            {["none", "sm", "md", "lg", "xl", "full"].map((r) => (
              <div key={r} className="space-y-2 text-center">
                <div className={`h-16 w-16 bg-primary-500 border-2 border-primary-700 rounded-${r}`} />
                <span className="text-xs font-mono text-neutral-500">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold border-l-4 border-primary-500 pl-4">Shadows</h2>
          <div className="flex flex-wrap gap-8">
            <div className="space-y-2 text-center">
              <div className="h-20 w-20 bg-white border border-neutral-100 rounded-xl shadow-xs" />
              <span className="text-xs font-mono text-neutral-500">xs</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="h-20 w-20 bg-white border border-neutral-100 rounded-xl shadow-sm" />
              <span className="text-xs font-mono text-neutral-500">sm</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Spacing System --- */}
      <section className="space-y-8 pb-16">
        <h2 className="text-2xl font-bold border-l-4 border-primary-500 pl-4">Spacing Scale</h2>
        <div className="flex items-end gap-2 h-40 overflow-x-auto pb-4">
          {["1", "2", "3", "4", "5", "6", "8", "10", "12", "16"].map((sp) => (
            <div key={sp} className="space-y-2 text-center min-w-[40px]">
              <div 
                className="bg-primary-500 rounded-t-sm mx-auto transition-all hover:bg-primary-600" 
                style={{ height: `calc(var(--spacing-${sp}) * 2)`, width: `var(--spacing-${sp})` }} 
              />
              <span className="text-[10px] font-mono text-neutral-400 font-bold">{sp}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="pt-16 text-center text-neutral-400 text-sm border-t border-neutral-100 pb-8">
        Smart Factory Design System - Theme Verification v1.5
      </footer>
    </main>
  );
}
