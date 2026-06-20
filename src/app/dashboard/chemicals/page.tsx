"use client";

// Dashboard Chemicals Management page — exact conversion of Supplier Portal chemicals

import { useState } from "react";
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
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const chemicals = [
  {
    name: "Ethanol 99.5%",
    cas: "64-17-5",
    category: "Industrial Solvents",
    stock: "5,000 L",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjSvHX8LgBeSXQgAniKlwd4di9aPB9yGVw83yXXlDdi-yRmR5ey6CQInqsUJPiIsxd9CcGN92-RlAnYP1ES5vjvHPhGGOfQBOZFnklmHYnpDuRaxvZOuBd12cTFZGmW514DWJCfp3rbfF79PmTGnZFH9jhfyqekLaXztq-tpU9FF57myj_cJyGYWItMEg5IpKsG7Rec0-9DM3G4kSOTB0_86hisYph08x_h5nvq5L4HSjjTQ0Zb5l7mdRhlcwU4cjVUXYBHchDS-Sn",
  },
  {
    name: "Sulfuric Acid 98%",
    cas: "7664-93-9",
    category: "Laboratory Reagents",
    stock: "0 kg",
    stockColor: "text-destructive",
    status: "Out of Stock",
    statusClass: "bg-red-50 text-red-700 border-red-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKZsy9JgdOwxHjUJZDNS7uhRl7GENMT6dAYb9plMthpJq5lL4IB9248y2v-TTS6nS26xxXLgE4Yd-ILRhSN3KhA2YGyDbXZsl4CSdtycaX6SHQmE1e3FocqNAtai2ZTzNKYyUb1b4GQg1ceueRne0cmxQ15RJSknXX1FAIoXvcOC-hQmmknyK2W8OFNhycp-d8q8YvcI6flpkKW22cNtMuvCdgx3jTzQ5V47ILJkkjI4m_e7LI4_owBWPH75yt0QwRPoUDBSOJ8Ucz",
  },
  {
    name: "Acetone (ACS Grade)",
    cas: "67-64-1",
    category: "Industrial Solvents",
    stock: "1,250 L",
    stockColor: "text-primary",
    status: "Pending Review",
    statusClass: "bg-amber-50 text-amber-700 border-amber-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoEQptQ_pqp6OtXyXk8N5VZLSlLyN9L382c_QnLDtk4YqccIumnZqdxOTLhN83RjE6dlPtsyUZk3jFHyf18WFe8R2mJ8t_xM40FWYyDV-gIvZ5bfDcIzyEh5Exi4X0rsMQeYC8IPKdvJqHpCy1rH9tREL36w5k-id8FoZOn7e0RcWdSX_iwygwpd30N9al6jHhHGcum3eydnf5rObhqFV4Y9_HxN0lU8wvbySRE9BI7kwazaXvF-ooxmGlE1VX42C-J6Wj5jSViEwb",
  },
  {
    name: "Sodium Hydroxide Pellets",
    cas: "1310-73-2",
    category: "Laboratory Reagents",
    stock: "450 kg",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXiHabAKBTgZsuQOdVsg4zugwHjhFsSFml1d4BqQCfe5dYEaRQtfNeYs9UqACdPEqbHVwP2OXIHDOB0GXceqbmt_6TZ0Ms2d_1CzEYY5B5YGBFhjnXiJ_Rs8Swqr1ew8sOqgYIkkVw7inxvdOjfj_qdozIMbrlj0SmFhhCUmjgEdko7xY81vykoFAKMO4SK65d9QKIAWyMdBKCP2xyjQQ44Jv3bODdgCSHG38h0GgOYSB5SOVUvKQ4LBhT0OW_-nB1I1Y4ekfyKPTL",
  },
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function DashboardChemicalsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-headline-xl text-primary">My Chemicals</h2>
          <p className="text-body-md text-on-surface-variant">
            Manage your industrial chemical listings and inventory levels.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-surface-container-high px-3 py-1 rounded text-primary font-mono text-label-md border border-outline-variant">
            24 Chemicals
          </div>
          <button className="bg-primary text-on-primary text-body-md px-6 py-2.5 rounded border border-primary flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Plus className="h-5 w-5" />
            Add Chemical
          </button>
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="bg-background border border-outline-variant rounded font-mono text-label-md py-2 px-6 focus:border-secondary focus:ring-0 outline-none">
          <option>All Categories</option>
          <option>Industrial Solvents</option>
          <option>Laboratory Reagents</option>
          <option>Specialty Chemicals</option>
        </select>
        <select className="bg-background border border-outline-variant rounded font-mono text-label-md py-2 px-6 focus:border-secondary focus:ring-0 outline-none">
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
                Stock Level
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
            {chemicals.map((chem) => (
              <tr
                key={chem.name}
                className="hover:bg-surface-container-lowest transition-colors group"
              >
                <td className="py-3 px-4">
                  <input
                    className="rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                    type="checkbox"
                  />
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-surface-container border border-outline-variant overflow-hidden shrink-0">
                      <Image
                        src={chem.image}
                        alt={chem.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-body-md font-semibold text-primary">
                      {chem.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="font-mono text-label-md text-on-surface-variant">
                    {chem.cas}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-surface-container rounded text-body-sm">
                    {chem.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <span
                    className={`font-mono text-label-md font-bold ${chem.stockColor}`}
                  >
                    {chem.stock}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] border ${chem.statusClass} font-mono text-label-sm font-bold uppercase`}
                  >
                    {chem.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed/30 rounded transition-colors"
                      title="View Analytics"
                    >
                      <BarChart3 className="h-[18px] w-[18px]" />
                    </button>
                    <button
                      className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed/30 rounded transition-colors"
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
            ))}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="bg-surface-container-low px-4 py-3 flex items-center justify-between border-t border-outline-variant">
          <span className="font-mono text-label-sm text-on-surface-variant">
            Showing 1 to 4 of 24 listings
          </span>
          <div className="flex items-center gap-1">
            <button className="p-1 px-2 border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant opacity-50 cursor-not-allowed">
              <ChevronLeft className="h-[18px] w-[18px]" />
            </button>
            <button className="p-1 px-3 border border-secondary rounded bg-secondary-fixed text-secondary font-mono text-label-sm font-bold">
              1
            </button>
            <button className="p-1 px-3 border border-outline-variant rounded bg-surface-container-lowest font-mono text-label-sm hover:bg-surface-container transition-colors">
              2
            </button>
            <button className="p-1 px-3 border border-outline-variant rounded bg-surface-container-lowest font-mono text-label-sm hover:bg-surface-container transition-colors">
              3
            </button>
            <button className="p-1 px-2 border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors">
              <ChevronRight className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Inventory Value */}
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

        {/* Active Requests */}
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

        {/* Compliance Score */}
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
          {/* Subtle background pattern */}
          <div className="absolute right-[-20px] top-[-20px] opacity-10">
            <ShieldCheck className="h-[120px] w-[120px]" />
          </div>
        </div>
      </div>
    </>
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
