"use client";

// ChemicalTable — displays chemicals in a data table

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Chemical } from "@/types";

interface ChemicalTableProps {
  chemicals: Chemical[];
  onSelectChemical?: (chemical: Chemical) => void;
  isLoading?: boolean;
}

export function ChemicalTable({
  chemicals,
  onSelectChemical,
  isLoading,
}: ChemicalTableProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-muted-foreground">Loading chemicals...</div>
      </div>
    );
  }

  if (chemicals.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">No chemicals found.</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>CAS Number</TableHead>
            <TableHead>Formula</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Stock</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chemicals.map((chemical) => (
            <TableRow
              key={chemical.id}
              className={onSelectChemical ? "cursor-pointer hover:bg-muted/50" : ""}
              onClick={() => onSelectChemical?.(chemical)}
            >
              <TableCell className="font-medium">{chemical.name}</TableCell>
              <TableCell>{chemical.casNumber}</TableCell>
              <TableCell>{chemical.formula}</TableCell>
              <TableCell>
                <Badge variant="secondary">{chemical.category}</Badge>
              </TableCell>
              <TableCell className="text-right">
                ${chemical.pricePerUnit.toFixed(2)}/{chemical.unit}
              </TableCell>
              <TableCell className="text-right">
                {chemical.stockQuantity} {chemical.unit}
              </TableCell>
              <TableCell>
                <Badge variant={chemical.isActive ? "default" : "outline"}>
                  {chemical.isActive ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
