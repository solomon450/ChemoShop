// Chemical types for the chemicals feature

export interface Chemical {
  id: string;
  name: string;
  casNumber: string;
  formula: string;
  molecularWeight: number;
  category: ChemicalCategory;
  description: string;
  hazardClass: string;
  purity: number;
  unit: string;
  pricePerUnit: number;
  supplierId?: string;
  supplierName?: string;
  stockQuantity: number;
  minOrderQuantity: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ChemicalCategory =
  | "organic"
  | "inorganic"
  | "polymer"
  | "solvent"
  | "acid"
  | "base"
  | "salt"
  | "reagent"
  | "catalyst"
  | "other";

export interface ChemicalFilters {
  search?: string;
  category?: ChemicalCategory;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "name" | "price" | "createdAt";
  sortOrder?: "asc" | "desc";
}

export interface ChemicalFormData {
  name: string;
  casNumber: string;
  formula: string;
  molecularWeight: number;
  category: ChemicalCategory;
  description: string;
  hazardClass: string;
  purity: number;
  unit: string;
  pricePerUnit: number;
  stockQuantity: number;
  minOrderQuantity: number;
}

export interface ChemicalListResponse {
  chemicals: Chemical[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
