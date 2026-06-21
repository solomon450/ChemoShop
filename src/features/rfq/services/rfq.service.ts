// RFQ service — all API calls for requests for quote

import apiClient from "@/services/api";
import type {
  RFQ,
  RFQFilters,
  RFQFormData,
  RFQListResponse,
} from "@/types";

const ENDPOINT = "/rfqs";

export const rfqService = {
  /**
   * Fetch a paginated list of RFQs with optional filters
   */
  async list(
    page = 1,
    pageSize = 10,
    filters?: RFQFilters
  ): Promise<RFQListResponse> {
    return apiClient.get<RFQListResponse>(ENDPOINT, {
      page,
      pageSize,
      ...filters,
    });
  },

  /**
   * Fetch a single RFQ by ID
   */
  async getById(id: string): Promise<RFQ> {
    return apiClient.get<RFQ>(`${ENDPOINT}/${id}`);
  },

  /**
   * Create a new RFQ
   */
  async create(data: RFQFormData): Promise<RFQ> {
    return apiClient.post<RFQ>(ENDPOINT, data);
  },

  /**
   * Update an existing RFQ
   */
  async update(id: string, data: Partial<RFQFormData>): Promise<RFQ> {
    return apiClient.patch<RFQ>(`${ENDPOINT}/${id}`, data);
  },

  /**
   * Delete an RFQ
   */
  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(`${ENDPOINT}/${id}`);
  },

  /**
   * Submit an RFQ to suppliers
   */
  async submit(id: string): Promise<RFQ> {
    return apiClient.post<RFQ>(`${ENDPOINT}/${id}/submit`);
  },

  /**
   * Accept a quoted RFQ
   */
  async accept(id: string): Promise<RFQ> {
    return apiClient.post<RFQ>(`${ENDPOINT}/${id}/accept`);
  },

  /**
   * Reject a quoted RFQ
   */
  async reject(id: string, reason?: string): Promise<RFQ> {
    return apiClient.post<RFQ>(`${ENDPOINT}/${id}/reject`, { reason });
  },
};
