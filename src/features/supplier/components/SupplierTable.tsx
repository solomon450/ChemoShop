"use client";

// SupplierTable — displays suppliers in a data table

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Supplier } from "../services/supplier.service";

interface SupplierTableProps {
  suppliers: Supplier[];
  onSelectSupplier?: (supplier: Supplier) => void;
  isLoading?: boolean;
}

export function SupplierTable({
  suppliers,
  onSelectSupplier,
  isLoading,
}: SupplierTableProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-muted-foreground">Loading suppliers...</div>
      </div>
    );
  }

  if (suppliers.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">No suppliers found.</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Company</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-center">Products</TableHead>
            <TableHead className="text-center">Rating</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow
              key={supplier.id}
              className={onSelectSupplier ? "cursor-pointer hover:bg-muted/50" : ""}
              onClick={() => onSelectSupplier?.(supplier)}
            >
              <TableCell className="font-medium">{supplier.company}</TableCell>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.email}</TableCell>
              <TableCell>{supplier.phone}</TableCell>
              <TableCell className="text-center">{supplier.totalProducts}</TableCell>
              <TableCell className="text-center">
                <span className="text-yellow-600 font-medium">{supplier.rating.toFixed(1)}</span>
              </TableCell>
              <TableCell>
                <Badge variant={supplier.isActive ? "default" : "outline"}>
                  {supplier.isActive ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
