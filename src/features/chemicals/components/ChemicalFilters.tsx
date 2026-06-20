"use client";

// ChemicalFilters — filter panel for chemicals list

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CHEMICAL_CATEGORIES } from "@/lib/constants";
import type { ChemicalCategory, ChemicalFilters as Filters } from "@/types";

interface ChemicalFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onReset: () => void;
}

export function ChemicalFilters({
  filters,
  onFilterChange,
  onReset,
}: ChemicalFiltersProps) {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex-1 min-w-[200px]">
        <label className="text-sm font-medium mb-1 block">Search</label>
        <Input
          placeholder="Search by name, CAS, or formula..."
          value={filters.search || ""}
          onChange={(e) =>
            onFilterChange({ ...filters, search: e.target.value })
          }
        />
      </div>

      <div className="w-[180px]">
        <label className="text-sm font-medium mb-1 block">Category</label>
        <Select
          value={filters.category || "all"}
          onValueChange={(value) =>
            onFilterChange({
              ...filters,
              category: value === "all" ? undefined : (value as ChemicalCategory),
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {CHEMICAL_CATEGORIES.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-[150px]">
        <label className="text-sm font-medium mb-1 block">Sort By</label>
        <Select
          value={filters.sortBy || "name"}
          onValueChange={(value) =>
            onFilterChange({
              ...filters,
              sortBy: value as Filters["sortBy"],
            })
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="createdAt">Date Added</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
