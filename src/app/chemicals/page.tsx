"use client";

// Chemicals / Marketplace page — exact conversion of ChemTrade Pro search results
// Data-driven: uses mock data, rows link to /chemicals/[id]

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, AlertTriangle, Info } from "lucide-react";
import { chemicals } from "@/lib/mock-data";

/* ─────────────────── COMPONENT ─────────────────── */

export default function ChemicalsPage() {
  const [sortBy, setSortBy] = useState("Relevance");

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
      {/* ── Breadcrumbs ── */}
      <nav className="flex items-center gap-1 mb-6 text-body-sm text-on-surface-variant">
        <Link className="hover:text-secondary" href="/">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-on-surface">Search Results</span>
      </nav>

      {/* ── Search Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-headline-lg text-on-surface">
            Results for &lsquo;Solvents&rsquo;
          </h1>
          <p className="text-on-surface-variant mt-1 text-body-md">
            {chemicals.length} verified chemical listings found matching your
            criteria.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-label-md text-on-surface-variant">
            SORT BY:
          </span>
          <select
            className="bg-surface border border-outline-variant rounded px-2 py-1 text-body-md focus:border-secondary outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Purity: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* ── Left Sidebar: Filters ── */}
        <aside className="w-full md:w-1/4 space-y-10">
          {/* Category Filter */}
          <section>
            <h3 className="font-mono text-label-md text-on-surface-variant border-b border-outline-variant pb-2 mb-4">
              CATEGORY
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  defaultChecked
                  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  type="checkbox"
                />
                <span className="text-body-md group-hover:text-secondary">
                  Solvents
                </span>
                <span className="text-body-sm text-outline ml-auto">842</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  type="checkbox"
                />
                <span className="text-body-md group-hover:text-secondary">
                  Reagents
                </span>
                <span className="text-body-sm text-outline ml-auto">312</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  type="checkbox"
                />
                <span className="text-body-md group-hover:text-secondary">
                  Polymers
                </span>
                <span className="text-body-sm text-outline ml-auto">94</span>
              </label>
            </div>
          </section>

          {/* Purity Filter */}
          <section>
            <h3 className="font-mono text-label-md text-on-surface-variant border-b border-outline-variant pb-2 mb-4">
              PURITY
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  type="checkbox"
                />
                <span className="text-body-md group-hover:text-secondary">
                  99.9% Ultra Pure
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  type="checkbox"
                />
                <span className="text-body-md group-hover:text-secondary">
                  98% Technical Grade
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  type="checkbox"
                />
                <span className="text-body-md group-hover:text-secondary">
                  95% Industrial
                </span>
              </label>
            </div>
          </section>

          {/* Location Filter */}
          <section>
            <h3 className="font-mono text-label-md text-on-surface-variant border-b border-outline-variant pb-2 mb-4">
              SUPPLIER LOCATION
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  defaultChecked
                  className="w-4 h-4 border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  name="location"
                  type="radio"
                />
                <span className="text-body-md group-hover:text-secondary">
                  Global
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  name="location"
                  type="radio"
                />
                <span className="text-body-md group-hover:text-secondary">
                  North America
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  name="location"
                  type="radio"
                />
                <span className="text-body-md group-hover:text-secondary">
                  Europe
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                  name="location"
                  type="radio"
                />
                <span className="text-body-md group-hover:text-secondary">
                  Asia Pacific
                </span>
              </label>
            </div>
          </section>

          {/* Price Range */}
          <section>
            <h3 className="font-mono text-label-md text-on-surface-variant border-b border-outline-variant pb-2 mb-4">
              PRICE RANGE (USD)
            </h3>
            <div className="flex gap-2 mt-4">
              <input
                className="w-full h-8 border border-outline-variant rounded px-2 text-body-sm focus:border-secondary outline-none"
                placeholder="Min"
                type="text"
              />
              <input
                className="w-full h-8 border border-outline-variant rounded px-2 text-body-sm focus:border-secondary outline-none"
                placeholder="Max"
                type="text"
              />
            </div>
            <button className="w-full mt-4 bg-surface-container-high py-2 font-mono text-label-md hover:bg-surface-container-highest transition-colors rounded">
              APPLY RANGE
            </button>
          </section>

          {/* Hazards & Compliance */}
          <section className="p-4 bg-surface-container-low rounded">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-destructive fill-destructive" />
              <span className="text-body-md font-semibold">Safety First</span>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              All bulk shipments require valid SDS documentation. Verified
              suppliers only.
            </p>
          </section>
        </aside>

        {/* ── Main Content: Data Table ── */}
        <div className="w-full md:w-3/4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container font-mono text-label-md text-on-surface-variant uppercase border-b border-outline-variant">
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Formula</th>
                    <th className="px-4 py-2">Purity</th>
                    <th className="px-4 py-2">Supplier</th>
                    <th className="px-4 py-2">Price/Unit</th>
                    <th className="px-4 py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant text-body-md">
                  {chemicals.map((chem) => (
                    <tr
                      key={chem.id}
                      className="transition-colors hover:bg-surface-container-low cursor-pointer"
                    >
                      {/* Product — links to detail page */}
                      <td className="px-4 py-4">
                        <Link
                          href={`/chemicals/${chem.id}`}
                          className="flex items-center gap-4"
                        >
                          <div className="w-10 h-10 border border-outline-variant rounded bg-surface shrink-0 overflow-hidden">
                            <Image
                              src={chem.image}
                              alt={chem.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-primary hover:text-secondary transition-colors">
                              {chem.name}
                            </div>
                            <div className="text-body-sm text-on-surface-variant">
                              {chem.casDisplay}
                            </div>
                          </div>
                        </Link>
                      </td>

                      {/* Formula */}
                      <td className="px-4 py-4 font-mono text-label-md">
                        {chem.formula}
                      </td>

                      {/* Purity */}
                      <td className="px-4 py-4">
                        <span className="bg-surface-container-high px-2 py-0.5 rounded text-body-sm">
                          {chem.purity} {chem.grade}
                        </span>
                      </td>

                      {/* Supplier */}
                      <td className="px-4 py-4">
                        <div className="text-on-surface">
                          {chem.supplier.name}
                        </div>
                        <div className="text-body-sm text-on-surface-variant">
                          {chem.supplier.location}
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-4 py-4">
                        <div className="font-bold text-secondary">
                          {chem.price === "Request Quote"
                            ? chem.price
                            : `${chem.price} / ${chem.unit}`}
                        </div>
                        <div className="text-body-sm text-on-surface-variant">
                          {chem.minOrder}
                        </div>
                      </td>

                      {/* Action — links to detail page */}
                      <td className="px-4 py-4 text-right">
                        <Link
                          href={`/chemicals/${chem.id}`}
                          className="inline-block px-4 py-1.5 border border-secondary text-secondary rounded hover:bg-secondary hover:text-on-secondary transition-all text-body-sm font-medium"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Pagination ── */}
            <div className="p-4 flex items-center justify-between border-t border-outline-variant bg-surface-container-low">
              <span className="text-body-sm text-on-surface-variant">
                Showing 1-{chemicals.length} of {chemicals.length} results
              </span>
              <div className="flex gap-1">
                <button
                  className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-high disabled:opacity-50"
                  disabled
                >
                  <ChevronLeft className="h-[18px] w-[18px]" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-secondary text-on-secondary rounded text-body-sm font-bold">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-high text-body-sm">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-high text-body-sm">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-high">
                  <ChevronRight className="h-[18px] w-[18px]" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Bulk Action Bar ── */}
          <div className="mt-6 p-4 border border-outline-variant rounded bg-surface-container-lowest flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Info className="h-5 w-5 text-secondary shrink-0" />
              <p className="text-body-md text-on-surface-variant">
                Need bulk procurement for a facility? Contact our Enterprise
                Desk.
              </p>
            </div>
            <button className="text-secondary font-bold text-body-md hover:underline whitespace-nowrap">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
