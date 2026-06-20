"use client";

// Home page — exact conversion of ChemTrade Pro landing page
// Trending chemicals data-driven from mock data, cards link to /chemicals/[id]

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Microscope,
  Atom,
  Pill,
  Sprout,
  Droplets,
  ShieldCheck,
  Terminal,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { chemicals } from "@/lib/mock-data";

/* ─────────────────── DATA ─────────────────── */

const categories = [
  {
    icon: FlaskConical,
    title: "Industrial Solvents",
    description:
      "Bulk solvents for extraction, purification, and industrial manufacturing processes.",
  },
  {
    icon: Microscope,
    title: "Laboratory Reagents",
    description:
      "High-purity analytical reagents and buffers for research and development.",
  },
  {
    icon: Atom,
    title: "Specialty Polymers",
    description:
      "Advanced polymer materials for automotive, electronics, and aerospace industries.",
  },
  {
    icon: Pill,
    title: "Fine Chemicals",
    description:
      "Complex, pure chemical substances used in pharmaceutical and food applications.",
  },
  {
    icon: Sprout,
    title: "Agrochemicals",
    description:
      "Pesticides, fertilizers, and growth regulators for large-scale agricultural operations.",
  },
  {
    icon: Droplets,
    title: "Surfactants",
    description:
      "Surface-active agents for detergents, emulsifiers, and foaming applications.",
  },
];

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "100% Verified Suppliers",
    description:
      "Rigorous vetting process for all global manufacturing partners.",
  },
  {
    icon: Terminal,
    title: "API Access",
    description:
      "Integrate our chemical database directly into your ERP systems.",
  },
  {
    icon: Clock,
    title: "Real-time Logistics",
    description:
      "Track hazardous material shipments in real-time across borders.",
  },
];

// Trending chemicals — pick top 4 from mock data by supplier count
const trendingChemicals = [...chemicals]
  .sort((a, b) => b.supplierCount - a.supplierCount)
  .slice(0, 4);

/* ─────────────────── COMPONENT ─────────────────── */

