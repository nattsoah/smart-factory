import ActionsNavigationShowcase from "@/components/shared/actions-navigation";
import DataEntryShowcase from "@/components/shared/data-entry";
import DataDisplayShowcase from "@/components/shared/data-display";
import FeedbackOverlaysShowcase from "@/components/shared/feedback-overlays";

export default function PreviewPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-2 border-b border-neutral-200 pb-8">
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">SmartFactory UI System</h1>
          <p className="text-lg text-neutral-600">
            A comprehensive component library designed for high-performance industrial management interfaces.
          </p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Section 1</span>
            <h2 className="text-2xl font-bold text-neutral-900">Actions & Navigation</h2>
          </div>
          <div className="bg-neutral-0 rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
            <ActionsNavigationShowcase />
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Section 2</span>
            <h2 className="text-2xl font-bold text-neutral-900">Data Entry & Form Controls</h2>
          </div>
          <div className="bg-neutral-0 rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
            <DataEntryShowcase />
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Section 3</span>
            <h2 className="text-2xl font-bold text-neutral-900">Data Display & Analytics</h2>
          </div>
          <div className="bg-neutral-0 rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
            <DataDisplayShowcase />
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Section 4</span>
            <h2 className="text-2xl font-bold text-neutral-900">Feedback & Overlays</h2>
          </div>
          <div className="bg-neutral-0 rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
            <FeedbackOverlaysShowcase />
          </div>
        </section>
        
        <footer className="text-center pt-12 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            SmartFactory AI Design System v1.0 • Built with Next.js & Tailwind CSS v4
          </p>
        </footer>
      </div>
    </div>
  );
}
