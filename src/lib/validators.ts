// Shared validation schemas using Zod

import { z } from "zod";

// Chemical validation
export const chemicalSchema = z.object({
  name: z.string().min(1, "Chemical name is required").max(255),
  casNumber: z
    .string()
    .min(1, "CAS number is required")
    .regex(/^\d{2,7}-\d{2}-\d$/, "Invalid CAS number format (e.g., 7732-18-5)"),
  formula: z.string().min(1, "Chemical formula is required").max(100),
  molecularWeight: z.number().positive("Molecular weight must be positive"),
  category: z.enum([
    "organic",
    "inorganic",
    "polymer",
    "solvent",
    "acid",
    "base",
    "salt",
    "reagent",
    "catalyst",
    "other",
  ]),
  description: z.string().max(2000).optional().default(""),
  hazardClass: z.string().max(100).optional().default(""),
  purity: z.number().min(0).max(100, "Purity must be between 0 and 100"),
  unit: z.string().min(1, "Unit is required"),
  pricePerUnit: z.number().nonnegative("Price cannot be negative"),
  stockQuantity: z.number().int().nonnegative("Stock quantity cannot be negative"),
  minOrderQuantity: z.number().int().positive("Minimum order must be at least 1"),
});

export type ChemicalFormValues = z.infer<typeof chemicalSchema>;

// RFQ validation
export const rfqSchema = z.object({
  chemicalName: z.string().min(1, "Chemical name is required").max(255),
  quantity: z.number().positive("Quantity must be positive"),
  unit: z.string().min(1, "Unit is required"),
  targetPrice: z.number().nonnegative("Target price cannot be negative").optional(),
  requiredDate: z.string().min(1, "Required date is required"),
  supplierId: z.string().optional(),
  notes: z.string().max(2000).optional().default(""),
});

export type RFQFormValues = z.infer<typeof rfqSchema>;

// Login validation
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

// Register validation
export const registerSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    confirmPassword: z.string(),
    name: z.string().min(1, "Name is required").max(255),
    company: z.string().max(255).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

// Search/filter validation
export const searchSchema = z.object({
  query: z.string().max(255).optional(),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().default(10),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
