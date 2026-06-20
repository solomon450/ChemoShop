// Supplier service — all API calls for supplier operations

import apiClient from "@/services/api";
import type { PaginatedResponse, User } from "@/types";

const ENDPOINT = "/suppliers";

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  website?: string;
  rating: number;
  totalProducts: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SupplierFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  website?: string;
}

export const supplierService = {
  /**
   * Fetch a paginated list of suppliers
   */
  async list(
    page = 1,
    pageSize = 10,
    filters?: { search?: string; isActive?: boolean }
  ): Promise<PaginatedResponse<Supplier>> {
    return apiClient.get<PaginatedResponse<Supplier>>(ENDPOINT, {
      page,
      pageSize,
      ...filters,
    });
  },

  /**
   * Fetch a single supplier by ID
   */
  async getById(id: string): Promise<Supplier> {
    return apiClient.get<Supplier>(`${ENDPOINT}/${id}`);
  },

  /**
   * Create a new supplier
   */
  async create(data: SupplierFormData): Promise<Supplier> {
    return apiClient.post<Supplier>(ENDPOINT, data);
  },

  /**
   * Update an existing supplier
   */
  async update(id: string, data: Partial<SupplierFormData>): Promise<Supplier> {
    return apiClient.patch<Supplier>(`${ENDPOINT}/${id}`, data);
  },

  /**
   * Delete a supplier
   */
  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`${ENDPOINT}/${id}`);
  },

  /**
   * Get supplier's chemical catalog
   */
  async getChemicals(supplierId: string): Promise<User[]> {
    return apiClient.get<User[]>(`${ENDPOINT}/${supplierId}/chemicals`);
  },
};
