"use client";

// Chemicals / Marketplace page — exact conversion of ChemTrade Pro search results

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, AlertTriangle, Info } from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const chemicals = [
  {
    name: "Ethanol 99.5%",
    cas: "CAS 64-17-5",
    formula: "C\u2082H\u2086O",
    purity: "99.5% ACS Grade",
    supplier: "PureChem Logistics",
    location: "Houston, USA",
    price: "$1.20 / L",
    minOrder: "Min. 200L",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB71P6k8SV7toXxqjhLPdESzGGPisbpS8bHwkDN-H1Zu9cHumURBwYxmBNOBM1CzetCfPobsDyQPwbhDfdy4gMigpquY7_6MpbmoFdk5W-ZW3Dn0SbJU5jkePGzGEvlTlpStQ0dgVtJNV5Bh0ZpMGTMgUrZelMoh6wKYPLjo1Q7ZDNzhBDHvbq5jpiiYaPXXt8xq86qnUfVXfLeuzfZQCSEopN-DML_qr5uTLuQDyu8v6Wahd6Y3W9pbjD7RxvKwBGEkkKS56Vwhbyz",
  },
  {
    name: "Acetone",
    cas: "CAS 67-64-1",
    formula: "C\u2083H\u2086O",
    purity: "98% HPLC Grade",
    supplier: "EuroSolv GmbH",
    location: "Hamburg, DE",
    price: "Request Quote",
    minOrder: "Bulk Only",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGOM3Y80QNeo6DVWNULwShEn6fpIqdZ-r5BGxPZlmoCWm6YUPWnA-nHcVZgeAzQAX7Tyze1nTbPg2EaoMHQ6ls1xtMTUaWIKlf868UY29tpaZU4ZMw4dX6Fy0nWUbd_affw45AWC_TjkFpHe81VFZb7pt9eadfBRbL0QaY_1WzNl82a1kMNGbUNdTWdCKFv5xNvkEZDkW7kkoi-i8V_Kaf5i6qO-umylyusTMzoVABGLkwNN4BZrr-XPB_6MJruK6CRyBoSyhxtPP-",
  },
  {
    name: "Isopropanol (IPA)",
    cas: "CAS 67-63-0",
    formula: "C\u2083H\u2088O",
    purity: "99.9% Spectroscopic",
    supplier: "Nippon Chem-Corp",
    location: "Osaka, JP",
    price: "$0.95 / L",
    minOrder: "Min. 1,000L",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbOrBqOszlwtOib9rNcqgOCe2RVdMbJQ8oEckPEDpCLL84YD6-dLPbTmaA6yXWaK9eHMXjuKbuwgz8EOEQAZ68271yCqQAmNI9dxb5DShL4kt6Q4wnk3IrisHrYAZMRfXLYDNXgWG-J9h0wcVqWlNQLtj6AKwugGDk5Wz_rQupcY4QcJe9FXOCarHq_NYuphQhTyVUStn_xQXPmtRUzDsYYWKa2sXjN15vVmxXzc2kaXvgb9AINiuZ6Xu5itpYa3-yvJdY_p2_QY9M",
  },
  {
    name: "Methanol",
    cas: "CAS 67-56-1",
    formula: "CH\u2083OH",
    purity: "99.8% Technical",
    supplier: "Apex Industrial",
    location: "Chicago, USA",
    price: "$0.82 / L",
    minOrder: "Min. 500L",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoIWh64tOKoZtQRR8eIeXg7Si3eQL0vLNSlmzw4cEu9LPmbQd8ihL2GqXbiDsvlFjpx0BPf2LTkamq0gn7_2SaS86QOREFvj0ZqLIM2d8Qm065JdsDv5PY_TXJNQa5r-5bPP-Qua61mg8vCNOvPTSxK59p_NoyuZES1CtN_KhUWfwLNdiJ8i-tRyl6Yqh6dZx0_oaUNjM8m8g7b5xgJKK23DVl_1geh36M6pE7iB7aB5__RB3UB6gOQgrBiwRp4mcdb2fEemnhKI9f",
  },
  {
    name: "Dichloromethane",
    cas: "CAS 75-09-2",
    formula: "CH\u2082Cl\u2082",
    purity: "99.5% Reagent",
    supplier: "SynthGlobal Inc.",
    location: "Toronto, CA",
    price: "$2.45 / kg",
    minOrder: "Min. 50kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3rDUsCz3YiG1KzljUp5Lq5lRuzqmWurD7dGebVdM3aKdMDrLELgS8T8NQw-sxqZ2EG1wB9xRV0V6QmI-FNx46An7xpRRyVR8zyme-CCa5kcKwmQuKurJe540oNF7DdjLI_2g-GOSbFqGfvvLEusmfknTECeDIIi5xact74-tP2ki0It8IHaGKJ2NRgWHMUOsN0a3Mq-Zh06m_0cJM88pLubHIA-m9VIcV7TAHVtHMueygfWQktR8IPc0AUFA7BTGQH5aHR5Cy_7sS",
  },
];

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
            1,248 verified chemical listings found matching your criteria.
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
                      key={chem.name}
                      className="transition-colors hover:bg-surface-container-low cursor-pointer"
                    >
                      {/* Product */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-4">
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
                            <div className="font-semibold text-primary">
                              {chem.name}
                            </div>
                            <div className="text-body-sm text-on-surface-variant">
                              {chem.cas}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Formula */}
                      <td className="px-4 py-4 font-mono text-label-md">
                        {chem.formula}
                      </td>

                      {/* Purity */}
                      <td className="px-4 py-4">
                        <span className="bg-surface-container-high px-2 py-0.5 rounded text-body-sm">
                          {chem.purity}
                        </span>
                      </td>

                      {/* Supplier */}
                      <td className="px-4 py-4">
                        <div className="text-on-surface">{chem.supplier}</div>
                        <div className="text-body-sm text-on-surface-variant">
                          {chem.location}
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-4 py-4">
                        <div className="font-bold text-secondary">
                          {chem.price}
                        </div>
                        <div className="text-body-sm text-on-surface-variant">
                          {chem.minOrder}
                        </div>
                      </td>

                      {/* Action */}
                      <td className="px-4 py-4 text-right">
                        <button className="px-4 py-1.5 border border-secondary text-secondary rounded hover:bg-secondary hover:text-on-secondary transition-all text-body-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Pagination ── */}
            <div className="p-4 flex items-center justify-between border-t border-outline-variant bg-surface-container-low">
              <span className="text-body-sm text-on-surface-variant">
                Showing 1-10 of 1,248 results
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
                <span className="w-8 h-8 flex items-center justify-center text-body-sm">
                  ...
                </span>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-high text-body-sm">
                  125
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
