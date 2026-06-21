// RFQ (Request for Quote) types

export interface RFQ {
  id: string;
  rfqNumber: string;
  chemicalId?: string;
  chemicalName?: string;
  chemicalDetails?: {
    name: string;
    casNumber: string;
    formula: string;
  };
  quantity: number;
  unit: string;
  targetPrice?: number;
  requiredDate: string;
  status: RFQStatus;
  supplierId?: string;
  supplierName?: string;
  notes?: string;
  quotedPrice?: number;
  quotedDate?: string;
  createdAt: string;
  updatedAt: string;
}

export type RFQStatus =
  | "draft"
  | "submitted"
  | "quoted"
  | "accepted"
  | "rejected"
  | "expired"
  | "cancelled";

export interface RFQFormData {
  chemicalId?: string;
  chemicalName: string;
  quantity: number;
  unit: string;
  targetPrice?: number;
  requiredDate: string;
  supplierId?: string;
  notes?: string;
}

export interface RFQFilters {
  status?: RFQStatus;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy?: "createdAt" | "requiredDate" | "status";
  sortOrder?: "asc" | "desc";
}

export interface RFQListResponse {
  rfqs: RFQ[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
