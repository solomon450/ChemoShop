"use client";

// Dashboard Main Page — pixel-perfect conversion of the ChemTrade Pro Supplier Dashboard
// Includes metrics cards, critical alerts, quick actions, latest RFQs, and recently added chemicals

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Package,
  CheckCircle,
  Clock,
  DollarSign,
  AlertTriangle,
  SquarePlus,
  Archive,
  ClipboardList,
  ChevronRight,
  ArrowRight,
  FlaskConical,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const metrics = [
  { label: "Total Chemicals", value: "24", icon: Package },
  { label: "Active Listings", value: "18", icon: CheckCircle },
  { label: "Pending RFQs", value: "6", icon: Clock },
  { label: "Inventory Value", value: "$184,200", icon: DollarSign },
];

const latestRfqs = [
  { chemical: "Ethanol 99.5%", quantity: "500 L", received: "2h ago" },
  { chemical: "Sulfuric Acid", quantity: "1,200 kg", received: "4h ago" },
  { chemical: "Methanol Tech Grade", quantity: "2,000 L", received: "6h ago" },
];

const recentlyAdded = [
  {
    name: "Sodium Hydroxide",
    detail: "Industrial Pellets \u2022 25kg Bags",
    status: "Active",
    statusClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
    time: "5h ago",
  },
  {
    name: "Potassium Permanganate",
    detail: "High Purity \u2022 Crystal Form",
    status: "Draft",
    statusClass: "bg-surface-container-high text-on-surface-variant",
    time: "1d ago",
  },
  {
    name: "Isopropanol 99%",
    detail: "Bulk Container \u2022 1000L IBC",
    status: "Active",
    statusClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
    time: "2d ago",
  },
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function DashboardPage() {
  // Simulate metric loading animation
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 px-6 pb-10 max-w-[1440px] mx-auto">
      {/* ── Metrics Section ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
        {metrics.map((metric) => {
          const IconComp = metric.icon;
          return (
            <div
              key={metric.label}
              className="bg-surface-container-lowest border border-outline-variant p-4 flex flex-col justify-between h-32 rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-start">
                <p className="text-label-md text-on-surface-variant uppercase">
                  {metric.label}
                </p>
                <IconComp className="h-5 w-5 text-secondary" />
              </div>
              <h3
                className={`text-headline-lg text-primary transition-opacity duration-500 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              >
                {metric.value}
              </h3>
            </div>
          );
        })}
      </section>

      {/* ── Alerts Panel ── */}
      <section className="mb-10">
        <div className="bg-error-container/20 border border-error/20 p-4 rounded-lg flex items-center gap-4">
          <AlertTriangle className="h-5 w-5 text-error shrink-0" />
          <div className="flex-1 flex gap-4 items-center">
            <p className="text-body-md text-on-error-container font-semibold">
              Critical Alerts:
            </p>
            <div className="flex gap-4">
              <span className="flex items-center gap-1 text-on-error-container text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-error" />
                Missing SDS for Acetone
              </span>
              <span className="flex items-center gap-1 text-on-error-container text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-error" />
                3 Listings Pending Review
              </span>
            </div>
          </div>
          <button className="text-error font-semibold text-sm hover:underline">
            View All
          </button>
        </div>
      </section>

      {/* ── Quick Actions Grid ── */}
      <section className="mb-10">
        <h4 className="text-label-md text-on-surface-variant uppercase mb-4">
          Quick Actions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Primary Action */}
          <Link
            href="/dashboard/chemicals/new"
            className="flex items-center justify-between p-4 bg-secondary text-on-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity text-left active:scale-95"
          >
            <div className="flex items-center gap-4">
              <SquarePlus className="h-5 w-5" />
              <span>Add New Chemical</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </Link>
          {/* Secondary Actions */}
          <Link
            href="/dashboard/chemicals"
            className="flex items-center justify-between p-4 border border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/5 transition-colors text-left active:scale-95"
          >
            <div className="flex items-center gap-4">
              <Archive className="h-5 w-5" />
              <span>Manage Inventory</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center justify-between p-4 border border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/5 transition-colors text-left active:scale-95"
          >
            <div className="flex items-center gap-4">
              <ClipboardList className="h-5 w-5" />
              <span>View Requests</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* ── Activity Columns (Bento Style) ── */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Latest RFQs */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center">
            <h4 className="text-headline-md text-primary">Latest RFQs</h4>
            <button className="text-secondary font-semibold text-sm hover:underline">
              View Full Queue
            </button>
          </div>
          <div className="overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="p-4 text-label-sm text-on-surface-variant uppercase">
                    Chemical Name
                  </th>
                  <th className="p-4 text-label-sm text-on-surface-variant uppercase">
                    Quantity
                  </th>
                  <th className="p-4 text-label-sm text-on-surface-variant uppercase">
                    Received
                  </th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {latestRfqs.map((rfq) => (
                  <tr
                    key={rfq.chemical}
                    className="hover:bg-surface transition-colors cursor-pointer group"
                  >
                    <td className="p-4 font-semibold text-primary">
                      {rfq.chemical}
                    </td>
                    <td className="p-4 text-on-surface-variant">{rfq.quantity}</td>
                    <td className="p-4 text-on-surface-variant">{rfq.received}</td>
                    <td className="p-4 text-right">
                      <ArrowRight className="h-5 w-5 text-on-surface-variant group-hover:text-secondary ml-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recently Added */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center">
            <h4 className="text-headline-md text-primary">Recently Added</h4>
            <button className="text-secondary font-semibold text-sm hover:underline">
              Manage Catalog
            </button>
          </div>
          <div className="flex flex-col">
            {recentlyAdded.map((item, index) => (
              <div
                key={item.name}
                className={`p-4 flex items-center gap-4 hover:bg-surface transition-colors group ${
                  index < recentlyAdded.length - 1
                    ? "border-b border-outline-variant"
                    : ""
                }`}
              >
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-secondary border border-outline-variant shrink-0">
                  <FlaskConical className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-primary">{item.name}</p>
                  <p className="text-sm text-on-surface-variant">{item.detail}</p>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                  <p className="text-[10px] text-on-surface-variant mt-1">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
