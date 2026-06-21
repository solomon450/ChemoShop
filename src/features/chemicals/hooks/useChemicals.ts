// useChemicals hook — React Query powered hook for chemical data

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { chemicalService } from "../services/chemical.service";
import type { ChemicalFilters } from "@/types";
import { QUERY_KEYS } from "@/lib/constants";

export function useChemicals(
  page = 1,
  pageSize = 10,
  filters?: ChemicalFilters
) {
  return useQuery({
    queryKey: QUERY_KEYS.chemicals.list({ page, pageSize, ...filters }),
    queryFn: () => chemicalService.list(page, pageSize, filters),
    placeholderData: (previousData) => previousData,
  });
}

export function useChemical(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.chemicals.detail(id),
    queryFn: () => chemicalService.getById(id),
    enabled: !!id,
  });
}

export function useSearchChemicals(query: string, limit = 10) {
  return useQuery({
    queryKey: ["chemicals", "search", query, limit],
    queryFn: () => chemicalService.search(query, limit),
    enabled: query.length > 0,
  });
}

export function useCreateChemical() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chemicalService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chemicals.all });
    },
  });
}

export function useUpdateChemical() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof chemicalService.update>[1] }) =>
      chemicalService.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chemicals.all });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chemicals.detail(variables.id) });
    },
  });
}

export function useDeleteChemical() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chemicalService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chemicals.all });
    },
  });
}
