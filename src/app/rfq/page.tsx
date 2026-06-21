"use client";

// RFQ (Request for Quote) page — exact conversion of Selihom Gebeya RFQ form

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Trash2,
  User,
  Building2,
  Mail,
  CheckCircle,
  Loader2,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const selectedChemicals = [
  {
    name: "Ethanol 99.5%",
    cas: "CAS: 64-17-5",
    quantity: 500,
    unitOptions: ["Liters", "Kilograms", "Drums (200L)"],
    defaultUnit: "Liters",
  },
  {
    name: "Sulfuric Acid",
    cas: "CAS: 7664-93-9",
    quantity: 10,
    unitOptions: ["Tons", "IBC Totes", "Drums"],
    defaultUnit: "Tons",
  },
];

const incoterms = [
  "FOB - Free On Board",
  "CIF - Cost, Insurance, and Freight",
  "EXW - Ex Works",
  "DDP - Delivered Duty Paid",
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function RFQPage() {
  const [sendStatus, setSendStatus] = useState<
    "idle" | "sending" | "sent"
  >("idle");

  const handleSend = () => {
    setSendStatus("sending");
    setTimeout(() => {
      setSendStatus("sent");
      setTimeout(() => setSendStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-8 py-10">
      {/* ── Page Header ── */}
      <div className="mb-10">
        <h1 className="text-headline-xl text-primary mb-1">
          Request for Quote
        </h1>
        <p className="text-on-surface-variant text-body-lg">
          Review your selected chemicals and specify logistics requirements to
          receive bulk pricing.
        </p>
      </div>

      <div className="space-y-6">
        {/* ── Selected Chemicals Section ── */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
            <h2 className="text-headline-md text-on-surface">
              Selected Chemicals
            </h2>
            <span className="font-mono text-label-sm text-on-surface-variant uppercase tracking-wider">
              {selectedChemicals.length} Items
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-6 py-2 font-mono text-label-sm text-on-surface-variant uppercase">
                    Chemical / CAS
                  </th>
                  <th className="px-6 py-2 font-mono text-label-sm text-on-surface-variant uppercase w-48">
                    Quantity
                  </th>
                  <th className="px-6 py-2 font-mono text-label-sm text-on-surface-variant uppercase w-16" />
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {selectedChemicals.map((chem) => (
                  <tr
                    key={chem.name}
                    className="hover:bg-surface-container-lowest transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="text-body-md font-semibold text-on-surface">
                        {chem.name}
                      </div>
                      <div className="font-mono text-label-sm text-on-surface-variant">
                        {chem.cas}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <input
                          className="w-20 border border-outline-variant rounded px-2 py-1 text-body-md focus:border-secondary focus:ring-0 outline-none transition-colors"
                          type="number"
                          defaultValue={chem.quantity}
                        />
                        <select className="border border-outline-variant rounded px-2 py-1 text-body-md bg-transparent focus:border-secondary focus:ring-0 outline-none transition-colors">
                          {chem.unitOptions.map((unit) => (
                            <option key={unit}>{unit}</option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-destructive hover:bg-error-container p-1 rounded transition-colors">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-surface-container-lowest border-t border-outline-variant">
            <button className="flex items-center gap-1 text-secondary font-semibold hover:underline">
              <Plus className="h-[18px] w-[18px]" />
              <span>Add More Chemicals</span>
            </button>
          </div>
        </section>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logistics & Requirements */}
          <section className="md:col-span-2 space-y-4">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
              <h2 className="text-headline-md text-on-surface mb-6">
                Logistics &amp; Requirements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-body-sm font-semibold text-on-surface mb-1">
                    Preferred Delivery Date
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary focus:ring-0 outline-none transition-colors"
                    type="date"
                  />
                </div>
                <div>
                  <label className="block text-body-sm font-semibold text-on-surface mb-1">
                    Shipping Incoterms
                  </label>
                  <select className="w-full border border-outline-variant rounded px-4 py-2 text-body-md bg-transparent focus:border-secondary focus:ring-0 outline-none transition-colors">
                    {incoterms.map((term) => (
                      <option key={term}>{term}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-body-sm font-semibold text-on-surface mb-1">
                  Special Instructions / Notes
                </label>
                <textarea
                  className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary focus:ring-0 outline-none transition-colors resize-none"
                  placeholder="Include any specific purity requirements, certification needs, or site access restrictions..."
                  rows={4}
                />
              </div>
            </div>
          </section>

          {/* Contact Summary Sidebar */}
          <aside className="space-y-4">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
              <h2 className="text-headline-md text-on-surface mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <User className="h-5 w-5 text-outline shrink-0 mt-0.5" />
                  <div>
                    <div className="text-body-md font-semibold">
                      Dr. Sarah Jenkins
                    </div>
                    <div className="text-body-sm text-on-surface-variant">
                      Procurement Director
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Building2 className="h-5 w-5 text-outline shrink-0 mt-0.5" />
                  <div className="text-body-md">Nexus Biopharma Ltd.</div>
                </div>
                <div className="flex gap-2">
                  <Mail className="h-5 w-5 text-outline shrink-0 mt-0.5" />
                  <div className="text-body-sm">s.jenkins@nexusbio.com</div>
                </div>
                <div className="pt-4 border-t border-outline-variant">
                  <button className="text-secondary text-body-sm font-semibold hover:underline">
                    Edit Contact Details
                  </button>
                </div>
              </div>
            </div>

            {/* Final Action */}
            <div className="flex flex-col gap-2">
              <button
                className={`w-full py-4 rounded-lg text-headline-md transition-all shadow-sm ${
                  sendStatus === "sent"
                    ? "bg-green-600 text-white"
                    : sendStatus === "sending"
                      ? "bg-secondary-container text-on-secondary-container opacity-70"
                      : "bg-secondary-container text-on-secondary-container hover:brightness-110 active:scale-[0.98]"
                }`}
                onClick={handleSend}
                disabled={sendStatus !== "idle"}
              >
                {sendStatus === "idle" && "Send Request"}
                {sendStatus === "sending" && (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </span>
                )}
                {sendStatus === "sent" && (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Request Sent Successfully
                  </span>
                )}
              </button>
              <p className="text-body-sm text-center text-on-surface-variant px-4">
                Quotes are typically provided within 4-6 business hours by our
                verified suppliers.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
