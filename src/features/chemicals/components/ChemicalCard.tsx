"use client";

// ChemicalCard — card view for a single chemical

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Chemical } from "@/types";

interface ChemicalCardProps {
  chemical: Chemical;
  onClick?: () => void;
}

export function ChemicalCard({ chemical, onClick }: ChemicalCardProps) {
  return (
    <Card
      className={`transition-shadow hover:shadow-md ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{chemical.name}</CardTitle>
          <Badge variant={chemical.isActive ? "default" : "outline"}>
            {chemical.isActive ? "Active" : "Inactive"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">CAS Number</span>
          <span className="font-mono">{chemical.casNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Formula</span>
          <span className="font-mono">{chemical.formula}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Category</span>
          <Badge variant="secondary">{chemical.category}</Badge>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Purity</span>
          <span>{chemical.purity}%</span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <span className="font-medium">Price</span>
          <span className="font-semibold">
            ${chemical.pricePerUnit.toFixed(2)}/{chemical.unit}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">In Stock</span>
          <span>{chemical.stockQuantity} {chemical.unit}</span>
        </div>
      </CardContent>
    </Card>
  );
}
