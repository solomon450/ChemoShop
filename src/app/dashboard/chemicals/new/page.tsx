"use client";

// Dashboard Add Chemical page — pixel-perfect conversion of the New Chemical Listing form
// Includes file upload micro-interactions and form state management

import { useState, useRef } from "react";
import {
  Info,
  Factory,
  Truck,
  FileText,
  Upload,
  ClipboardCheck,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

/* ─────────────────── FILE UPLOAD COMPONENT ─────────────────── */

interface FileUploadBoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FileUploadBox({ title, description, icon }: FileUploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer group ${
        selectedFile
          ? "border-secondary bg-secondary-container/10"
          : "border-outline-variant hover:border-secondary"
      }`}
    >
      <span
        className={`inline-block text-3xl mb-1 ${
          selectedFile
            ? "text-secondary"
            : "text-on-surface-variant group-hover:text-secondary"
        }`}
      >
        {icon}
      </span>
      <p className="text-label-md font-bold mb-1">{title}</p>
      <p
        className={`text-xs ${
          selectedFile
            ? "text-secondary font-semibold"
            : "text-on-surface-variant"
        }`}
      >
        {selectedFile ? `Selected: ${selectedFile}` : description}
      </p>
      <input ref={inputRef} className="hidden" type="file" onChange={handleChange} />
    </div>
  );
}

/* ─────────────────── MAIN PAGE ─────────────────── */

export default function AddChemicalPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Listing saved successfully (Simulation)");
  };

  return (
    <div className="max-w-[1000px] mx-auto px-10 pb-10">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-headline-lg text-primary">New Chemical Listing</h2>
        <p className="text-on-surface-variant text-body-md mt-1">
          Register a new chemical product to the global marketplace. Ensure
          technical precision.
        </p>
      </div>

      {/* Form Container */}
      <form className="space-y-4" id="add-chemical-form" onSubmit={handleSubmit}>
        {/* Section 1: Basic Information */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5 text-secondary" />
            <h3 className="text-headline-md">Basic Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-label-md font-semibold mb-1">
                Chemical Name
              </label>
              <input
                className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary transition-all focus:outline-none"
                placeholder="e.g., Ethanol 99.5%"
                type="text"
              />
            </div>
            <div>
              <label className="block text-label-md font-semibold mb-1">
                Category
              </label>
              <div className="relative">
                <select className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary appearance-none transition-all focus:outline-none pr-10">
                  <option>Select Category</option>
                  <option>Organic Chemicals</option>
                  <option>Inorganic Chemicals</option>
                  <option>Specialty Chemicals</option>
                  <option>Polymers &amp; Plastics</option>
                  <option>Solvents</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-label-md font-semibold mb-1">
                Chemical Formula
              </label>
              <input
                className="w-full border border-outline-variant rounded px-4 py-2 text-label-md bg-surface-container-low focus:border-secondary transition-all focus:outline-none"
                placeholder="e.g., C2H6O"
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Technical Specifications */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
          <div className="flex items-center gap-2 mb-4">
            <Factory className="h-5 w-5 text-secondary" />
            <h3 className="text-headline-md">Technical Specifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-label-md font-semibold mb-1">
                Purity (%)
              </label>
              <input
                className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary focus:outline-none"
                placeholder="99.9"
                step="0.1"
                type="number"
              />
            </div>
            <div>
              <label className="block text-label-md font-semibold mb-1">
                CAS Number
              </label>
              <input
                className="w-full border border-outline-variant rounded px-4 py-2 text-label-md focus:border-secondary focus:outline-none"
                placeholder="e.g., 64-17-5"
                type="text"
              />
            </div>
            <div>
              <label className="block text-label-md font-semibold mb-1">
                Grade
              </label>
              <select className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary focus:outline-none">
                <option>Analytical Grade</option>
                <option>Technical Grade</option>
                <option>USP Grade</option>
                <option>Laboratory Grade</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing & Logistics */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="h-5 w-5 text-secondary" />
            <h3 className="text-headline-md">Pricing &amp; Logistics</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-label-md font-semibold mb-1">
                Price per Unit (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-label-md">
                  $
                </span>
                <input
                  className="w-full pl-8 pr-4 py-2 border border-outline-variant rounded text-body-md focus:border-secondary focus:outline-none"
                  placeholder="0.00"
                  type="number"
                />
              </div>
            </div>
            <div>
              <label className="block text-label-md font-semibold mb-1">
                Unit Type
              </label>
              <select className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary focus:outline-none">
                <option>Liters</option>
                <option>Tons</option>
                <option>Kilograms (kg)</option>
                <option>Gallons</option>
              </select>
            </div>
            <div>
              <label className="block text-label-md font-semibold mb-1">
                Min. Order Qty (MOQ)
              </label>
              <input
                className="w-full border border-outline-variant rounded px-4 py-2 text-body-md focus:border-secondary focus:outline-none"
                placeholder="100"
                type="number"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Detailed Description */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-secondary" />
            <h3 className="text-headline-md">Detailed Description</h3>
          </div>
          <div>
            <label className="block text-label-md font-semibold mb-1">
              Product Usage &amp; Safety Overview
            </label>
            <textarea
              className="w-full border border-outline-variant rounded px-4 py-4 text-body-md focus:border-secondary resize-none focus:outline-none"
              placeholder="Provide detailed information regarding the chemical's intended use, handling precautions, and storage requirements..."
              rows={6}
            />
          </div>
        </section>

        {/* Section 5: Technical Documents */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-6">
          <div className="flex items-center gap-2 mb-4">
            <Upload className="h-5 w-5 text-secondary" />
            <h3 className="text-headline-md">Technical Documents</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* SDS Upload */}
            <FileUploadBox
              title="SDS Upload"
              description="Safety Data Sheet (PDF)"
              icon={<FileText className="h-8 w-8" />}
            />
            {/* TDS Upload */}
            <FileUploadBox
              title="TDS Upload"
              description="Technical Data Sheet (PDF)"
              icon={<ClipboardCheck className="h-8 w-8" />}
            />
            {/* CoA Upload */}
            <FileUploadBox
              title="CoA Upload"
              description="Certificate of Analysis (PDF)"
              icon={<ShieldCheck className="h-8 w-8" />}
            />
          </div>
        </section>

        {/* Action Footer */}
        <div className="flex items-center justify-end gap-4 pt-6">
          <button
            className="px-6 py-2 border border-primary text-primary font-semibold rounded hover:bg-surface-container-high transition-all active:scale-95"
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-10 py-2 bg-secondary text-on-secondary font-semibold rounded hover:opacity-90 shadow-sm transition-all active:scale-95"
            type="submit"
          >
            Save Listing
          </button>
        </div>
      </form>

      {/* Atmospheric Visual Element (Industrial) */}
      <div className="fixed bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none -z-10 overflow-hidden">
        <div className="w-full h-full border-[20px] border-secondary-container rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}
