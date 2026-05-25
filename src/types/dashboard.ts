export type MetricStatus = "up" | "down";
export type MetricColor = "primary" | "success" | "error";
export type MetricUnit = "TIME" | "PROG";

export interface Metric {
  title: string;
  value: string;
  trend: string;
  status: MetricStatus;
  color: MetricColor;
  unit: MetricUnit;
}

export interface ChartDataItem {
  time: string;
  actual: number;
  target: number;
}

export interface SystemAlert {
  id: string;
  variant: "error" | "warning" | "info" | "success";
  title: string;
  message: string;
}
