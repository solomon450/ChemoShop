// Application constants

export const APP_NAME = "ChemPortal";

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const;

// API endpoints
export const API_ENDPOINTS = {
  // Chemicals
  CHEMICALS: "/chemicals",
  CHEMICAL_BY_ID: (id: string) => `/chemicals/${id}`,

  // RFQ
  RFQS: "/rfqs",
  RFQ_BY_ID: (id: string) => `/rfqs/${id}`,

  // Suppliers
  SUPPLIERS: "/suppliers",
  SUPPLIER_BY_ID: (id: string) => `/suppliers/${id}`,

  // Auth
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",

  // User
  USERS: "/users",
  USER_PROFILE: "/users/profile",
} as const;

// Chemical categories
export const CHEMICAL_CATEGORIES = [
  { value: "organic", label: "Organic" },
  { value: "inorganic", label: "Inorganic" },
  { value: "polymer", label: "Polymer" },
  { value: "solvent", label: "Solvent" },
  { value: "acid", label: "Acid" },
  { value: "base", label: "Base" },
  { value: "salt", label: "Salt" },
  { value: "reagent", label: "Reagent" },
  { value: "catalyst", label: "Catalyst" },
  { value: "other", label: "Other" },
] as const;

// RFQ statuses
export const RFQ_STATUSES = [
  { value: "draft", label: "Draft", color: "bg-gray-100 text-gray-800" },
  { value: "submitted", label: "Submitted", color: "bg-blue-100 text-blue-800" },
  { value: "quoted", label: "Quoted", color: "bg-yellow-100 text-yellow-800" },
  { value: "accepted", label: "Accepted", color: "bg-green-100 text-green-800" },
  { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-800" },
  { value: "expired", label: "Expired", color: "bg-orange-100 text-orange-800" },
  { value: "cancelled", label: "Cancelled", color: "bg-gray-100 text-gray-600" },
] as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Chemicals", href: "/chemicals" },
  { label: "Request Quote", href: "/rfq" },
  { label: "Dashboard", href: "/dashboard" },
] as const;

// User roles
export const USER_ROLES = [
  { value: "admin", label: "Admin" },
  { value: "supplier", label: "Supplier" },
  { value: "buyer", label: "Buyer" },
  { value: "viewer", label: "Viewer" },
] as const;

// Units of measurement
export const UNITS = [
  "kg",
  "g",
  "mg",
  "L",
  "mL",
  "mol",
  "mmol",
  "ton",
  "piece",
] as const;

// Debounce delays
export const DEBOUNCE_DELAYS = {
  SEARCH: 300,
  INPUT: 500,
  API_CALL: 1000,
} as const;

// Query keys for React Query
export const QUERY_KEYS = {
  chemicals: {
    all: ["chemicals"] as const,
    list: (filters?: Record<string, unknown>) => ["chemicals", "list", filters] as const,
    detail: (id: string) => ["chemicals", "detail", id] as const,
  },
  rfqs: {
    all: ["rfqs"] as const,
    list: (filters?: Record<string, unknown>) => ["rfqs", "list", filters] as const,
    detail: (id: string) => ["rfqs", "detail", id] as const,
  },
  suppliers: {
    all: ["suppliers"] as const,
    list: (filters?: Record<string, unknown>) => ["suppliers", "list", filters] as const,
    detail: (id: string) => ["suppliers", "detail", id] as const,
  },
  user: {
    profile: ["user", "profile"] as const,
  },
} as const;
