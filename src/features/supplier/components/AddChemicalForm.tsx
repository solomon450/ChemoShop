"use client";

// AddChemicalForm — form for suppliers to add new chemicals

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CHEMICAL_CATEGORIES, UNITS } from "@/lib/constants";
import { chemicalSchema, type ChemicalFormValues } from "@/lib/validators";

interface AddChemicalFormProps {
  onSubmit: (data: ChemicalFormValues) => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

export function AddChemicalForm({
  onSubmit,
  onCancel,
  isSubmitting,
}: AddChemicalFormProps) {
  const form = useForm<ChemicalFormValues>({
    resolver: zodResolver(chemicalSchema),
    defaultValues: {
      name: "",
      casNumber: "",
      formula: "",
      molecularWeight: 0,
      category: "organic",
      description: "",
      hazardClass: "",
      purity: 99,
      unit: "kg",
      pricePerUnit: 0,
      stockQuantity: 0,
      minOrderQuantity: 1,
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Chemical Name *</label>
          <Input placeholder="e.g., Acetone" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">CAS Number *</label>
          <Input placeholder="e.g., 67-64-1" {...form.register("casNumber")} />
          {form.formState.errors.casNumber && (
            <p className="text-sm text-destructive">
              {form.formState.errors.casNumber.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Formula *</label>
          <Input placeholder="e.g., C3H6O" {...form.register("formula")} />
          {form.formState.errors.formula && (
            <p className="text-sm text-destructive">
              {form.formState.errors.formula.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Molecular Weight *</label>
          <Input
            type="number"
            step="0.01"
            {...form.register("molecularWeight", { valueAsNumber: true })}
          />
          {form.formState.errors.molecularWeight && (
            <p className="text-sm text-destructive">
              {form.formState.errors.molecularWeight.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category *</label>
          <Select
            value={form.watch("category")}
            onValueChange={(value) =>
              form.setValue("category", value as ChemicalFormValues["category"])
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CHEMICAL_CATEGORIES.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Hazard Class</label>
          <Input placeholder="e.g., Flammable" {...form.register("hazardClass")} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Purity (%) *</label>
          <Input
            type="number"
            step="0.1"
            min={0}
            max={100}
            {...form.register("purity", { valueAsNumber: true })}
          />
          {form.formState.errors.purity && (
            <p className="text-sm text-destructive">
              {form.formState.errors.purity.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Unit *</label>
          <Select
            value={form.watch("unit")}
            onValueChange={(value) => form.setValue("unit", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {UNITS.map((unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Price per Unit ($) *</label>
          <Input
            type="number"
            step="0.01"
            {...form.register("pricePerUnit", { valueAsNumber: true })}
          />
          {form.formState.errors.pricePerUnit && (
            <p className="text-sm text-destructive">
              {form.formState.errors.pricePerUnit.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Stock Quantity *</label>
          <Input
            type="number"
            {...form.register("stockQuantity", { valueAsNumber: true })}
          />
          {form.formState.errors.stockQuantity && (
            <p className="text-sm text-destructive">
              {form.formState.errors.stockQuantity.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Min Order Quantity *</label>
          <Input
            type="number"
            {...form.register("minOrderQuantity", { valueAsNumber: true })}
          />
          {form.formState.errors.minOrderQuantity && (
            <p className="text-sm text-destructive">
              {form.formState.errors.minOrderQuantity.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <Textarea
          placeholder="Chemical description..."
          rows={3}
          {...form.register("description")}
        />
      </div>

      <div className="flex gap-3 justify-end">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Chemical"}
        </Button>
      </div>
    </form>
  );
}
