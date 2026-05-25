export type AssetStatus = "OPERATIONAL" | "MAINTENANCE" | "ERROR";

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: AssetStatus;
  lastMaint: string;
}