export default function Home() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter chemicals by search query (match name, CAS, formula, category)
  const searchResults = searchQuery.trim()
    ? chemicals.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.cas.includes(searchQuery) ||
          c.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keep dropdown open when clicking inside it
  const handleDropdownMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // prevent input blur so dropdown stays visible
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative w-full py-10 md:py-32 bg-surface-container-lowest border-b border-outline-variant">
        <div className="absolute inset-0 subtle-industrial-bg opacity-30" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <h1 className="text-headline-xl text-primary mb-6 max-w-3xl">
            Connecting global manufacturers with verified suppliers.
          </h1>
          <div className="w-full max-w-2xl mt-6" ref={dropdownRef}>
            <div
              className={`relative group transition-shadow ${
                searchFocused ? "shadow-sm" : ""
              }`}
            >
              <span className="absolute inset-y-0 left-4 flex items-center text-outline">
                <Search className="h-5 w-5" />
              </span>
              <input
                className="w-full h-14 pl-12 pr-4 bg-surface border border-outline-variant rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-body-lg"
                placeholder="Search chemicals (e.g., Ethanol, Sulfuric Acid)"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => {
                  setSearchFocused(true);
                  if (searchQuery.trim()) setShowDropdown(true);
                }}
                onBlur={() => {
                  setSearchFocused(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setShowDropdown(false);
                }}
              />

              {/* Search Results Dropdown */}
              {showDropdown && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest border border-outline-variant rounded shadow-lg max-h-[400px] overflow-y-auto" style={{ zIndex: 9999 }} onMouseDown={handleDropdownMouseDown}>
                  <div className="p-3 border-b border-outline-variant">
                    <span className="font-mono text-label-sm text-on-surface-variant uppercase">
                      {searchResults.length} Result{searchResults.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  {searchResults.map((chem) => (
                    <button
                      key={chem.id}
                      type="button"
                      className="flex items-center gap-4 px-4 py-3 hover:bg-surface-container-high transition-colors border-b border-outline-variant/30 last:border-b-0 w-full text-left cursor-pointer"
                      onClick={() => {
                        setShowDropdown(false);
                        setSearchQuery("");
                        router.push(`/chemicals/${chem.id}`);
                      }}
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
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-primary text-body-md truncate">
                          {chem.name}
                        </p>
                        <p className="text-body-sm text-on-surface-variant truncate">
                          {chem.casDisplay} &middot; {chem.category}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-label-md text-secondary font-bold">
                          {chem.price}
                        </p>
                        <p className="text-[10px] text-on-surface-variant">
                          {chem.supplier.name}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* No Results */}
              {showDropdown && searchQuery.trim() && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest border border-outline-variant rounded shadow-lg p-6 text-center" style={{ zIndex: 9999 }} onMouseDown={handleDropdownMouseDown}>
                  <p className="text-on-surface-variant text-body-md">No chemicals found for &lsquo;{searchQuery}&rsquo;</p>
                  <button
                    type="button"
                    className="text-secondary text-body-sm font-semibold hover:underline mt-1"
                    onClick={() => {
                      setShowDropdown(false);
                      setSearchQuery("");
                      router.push("/chemicals");
                    }}
                  >
                    Browse full catalog
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="text-on-surface-variant text-label-sm uppercase tracking-wider">
                Quick Search:
              </span>
              <Link
                className="text-secondary hover:underline text-label-sm"
                href="/chemicals"
              >
                Hydrochloric Acid
              </Link>
              <Link
                className="text-secondary hover:underline text-label-sm"
                href="/chemicals"
              >
                Acetone
              </Link>
              <Link
                className="text-secondary hover:underline text-label-sm"
                href="/chemicals"
              >
                Glycerol
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Categories ── */}
      <section className="py-10 max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-headline-lg text-primary">Core Categories</h2>
          <Link
            className="text-secondary font-bold hover:underline flex items-center gap-1"
            href="/chemicals"
          >
            View Catalog{" "}
            <ArrowRight className="h-[18px] w-[18px]" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.title}
                className="group bg-surface-container-lowest border border-outline-variant p-6 hover:border-secondary transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <IconComp className="text-secondary h-10 w-10" />
                  <ArrowUpRight className="text-outline-variant group-hover:text-secondary transition-colors h-5 w-5" />
                </div>
                <h3 className="text-headline-md text-primary mb-2">
                  {cat.title}
                </h3>
                <p className="text-on-surface-variant text-body-md">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Trending Chemicals ── */}
      <section className="py-10 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <h2 className="text-headline-lg text-primary">Trending Now</h2>
              <p className="text-on-surface-variant text-body-md">
                Most active procurement listings this week.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-outline-variant bg-surface flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 border border-outline-variant bg-surface flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingChemicals.map((chem) => (
              <Link
                key={chem.id}
                href={`/chemicals/${chem.id}`}
                className="bg-surface-container-lowest border border-outline-variant overflow-hidden group block"
              >
                <div className="h-48 overflow-hidden relative border-b border-outline-variant">
                  <Image
                    src={chem.image}
                    alt={chem.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {chem.trendingBadge && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-secondary-container text-on-secondary-container px-2 py-1 text-label-sm uppercase rounded-sm">
                        {chem.trendingBadge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-headline-md text-primary mb-1">
                    {chem.name}
                  </h4>
                  <div className="flex items-center gap-2 text-on-surface-variant mb-6">
                    <span className="font-mono text-label-md bg-surface-container-high px-2 rounded-sm">
                      CAS: {chem.cas}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-body-sm text-outline">
                      <span>Min. Order: {chem.minOrderQty}</span>
                      <span className="text-secondary font-bold">
                        {chem.supplierCount} Suppliers
                      </span>
                    </div>
                    <span className="block w-full py-1 bg-secondary text-on-primary font-bold text-center hover:opacity-90 transition-all mt-2">
                      View Supplier
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance Banner ── */}
      <section className="bg-primary py-6 border-y border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center gap-4">
          {complianceFeatures.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div
                key={feat.title}
                className="flex items-center gap-4 text-on-primary"
              >
                <IconComp className="h-8 w-8 shrink-0" />
                <div>
                  <p className="text-headline-md">{feat.title}</p>
                  <p className="text-body-sm opacity-80">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
