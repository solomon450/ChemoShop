"use client";

// Chemical Detail page — exact conversion of ChemTrade Pro product detail
// Data-driven: uses useParams to find chemical from mock data by ID

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
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
} from "lucide-react";
import { chemicals, getChemicalById } from "@/lib/mock-data";

/* ─────────────────── COMPONENT ─────────────────── */

export default function ChemicalDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const chem = getChemicalById(id);

  const router = useRouter();

  const handleRequestQuote = () => {
    router.push("/rfq");
  };

  const handleSampleRequest = () => {
    router.push("/rfq");
  };

  // 404 state
  if (!chem) {
    return (
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
        <nav className="flex items-center gap-1 mb-6 text-on-surface-variant font-mono text-label-sm">
          <Link className="hover:text-secondary" href="/chemicals">
            Marketplace
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-on-surface">Not Found</span>
        </nav>
        <div className="flex flex-col items-center justify-center py-20">
          <AlertTriangle className="h-12 w-12 text-on-surface-variant mb-4" />
          <h1 className="text-headline-lg text-primary mb-2">
            Chemical Not Found
          </h1>
          <p className="text-body-md text-on-surface-variant mb-6">
            The chemical you are looking for does not exist or has been removed.
          </p>
          <Link
            href="/chemicals"
            className="px-6 py-2 bg-secondary text-on-secondary rounded font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Marketplace
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
      {/* ── Breadcrumbs ── */}
      <nav className="flex items-center gap-1 mb-6 text-on-surface-variant font-mono text-label-sm">
        <Link className="hover:text-secondary" href="/chemicals">
          Marketplace
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span>{chem.category}</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-on-surface">{chem.name}</span>
      </nav>

      {/* ── Page Title & Formula Section ── */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-headline-xl text-primary mb-1">
            {chem.fullName}
          </h1>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                Formula:
              </span>
              <span
                className="font-mono text-label-md font-bold"
                dangerouslySetInnerHTML={{ __html: chem.formulaHtml }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-label-md text-on-surface-variant uppercase tracking-wider">
                CAS:
              </span>
              <span className="font-mono text-label-md font-bold">
                {chem.cas}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {chem.badges.map((badge) => (
            <span
              key={badge}
              className={`px-2 py-1 rounded text-label-sm font-mono border border-outline-variant ${
                badge === "HAZARDOUS"
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "bg-surface-container-highest text-on-surface"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero Bento Layout ── */}
      <div className="grid grid-cols-12 gap-4">
        {/* Product Image Section */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded p-6 flex items-center justify-center relative overflow-hidden h-[450px]">
          <Image
            src={chem.heroImage}
            alt={`${chem.name} industrial product`}
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
              {chem.price === "Request Quote" ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-headline-lg text-primary">
                    Request Quote
                  </span>
                </div>
              ) : (
                <div className="flex items-baseline gap-1">
                  <span className="text-headline-lg text-primary">
                    {chem.price}
                  </span>
                  <span className="text-body-md text-on-surface-variant">
                    / {chem.unit === "kg" ? "Kilogram" : "Liter"}
                  </span>
                </div>
              )}
              <p className="text-secondary font-mono text-label-sm mt-1">
                {chem.status === "Out of Stock"
                  ? `Out of Stock — Ships from ${chem.supplier.location}`
                  : `In Stock - Ships from ${chem.supplier.location}`}
              </p>
            </div>
            <div className="space-y-4 mb-10">
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">
                  Minimum Order
                </span>
                <span className="font-bold">{chem.minOrderQty}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Lead Time</span>
                <span className="font-bold">{chem.leadTime}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">
                  Shipping Terms
                </span>
                <span className="font-bold">{chem.shippingTerms}</span>
              </div>
            </div>
            <div className="space-y-2">
              <button
                className="w-full py-4 rounded font-mono text-label-md font-bold uppercase tracking-wide transition-all bg-secondary text-white hover:opacity-90 active:scale-[0.99]"
                onClick={handleRequestQuote}
              >
                Request Quote
              </button>
              <button
                className="w-full bg-white border border-secondary text-secondary py-4 rounded font-mono text-label-md font-bold uppercase tracking-wide hover:bg-surface-container-low transition-all"
                onClick={handleSampleRequest}
              >
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
                      <td className="py-2 font-bold text-right">
                        {chem.specs.purity}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Grade
                      </th>
                      <td className="py-2 font-bold text-right">
                        {chem.specs.grade}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Boiling Point
                      </th>
                      <td className="py-2 font-bold text-right">
                        {chem.specs.boilingPoint}
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
                        {chem.specs.flashPoint}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Density
                      </th>
                      <td className="py-2 font-bold text-right">
                        {chem.specs.density}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2 font-mono text-label-md text-on-surface-variant uppercase">
                        Moisture
                      </th>
                      <td className="py-2 font-bold text-right">
                        {chem.specs.moisture}
                      </td>
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
              {chem.description}
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
                  {chem.supplier.initials}
                </div>
                <div>
                  <h4 className="text-headline-md text-headline-md leading-none">
                    {chem.supplier.name}
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
                    {chem.supplier.fullAddress}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-on-surface-variant shrink-0" />
                  <span className="text-body-md">
                    {chem.supplier.certification}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-on-surface-variant shrink-0" />
                  <span className="text-body-md">
                    {chem.supplier.onTimeRate}
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
              {chem.regulatory.safetyNote}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="font-mono text-label-sm bg-error-container text-on-error-container px-2 py-1 rounded border border-destructive/20 uppercase">
                UN Number: {chem.regulatory.unNumber}
              </span>
              <span className="font-mono text-label-sm bg-error-container text-on-error-container px-2 py-1 rounded border border-destructive/20 uppercase">
                Hazard Class: {chem.regulatory.hazardClass}
              </span>
              <span className="font-mono text-label-sm bg-error-container text-on-error-container px-2 py-1 rounded border border-destructive/20 uppercase">
                Packing Group: {chem.regulatory.packingGroup}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Chemicals (back-link) ── */}
      <div className="mt-8 flex items-center justify-between">
        <Link
          href="/chemicals"
          className="text-secondary font-semibold text-body-md hover:underline flex items-center gap-2"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to Marketplace
        </Link>
        {/* Navigate to next/prev chemical */}
        <div className="flex gap-2">
          {(() => {
            const currentIndex = chemicals.findIndex((c) => c.id === chem.id);
            const prevChem = currentIndex > 0 ? chemicals[currentIndex - 1] : null;
            const nextChem =
              currentIndex < chemicals.length - 1
                ? chemicals[currentIndex + 1]
                : null;
            return (
              <>
                {prevChem && (
                  <Link
                    href={`/chemicals/${prevChem.id}`}
                    className="px-4 py-2 border border-outline-variant rounded text-body-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                  >
                    {prevChem.name}
                  </Link>
                )}
                {nextChem && (
                  <Link
                    href={`/chemicals/${nextChem.id}`}
                    className="px-4 py-2 border border-outline-variant rounded text-body-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"
                  >
                    {nextChem.name}
                  </Link>
                )}
              </>
            );
          })()}
        </div>
      </div>
    </main>
  );
}
