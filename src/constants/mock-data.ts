import { Asset } from "@/types/asset";
import { Metric, ChartDataItem, SystemAlert } from "@/types/dashboard";
import { BreadcrumbItem } from "@/types/shared";

export const FACTORY_DATA: Asset[] = [
  { id: "CNC-A-104", name: "Haas Automation VF-2", type: "CNC Machine", status: "OPERATIONAL", lastMaint: "2023-10-15" },
  { id: "ROB-W-022", name: "Fanuc CRX-10iA/L", type: "Welding Robot", status: "MAINTENANCE", lastMaint: "2023-11-02" },
  { id: "PR-M-441", name: "Aida Stamping Press", type: "Mechanical Press", status: "OPERATIONAL", lastMaint: "2023-09-28" },
];

export const INVENTORY_DATA: Asset[] = [
  ...FACTORY_DATA,
  { id: "INJ-M-005", name: "Arburg Allrounder", type: "Injection Molder", status: "OPERATIONAL", lastMaint: "2023-10-20" },
  { id: "LAS-C-010", name: "Trumpf TruLaser", type: "Laser Cutter", status: "MAINTENANCE", lastMaint: "2023-11-05" },
];

export const DASHBOARD_METRICS: Metric[] = [
  { title: "Cycle Time (Avg)", value: "24.5s", trend: "-1.2s", status: "up", color: "success", unit: "TIME" },
  { title: "Total Uptime", value: "18.2h", trend: "+2.4h", status: "up", color: "success", unit: "TIME" },
  { title: "Down Time", value: "1.5h", trend: "-0.5h", status: "up", color: "success", unit: "TIME" },
  { title: "Machines Active", value: "18/20", trend: "90%", status: "up", color: "primary", unit: "PROG" },
];

export const CHART_DATA: ChartDataItem[] = [
  { time: "08:00 AM", actual: 25, target: 30 },
  { time: "10:00 AM", actual: 25, target: 15 },
  { time: "12:00 PM", actual: 70, target: 20 },
  { time: "02:00 PM", actual: 35, target: 55 },
  { time: "04:00 PM", actual: 15, target: 45 },
];

export const SYSTEM_ALERTS: SystemAlert[] = [
  {
    id: "alert-1",
    variant: "error",
    title: "Critical Fault: CNC-B-205",
    message: "Spindle temperature exceeded 95°C. Shutdown.",
  },
  {
    id: "alert-2",
    variant: "warning",
    title: "Maintenance: ROB-W-022",
    message: "Scheduled inspection required in 48 hours.",
  },
  {
    id: "alert-3",
    variant: "warning",
    title: "Quality Alert: Line C",
    message: "Deviation detected in production batch #8841.",
  },
  {
    id: "alert-4",
    variant: "info",
    title: "System Update",
    message: "Optimization firmware v2.4 successfully deployed.",
  },
];

export const FORM_BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Assets", href: "/assets" },
  { label: "Register Unit" },
];

export const ASSETS_BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Assets Management" },
];
