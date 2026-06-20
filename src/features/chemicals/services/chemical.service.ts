// Chemical service — all API calls for chemicals

import apiClient from "@/services/api";
import type {
  Chemical,
  ChemicalFilters,
  ChemicalFormData,
  ChemicalListResponse,
} from "@/types";

const ENDPOINT = "/chemicals";

export const chemicalService = {
  /**
   * Fetch a paginated list of chemicals with optional filters
   */
  async list(
    page = 1,
    pageSize = 10,
    filters?: ChemicalFilters
  ): Promise<ChemicalListResponse> {
    return apiClient.get<ChemicalListResponse>(ENDPOINT, {
      page,
      pageSize,
      ...filters,
    });
  },

  /**
   * Fetch a single chemical by ID
   */
  async getById(id: string): Promise<Chemical> {
    return apiClient.get<Chemical>(`${ENDPOINT}/${id}`);
  },

  /**
   * Create a new chemical
   */
  async create(data: ChemicalFormData): Promise<Chemical> {
    return apiClient.post<Chemical>(ENDPOINT, data);
  },

  /**
   * Update an existing chemical
   */
  async update(id: string, data: Partial<ChemicalFormData>): Promise<Chemical> {
    return apiClient.patch<Chemical>(`${ENDPOINT}/${id}`, data);
  },

  /**
   * Delete a chemical
   */
  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`${ENDPOINT}/${id}`);
  },

  /**
   * Search chemicals by name, CAS number, or formula
   */
  async search(query: string, limit = 10): Promise<Chemical[]> {
    return apiClient.get<Chemical[]>(`${ENDPOINT}/search`, {
      q: query,
      limit,
    });
  },
};
