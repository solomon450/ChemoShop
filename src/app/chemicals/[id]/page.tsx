"use client";

// Chemical Detail page — exact conversion of ChemTrade Pro product detail

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ZoomIn,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Award,
  Clock,
  FileText,
  Download,
  AlertTriangle,
  CheckCircle,
  Loader2,
} from "lucide-react";

/* ─────────────────── COMPONENT ─────────────────── */

export default function ChemicalDetailPage() {
  const [quoteStatus, setQuoteStatus] = useState<
    "idle" | "processing" | "sent"
  >("idle");

  const handleRequestQuote = () => {
    setQuoteStatus("processing");
    setTimeout(() => setQuoteStatus("sent"), 1200);
  };

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
      {/* ── Breadcrumbs ── */}
      <nav className="flex items-center gap-1 mb-6 text-on-surface-variant font-mono text-label-sm">
        <Link className="hover:text-secondary" href="/chemicals">
          Marketplace
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span>Solvents</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-on-surface">Ethanol 99.5%</span>
      </nav>

      {/* ── Page Title & Formula Section ── */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-headline-xl text-primary mb-1">
            Ethanol 99.5% (ACS Grade)
          </h1>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                Formula:
              </span>
              <span className="font-mono text-label-md font-bold">
                C<sub>2</sub>H<sub>6</sub>O
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                CAS:
              </span>
              <span className="font-mono text-label-md font-bold">
                64-17-5
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded text-label-sm font-mono border border-outline-variant">
            HAZARDOUS
          </span>
          <span className="bg-surface-container-highest text-on-surface px-2 py-1 rounded text-label-sm font-mono border border-outline-variant">
            ISO 9001
          </span>
        </div>
      </div>

      {/* ── Hero Bento Layout ── */}
      <div className="grid grid-cols-12 gap-4">
        {/* Product Image Section */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded p-6 flex items-center justify-center relative overflow-hidden h-[450px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiDqWOwCW8zbZ1Y7lPsOxXJf7jQTL13nCJOGIejyyfHwwGQUNgDG7Ay_r4fLVYnO8W3a4yssl798-gqIAMZGVwdnyK41IB8gQ_ZRy6dcyvMbCiHKqTkokn_ci3UhK0t0MpNXwlp55v9I6jL4Lu18uk3zJyBsu8EMqYtdnCPEZ35Lem-uDvsUaZyEdaDPCvptmJAnSXZdtBFvC9TwRVMBtiWH7_tj-hYD-cYLWtUt6bAD12SNv0ebxiuApQugnjw3RM0Grx3qlu1xmo"
            alt="Ethanol 99.5% ACS Grade industrial drum"
            width={600}
            height={400}
            className="max-h-full object-contain"
          />
          <div className="absolute bottom-6 right-6">
            <button className="bg-surface-container-high/80 backdrop-blur p-2 rounded border border-outline-variant flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
              <ZoomIn className="h-[18px] w-[18px]" />
              <span className="font-mono text-label-sm">View Details</span>
            </button>
          </div>
        </div>

        {/* Procurement Card */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-mono text-label-md text-on-surface-variant uppercase mb-4">
              Market Availability
            </h3>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-headline-lg text-primary">$1.20</span>
                <span className="text-body-md text-on-surface-variant">
                  / Liter
                </span>
              </div>
              <p className="text-secondary font-mono text-label-sm mt-1">
                In Stock - Ships from Houston, USA
              </p>
            </div>
            <div className="space-y-4 mb-10">
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">
                  Minimum Order
                </span>
                <span className="font-bold">200L (1 Drum)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Lead Time</span>
                <span className="font-bold">3-5 Business Days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">
                  Shipping Terms
                </span>
                <span className="font-bold">FOB Houston</span>
              </div>
            </div>
            <div className="space-y-2">
              <button
                className={`w-full py-4 rounded font-mono text-label-md font-bold uppercase tracking-wide transition-all ${
                  quoteStatus === "sent"
                    ? "bg-green-600 text-white"
                    : quoteStatus === "processing"
                      ? "bg-secondary text-white opacity-80"
                      : "bg-secondary text-white hover:opacity-90 active:scale-[0.99]"
                }`}
                onClick={handleRequestQuote}
                disabled={quoteStatus !== "idle"}
              >
                {quoteStatus === "idle" && "Request Quote"}
                {quoteStatus === "processing" && (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </span>
                )}
                {quoteStatus === "sent" && (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Quote Sent
                  </span>
                )}
              </button>
              <button className="w-full bg-white border border-secondary text-secondary py-4 rounded font-mono text-label-md font-bold uppercase tracking-wide hover:bg-surface-container-low transition-all">
                Sample Request
              </button>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 p-2 bg-surface-container-low rounded border border-outline-variant/50">
            <ShieldCheck className="h-5 w-5 text-secondary fill-secondary shrink-0" />
            <span className="font-mono text-label-sm text-on-surface-variant">
              Verified Buyer Protection &amp; Logistics Insurance Included
            </span>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <section className="bg-surface-container-lowest border border-outline-variant rounded">
            <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
              <h2 className="text-headline-md text-headline-md">
                Technical Specifications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-outline-variant/30">
                <table className="w-full text-left">
                  <tbody className="text-body-md">
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Purity
                      </th>
                      <td className="py-2 font-bold text-right">≥ 99.5%</td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Grade
                      </th>
                      <td className="py-2 font-bold text-right">
                        ACS Reagent
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Boiling Point
                      </th>
                      <td className="py-2 font-bold text-right">
                        78.37 °C
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6">
                <table className="w-full text-left">
                  <tbody className="text-body-md">
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Flash Point
                      </th>
                      <td className="py-2 font-bold text-right">
                        13 °C (Closed Cup)
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Density
                      </th>
                      <td className="py-2 font-bold text-right">
                        0.789 g/cm³ @ 20°C
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Moisture
                      </th>
                      <td className="py-2 font-bold text-right">≤ 0.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
            <h2 className="text-headline-md text-headline-md mb-4">
              Product Description
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Ethanol 99.5% (ACS Grade) is a high-purity solvent essential for
              analytical chemistry, pharmaceuticals, and precision
              manufacturing. This reagent-grade absolute alcohol meets or exceeds
              American Chemical Society (ACS) standards for purity and residue
              control. It is commonly utilized as a cleaning agent in
              semiconductor production, a medium for pharmaceutical synthesis,
              and a critical component in microbiological laboratories for
              sterilization and specimen preservation. The low moisture content
              ensures minimal interference in sensitive chemical reactions.
            </p>
          </section>
        </div>

        {/* Side Cards: Supplier & Documents */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          {/* Supplier Info */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
              <h3 className="font-mono text-label-md text-on-surface-variant uppercase">
                Supplier Information
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded flex items-center justify-center text-on-primary font-bold text-lg">
                  PC
                </div>
                <div>
                  <h4 className="text-headline-md text-headline-md leading-none">
                    PureChem Logistics
                  </h4>
                  <div className="flex items-center gap-1 mt-1">
                    <BadgeCheck className="h-4 w-4 text-secondary" />
                    <span className="font-mono text-label-sm text-on-surface-variant">
                      Verified Global Supplier
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-on-surface-variant shrink-0" />
                  <span className="text-body-md">
                    Houston, TX, United States
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-on-surface-variant shrink-0" />
                  <span className="text-body-md">
                    ISO 9001:2015 Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-on-surface-variant shrink-0" />
                  <span className="text-body-md">
                    On-time Delivery Rate: 98.4%
                  </span>
                </div>
              </div>
              <button className="w-full mt-10 py-2 border border-outline-variant rounded font-mono text-label-md hover:bg-surface-container-low transition-colors">
                View Supplier Profile
              </button>
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
              <h3 className="font-mono text-label-md text-on-surface-variant uppercase">
                Technical Documents
              </h3>
            </div>
            <div className="divide-y divide-outline-variant/30">
              <div className="p-4 flex items-center justify-between hover:bg-surface-container-bright cursor-pointer group">
                <div className="flex items-center gap-4">
                  <FileText className="h-5 w-5 text-destructive shrink-0" />
                  <span className="text-body-md">
                    Safety Data Sheet (SDS)
                  </span>
                </div>
                <Download className="h-5 w-5 text-on-surface-variant group-hover:translate-y-1 transition-transform" />
              </div>
              <div className="p-4 flex items-center justify-between hover:bg-surface-container-bright cursor-pointer group">
                <div className="flex items-center gap-4">
                  <FileText className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-body-md">
                    Technical Data Sheet (TDS)
                  </span>
                </div>
                <Download className="h-5 w-5 text-on-surface-variant group-hover:translate-y-1 transition-transform" />
              </div>
              <div className="p-4 flex items-center justify-between hover:bg-surface-container-bright cursor-pointer group">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="h-5 w-5 text-on-surface-variant shrink-0" />
                  <span className="text-body-md">
                    Certificate of Analysis (CoA)
                  </span>
                </div>
                <Download className="h-5 w-5 text-on-surface-variant group-hover:translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Safety / Regulatory Section ── */}
      <section className="mt-10 bg-error-container/30 border border-error-container rounded p-6">
        <div className="flex items-start gap-6">
          <div className="p-2 bg-destructive rounded shrink-0">
            <AlertTriangle className="h-5 w-5 text-white fill-white" />
          </div>
          <div>
            <h3 className="text-headline-md text-headline-md text-on-error-container mb-1">
              Regulatory &amp; Safety Information
            </h3>
            <p className="text-body-md text-on-error-container/80 mb-4">
              Ethanol is a highly flammable liquid and vapor. Keep away from
              heat, sparks, open flames, and hot surfaces. - No smoking. Keep
              container tightly closed.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="font-mono text-label-sm bg-error-container text-on-error-container px-2 py-1 rounded border border-destructive/20 uppercase">
                UN Number: 1170
              </span>
              <span className="font-mono text-label-sm bg-error-container text-on-error-container px-2 py-1 rounded border border-destructive/20 uppercase">
                Hazard Class: 3
              </span>
              <span className="font-mono text-label-sm bg-error-container text-on-error-container px-2 py-1 rounded border border-destructive/20 uppercase">
                Packing Group: II
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
