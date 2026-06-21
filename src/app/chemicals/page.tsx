"use client";

// Chemicals / Marketplace page — exact conversion of Selihom Gebeya search results
// Data-driven: uses mock data, rows link to /chemicals/[id]

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Info,
  Plus,
  Check,
} from "lucide-react";
import { chemicals, type MockChemical } from "@/lib/mock-data";
import { useCart } from "@/components/providers/CartProvider";

/* ─────────────────── FILTER OPTIONS (derived from mock data) ─────────────────── */

const allCategories = Array.from(new Set(chemicals.map((c) => c.category))).sort();
const allPurities = ["99.9%", "99.5%", "98%", "97%", "95%"];
const allLocations = Array.from(new Set(chemicals.map((c) => c.supplier.location.split(", ").pop() || c.supplier.location))).sort();

/* ─────────────────── COMPONENT ─────────────────── */

export default function ChemicalsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [sortBy, setSortBy] = useState("Relevance");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam && allCategories.includes(categoryParam)
      ? [categoryParam]
      : allCategories
  );
  const [selectedPurities, setSelectedPurities] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("Global");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [priceApplied, setPriceApplied] = useState<{ min: number; max: number } | null>(null);
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});

  const { addItem } = useCart();

  // Toggle category checkbox
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // Toggle purity checkbox
  const togglePurity = (pur: string) => {
    setSelectedPurities((prev) =>
      prev.includes(pur) ? prev.filter((p) => p !== pur) : [...prev, pur]
    );
  };

  // Apply price range
  const applyPriceRange = () => {
    const min = priceMin ? parseFloat(priceMin) : 0;
    const max = priceMax ? parseFloat(priceMax) : Infinity;
    setPriceApplied({ min, max });
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories(allCategories);
    setSelectedPurities([]);
    setSelectedLocation("Global");
    setPriceMin("");
    setPriceMax("");
    setPriceApplied(null);
    setSortBy("Relevance");
  };

  // Filtered + sorted chemicals
  const filteredChemicals = useMemo(() => {
    let result = [...chemicals];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((c) => selectedCategories.includes(c.category));
    }

    // Purity filter — match if chemical purity starts with any selected purity
    if (selectedPurities.length > 0) {
      result = result.filter((c) =>
        selectedPurities.some((p) => c.purity.startsWith(p))
      );
    }

    // Location filter
    if (selectedLocation !== "Global") {
      result = result.filter((c) =>
        c.supplier.location.includes(selectedLocation)
      );
    }

    // Price range filter
    if (priceApplied) {
      result = result.filter((c) => {
        if (c.priceNumber === 0) return true; // "Request Quote" items always show
        return c.priceNumber >= priceApplied.min && c.priceNumber <= priceApplied.max;
      });
    }

    // Sort
    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.priceNumber - b.priceNumber);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.priceNumber - a.priceNumber);
        break;
      case "Purity: High to Low":
        result.sort((a, b) => parseFloat(b.purity) - parseFloat(a.purity));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPurities, selectedLocation, priceApplied, sortBy]);

  // Handle add to cart
  const handleAddToCart = (chem: MockChemical) => {
    addItem(chem);
    setAddedToCart((prev) => ({ ...prev, [chem.id]: true }));
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [chem.id]: false }));
    }, 1500);
  };

  // Get category count
  const getCategoryCount = (cat: string) =>
    chemicals.filter((c) => c.category === cat).length;

  const hasActiveFilters =
    selectedCategories.length < allCategories.length ||
    selectedPurities.length > 0 ||
    selectedLocation !== "Global" ||
    priceApplied !== null;

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
            {categoryParam && allCategories.includes(categoryParam)
              ? categoryParam
              : "All Chemicals"}
          </h1>
          <p className="text-on-surface-variant mt-1 text-body-md">
            {filteredChemicals.length} verified chemical listing{filteredChemicals.length !== 1 ? "s" : ""} found matching your
            criteria.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="px-3 py-1.5 text-body-sm border border-outline-variant text-on-surface-variant hover:bg-surface-container-high rounded transition-colors"
            >
              Reset Filters
            </button>
          )}
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
              {allCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                    type="checkbox"
                  />
                  <span className="text-body-md group-hover:text-secondary">
                    {cat}
                  </span>
                  <span className="text-body-sm text-outline ml-auto">
                    {getCategoryCount(cat)}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Purity Filter */}
          <section>
            <h3 className="font-mono text-label-md text-on-surface-variant border-b border-outline-variant pb-2 mb-4">
              PURITY
            </h3>
            <div className="space-y-2">
              {allPurities.map((pur) => (
                <label key={pur} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    checked={selectedPurities.includes(pur)}
                    onChange={() => togglePurity(pur)}
                    className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                    type="checkbox"
                  />
                  <span className="text-body-md group-hover:text-secondary">
                    {pur === "99.9%" ? "99.9% Ultra Pure" : pur === "98%" ? "98% Technical Grade" : pur === "95%" ? "95% Industrial" : `${pur} Grade`}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Location Filter */}
          <section>
            <h3 className="font-mono text-label-md text-on-surface-variant border-b border-outline-variant pb-2 mb-4">
              SUPPLIER LOCATION
            </h3>
            <div className="space-y-2">
              {["Global", ...allLocations].map((loc) => (
                <label key={loc} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    checked={selectedLocation === loc}
                    onChange={() => setSelectedLocation(loc)}
                    className="w-4 h-4 border-outline-variant text-secondary focus:ring-secondary accent-secondary"
                    name="location"
                    type="radio"
                  />
                  <span className="text-body-md group-hover:text-secondary">
                    {loc}
                  </span>
                </label>
              ))}
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
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
              />
              <input
                className="w-full h-8 border border-outline-variant rounded px-2 text-body-sm focus:border-secondary outline-none"
                placeholder="Max"
                type="text"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
              />
            </div>
            <button
              onClick={applyPriceRange}
              className="w-full mt-4 bg-surface-container-high py-2 font-mono text-label-md hover:bg-surface-container-highest transition-colors rounded"
            >
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
                  {filteredChemicals.length > 0 ? (
                    filteredChemicals.map((chem) => (
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

                        {/* Actions */}
                        <td className="px-4 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(chem);
                              }}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-body-sm font-medium transition-all ${
                                addedToCart[chem.id]
                                  ? "bg-green-100 text-green-700 border border-green-300"
                                  : "bg-secondary text-on-secondary hover:opacity-90"
                              }`}
                            >
                              {addedToCart[chem.id] ? (
                                <>
                                  <Check className="h-3.5 w-3.5" />
                                  Added
                                </>
                              ) : (
                                <>
                                  <Plus className="h-3.5 w-3.5" />
                                  Add
                                </>
                              )}
                            </button>
                            <Link
                              href={`/chemicals/${chem.id}`}
                              className="inline-block px-3 py-1.5 border border-secondary text-secondary rounded hover:bg-secondary hover:text-on-secondary transition-all text-body-sm font-medium"
                            >
                              Details
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-4 py-16 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <Info className="h-8 w-8 text-on-surface-variant" />
                          <p className="text-on-surface-variant text-body-md">
                            No chemicals match your current filters.
                          </p>
                          <button
                            onClick={resetFilters}
                            className="text-secondary font-bold text-body-sm hover:underline"
                          >
                            Reset all filters
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* ── Pagination ── */}
            <div className="p-4 flex items-center justify-between border-t border-outline-variant bg-surface-container-low">
              <span className="text-body-sm text-on-surface-variant">
                Showing 1-{filteredChemicals.length} of {filteredChemicals.length} results
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
