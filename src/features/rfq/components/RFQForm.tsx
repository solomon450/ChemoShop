"use client";

// RFQForm — form for creating and editing RFQs

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
import { UNITS } from "@/lib/constants";
import { rfqSchema, type RFQFormValues } from "@/lib/validators";

interface RFQFormProps {
  onSubmit: (data: RFQFormValues) => void;
  onCancel?: () => void;
  defaultValues?: Partial<RFQFormValues>;
  isSubmitting?: boolean;
}

export function RFQForm({
  onSubmit,
  onCancel,
  defaultValues,
  isSubmitting,
}: RFQFormProps) {
  const form = useForm<RFQFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      chemicalName: "",
      quantity: 1,
      unit: "kg",
      requiredDate: "",
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Chemical Name *</label>
          <Input
            placeholder="e.g., Acetone"
            {...form.register("chemicalName")}
          />
          {form.formState.errors.chemicalName && (
            <p className="text-sm text-destructive">
              {form.formState.errors.chemicalName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Quantity *</label>
          <Input
            type="number"
            placeholder="1"
            {...form.register("quantity", { valueAsNumber: true })}
          />
          {form.formState.errors.quantity && (
            <p className="text-sm text-destructive">
              {form.formState.errors.quantity.message}
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
          <label className="text-sm font-medium">Required Date *</label>
          <Input type="date" {...form.register("requiredDate")} />
          {form.formState.errors.requiredDate && (
            <p className="text-sm text-destructive">
              {form.formState.errors.requiredDate.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Target Price (optional)</label>
          <Input
            type="number"
            step="0.01"
            placeholder="0.00"
            {...form.register("targetPrice", { valueAsNumber: true })}
          />
          {form.formState.errors.targetPrice && (
            <p className="text-sm text-destructive">
              {form.formState.errors.targetPrice.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Supplier ID (optional)</label>
          <Input placeholder="Enter supplier ID" {...form.register("supplierId")} />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Notes (optional)</label>
        <Textarea
          placeholder="Additional requirements or notes..."
          rows={4}
          {...form.register("notes")}
        />
      </div>

      <div className="flex gap-3 justify-end">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit RFQ"}
        </Button>
      </div>
    </form>
  );
}
