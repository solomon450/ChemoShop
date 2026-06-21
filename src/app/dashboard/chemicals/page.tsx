"use client";

// Dashboard Chemicals Management — functional search, filters, pagination
// Rows click through to /dashboard/chemicals/[id], Add Chemical navigates to /new

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Pencil,
  Trash2,
  TrendingUp,
  ShoppingCart,
  ShieldCheck,
  Eye,
} from "lucide-react";
import { chemicals as allChemicals, type MockChemical } from "@/lib/mock-data";

/* ─────────────────── HELPERS ─────────────────── */

const PAGE_SIZE = 6;
const allCategories = Array.from(
  new Set(allChemicals.map((c) => c.category))
).sort();

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ─────────────────── COMPONENT ─────────────────── */

export default function DashboardChemicalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("Status: All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered chemicals
  const filtered = useMemo(() => {
    let result = [...allChemicals];

    // Search
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.cas.includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.formula.toLowerCase().includes(q)
      );
    }

    // Category
    if (categoryFilter !== "All Categories") {
      result = result.filter((c) => c.category === categoryFilter);
    }

    // Status
    if (statusFilter !== "Status: All") {
      const s = statusFilter;
      if (s === "Active") {
        result = result.filter((c) => c.status === "Active");
      } else if (s === "Out of Stock") {
        result = result.filter((c) => parseFloat(c.stock) === 0);
      } else if (s === "Pending Review") {
        result = result.filter((c) => c.status === "Pending Review");
      }
    }

    return result;
  }, [searchTerm, categoryFilter, statusFilter]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIdx = (safeCurrentPage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(startIdx, startIdx + PAGE_SIZE);

  // Reset page when filters change
  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };
  const handleCategoryChange = (val: string) => {
    setCategoryFilter(val);
    setCurrentPage(1);
  };
  const handleStatusChange = (val: string) => {
    setStatusFilter(val);
    setCurrentPage(1);
  };

  // Page numbers to show
  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages <= 5 || i === 1 || i === totalPages || Math.abs(i - safeCurrentPage) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== -1) {
        pages.push(-1); // ellipsis placeholder
      }
    }
    return pages;
  }, [totalPages, safeCurrentPage]);

  return (
    <div className="px-8 py-10 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-headline-xl text-primary">My Chemicals</h2>
          <p className="text-body-md text-on-surface-variant">
            Manage your industrial chemical listings and inventory levels.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-surface-container-high px-3 py-1.5 rounded text-primary font-mono text-label-md border border-outline-variant">
            {filtered.length} Chemical{filtered.length !== 1 ? "s" : ""}
          </div>
          <Link
            href="/dashboard/chemicals/new"
            className="bg-primary text-on-primary text-body-md px-6 py-2.5 rounded border border-primary flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Plus className="h-5 w-5" />
            Add Chemical
          </Link>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-surface-container-lowest border border-outline-variant p-2 mb-4 flex flex-wrap items-center gap-2">
        <div className="flex-1 min-w-[240px] relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-outline h-5 w-5" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-background border border-outline-variant rounded text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all outline-none"
            placeholder="Search by name, CAS, or category..."
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <select
          className="bg-background border border-outline-variant rounded font-mono text-label-md py-2 px-4 focus:border-secondary focus:ring-0 outline-none"
          value={categoryFilter}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option>All Categories</option>
          {allCategories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select
          className="bg-background border border-outline-variant rounded font-mono text-label-md py-2 px-4 focus:border-secondary focus:ring-0 outline-none"
          value={statusFilter}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option>Status: All</option>
          <option>Active</option>
          <option>Out of Stock</option>
          <option>Pending Review</option>
        </select>
        <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
          <Download className="h-5 w-5" />
        </button>
      </div>

      {/* Data Table Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low border-b border-outline-variant">
            <tr>
              <th className="py-3 px-4 font-mono text-label-md text-on-surface-variant uppercase tracking-wider w-12">
                <input
                  className="rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  type="checkbox"
                />
              </th>
              <th className="py-3 px-4 font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                Product
              </th>
              <th className="py-3 px-4 font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                CAS Number
              </th>
              <th className="py-3 px-4 font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-4 font-mono text-label-md text-on-surface-variant uppercase tracking-wider text-right">
                Price
              </th>
              <th className="py-3 px-4 font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-4 font-mono text-label-md text-on-surface-variant uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {paginated.length > 0 ? (
              paginated.map((chem) => (
                <tr
                  key={chem.id}
                  className="hover:bg-surface-container-low transition-colors group cursor-pointer"
                >
                  <td className="py-3 px-4" onClick={(e) => e.stopPropagation()}>
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                      type="checkbox"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <Link
                      href={`/dashboard/chemicals/${chem.id}`}
                      className="flex items-center gap-3"
                    >
                      <div className="w-12 h-12 bg-surface-container border border-outline-variant overflow-hidden shrink-0">
                        <Image
                          src={chem.image}
                          alt={chem.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-body-md font-semibold text-primary hover:text-secondary transition-colors block">
                          {chem.name}
                        </span>
                        <span className="text-label-sm text-on-surface-variant font-mono">
                          {chem.formula}
                        </span>
                      </div>
                    </Link>
                  </td>
                  <td className="py-3 px-4">
                    <Link
                      href={`/dashboard/chemicals/${chem.id}`}
                      className="font-mono text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                    >
                      {chem.casDisplay}
                    </Link>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 bg-surface-container rounded text-body-sm">
                      {chem.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="font-mono text-label-md font-bold text-secondary">
                      {chem.price === "Request Quote"
                        ? "Quote"
                        : `${chem.price}/${chem.unit}`}
                    </span>
                    <p className="text-[11px] text-on-surface-variant">
                      Min: {chem.minOrder}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] border font-mono text-label-sm font-bold uppercase ${
                        chem.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : parseFloat(chem.stock) === 0
                            ? "bg-red-50 text-red-700 border-red-100"
                            : "bg-amber-50 text-amber-700 border-amber-100"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          chem.status === "Active"
                            ? "bg-emerald-500"
                            : parseFloat(chem.stock) === 0
                              ? "bg-red-500"
                              : "bg-amber-500"
                        }`}
                      />
                      {chem.status === "Active"
                        ? "Active"
                        : parseFloat(chem.stock) === 0
                          ? "Out of Stock"
                          : "Pending Review"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/dashboard/chemicals/${chem.id}`}
                        className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-surface-container-high rounded transition-colors"
                        title="View Details"
                      >
                        <Eye className="h-[18px] w-[18px]" />
                      </Link>
                      <button
                        className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-surface-container-high rounded transition-colors"
                        title="Edit"
                      >
                        <Pencil className="h-[18px] w-[18px]" />
                      </button>
                      <button
                        className="p-1.5 text-on-surface-variant hover:text-destructive hover:bg-error-container/30 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="h-[18px] w-[18px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-16 text-center">
                  <p className="text-on-surface-variant text-body-md">
                    No chemicals match your filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setCategoryFilter("All Categories");
                      setStatusFilter("Status: All");
                      setCurrentPage(1);
                    }}
                    className="text-secondary font-bold text-body-sm hover:underline mt-2"
                  >
                    Reset Filters
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="bg-surface-container-low px-4 py-3 flex items-center justify-between border-t border-outline-variant">
          <span className="font-mono text-label-sm text-on-surface-variant">
            Showing {filtered.length === 0 ? 0 : startIdx + 1} to{" "}
            {Math.min(startIdx + PAGE_SIZE, filtered.length)} of {filtered.length}{" "}
            listings
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage <= 1}
              className="p-1 px-2 border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-[18px] w-[18px]" />
            </button>
            {pageNumbers.map((page, i) =>
              page === -1 ? (
                <span
                  key={`ellipsis-${i}`}
                  className="px-2 text-on-surface-variant text-label-sm"
                >
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`p-1 px-3 border rounded font-mono text-label-sm transition-colors ${
                    page === safeCurrentPage
                      ? "border-secondary bg-secondary text-on-secondary font-bold"
                      : "border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  {page}
                </button>
              )
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage >= totalPages}
              className="p-1 px-2 border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-label-md text-on-surface-variant uppercase">
              Inventory Value
            </p>
            <ShoppingCart className="h-5 w-5 text-secondary" />
          </div>
          <p className="text-headline-lg text-primary">$184,200.00</p>
          <p className="text-body-sm text-emerald-600 mt-2 flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5" />
            +12.4% from last month
          </p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-label-md text-on-surface-variant uppercase">
              Active Requests
            </p>
            <ReceiptIcon className="h-5 w-5 text-secondary" />
          </div>
          <p className="text-headline-lg text-primary">18</p>
          <p className="text-body-sm text-on-surface-variant mt-2">
            6 requiring immediate action
          </p>
        </div>

        <div className="bg-secondary text-on-secondary p-6 rounded-lg relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <p className="font-mono text-label-md uppercase opacity-80">
              Compliance Score
            </p>
            <p className="text-headline-lg">98%</p>
          </div>
          <div className="relative z-10 mt-4">
            <button className="bg-on-secondary text-secondary font-mono text-label-md px-4 py-1.5 rounded-full">
              Check Compliance
            </button>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-10">
            <ShieldCheck className="h-[120px] w-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small receipt icon since it's not in Lucide */
function ReceiptIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  );
}
