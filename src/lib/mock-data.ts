// Comprehensive mock data for all chemicals across the platform
// Used by /chemicals, /chemicals/[id], / (homepage trending), /dashboard/chemicals

export interface MockChemical {
  id: string;
  name: string;
  fullName: string;
  cas: string;
  casDisplay: string;
  formula: string;
  formulaHtml: string;
  category: string;
  purity: string;
  grade: string;
  supplier: {
    name: string;
    initials: string;
    location: string;
    fullAddress: string;
    certification: string;
    onTimeRate: string;
    verified: boolean;
  };
  price: string;
  priceNumber: number;
  unit: string;
  minOrder: string;
  minOrderQty: string;
  stock: string;
  stockColor: string;
  status: string;
  statusClass: string;
  image: string;
  heroImage: string;
  leadTime: string;
  shippingTerms: string;
  specs: {
    purity: string;
    grade: string;
    boilingPoint: string;
    flashPoint: string;
    density: string;
    moisture: string;
  };
  description: string;
  regulatory: {
    unNumber: string;
    hazardClass: string;
    packingGroup: string;
    safetyNote: string;
  };
  badges: string[];
  supplierCount: number;
  trendingBadge: string | null;
}

export const chemicals: MockChemical[] = [
  {
    id: "ethanol-99-5",
    name: "Ethanol 99.5%",
    fullName: "Ethanol 99.5% (ACS Grade)",
    cas: "64-17-5",
    casDisplay: "CAS 64-17-5",
    formula: "C\u2082H\u2086O",
    formulaHtml: "C<sub>2</sub>H<sub>6</sub>O",
    category: "Industrial Solvents",
    purity: "99.5%",
    grade: "ACS Reagent",
    supplier: {
      name: "PureChem Logistics",
      initials: "PC",
      location: "Houston, USA",
      fullAddress: "Houston, TX, United States",
      certification: "ISO 9001:2015 Certified",
      onTimeRate: "On-time Delivery Rate: 98.4%",
      verified: true,
    },
    price: "$1.20",
    priceNumber: 1.2,
    unit: "L",
    minOrder: "Min. 200L",
    minOrderQty: "200L (1 Drum)",
    stock: "5,000 L",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB71P6k8SV7toXxqjhLPdESzGGPisbpS8bHwkDN-H1Zu9cHumURBwYxmBNOBM1CzetCfPobsDyQPwbhDfdy4gMigpquY7_6MpbmoFdk5W-ZW3Dn0SbJU5jkePGzGEvlTlpStQ0dgVtJNV5Bh0ZpMGTMgUrZelMoh6wKYPLjo1Q7ZDNzhBDHvbq5jpiiYaPXXt8xq86qnUfVXfLeuzfZQCSEopN-DML_qr5uTLuQDyu8v6Wahd6Y3W9pbjD7RxvKwBGEkkKS56Vwhbyz",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiDqWOwCW8zbZ1Y7lPsOxXJf7jQTL13nCJOGIejyyfHwwGQUNgDG7Ay_r4fLVYnO8W3a4yssl798-gqIAMZGVwdnyK41IB8gQ_ZRy6dcyvMbCiHKqTkokn_ci3UhK0t0MpNXwlp55v9I6jL4Lu18uk3zJyBsu8EMqYtdnCPEZ35Lem-uDvsUaZyEdaDPCvptmJAnSXZdtBFvC9TwRVMBtiWH7_tj-hYD-cYLWtUt6bAD12SNv0ebxiuApQugnjw3RM0Grx3qlu1xmo",
    leadTime: "3-5 Business Days",
    shippingTerms: "FOB Houston",
    specs: {
      purity: "\u2265 99.5%",
      grade: "ACS Reagent",
      boilingPoint: "78.37 \u00B0C",
      flashPoint: "13 \u00B0C (Closed Cup)",
      density: "0.789 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 0.5%",
    },
    description:
      "Ethanol 99.5% (ACS Grade) is a high-purity solvent essential for analytical chemistry, pharmaceuticals, and precision manufacturing. This reagent-grade absolute alcohol meets or exceeds American Chemical Society (ACS) standards for purity and residue control. It is commonly utilized as a cleaning agent in semiconductor production, a medium for pharmaceutical synthesis, and a critical component in microbiological laboratories for sterilization and specimen preservation. The low moisture content ensures minimal interference in sensitive chemical reactions.",
    regulatory: {
      unNumber: "1170",
      hazardClass: "3",
      packingGroup: "II",
      safetyNote:
        "Ethanol is a highly flammable liquid and vapor. Keep away from heat, sparks, open flames, and hot surfaces. No smoking. Keep container tightly closed.",
    },
    badges: ["HAZARDOUS", "ISO 9001"],
    supplierCount: 14,
    trendingBadge: "High Demand",
  },
  {
    id: "acetone",
    name: "Acetone",
    fullName: "Acetone (ACS Grade)",
    cas: "67-64-1",
    casDisplay: "CAS 67-64-1",
    formula: "C\u2083H\u2086O",
    formulaHtml: "C<sub>3</sub>H<sub>6</sub>O",
    category: "Industrial Solvents",
    purity: "98%",
    grade: "HPLC Grade",
    supplier: {
      name: "EuroSolv GmbH",
      initials: "ES",
      location: "Hamburg, DE",
      fullAddress: "Hamburg, Germany",
      certification: "ISO 14001 Certified",
      onTimeRate: "On-time Delivery Rate: 96.8%",
      verified: true,
    },
    price: "Request Quote",
    priceNumber: 0,
    unit: "L",
    minOrder: "Bulk Only",
    minOrderQty: "Bulk Only",
    stock: "1,250 L",
    stockColor: "text-primary",
    status: "Pending Review",
    statusClass: "bg-amber-50 text-amber-700 border-amber-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGOM3Y80QNeo6DVWNULwShEn6fpIqdZ-r5BGxPZlmoCWm6YUPWnA-nHcVZgeAzQAX7Tyze1nTbPg2EaoMHQ6ls1xtMTUaWIKlf868UY29tpaZU4ZMw4dX6Fy0nWUbd_affw45AWC_TjkFpHe81VFZb7pt9eadfBRbL0QaY_1WzNl82a1kMNGbUNdTWdCKFv5xNvkEZDkW7kkoi-i8V_Kaf5i6qO-umylyusTMzoVABGLkwNN4BZrr-XPB_6MJruK6CRyBoSyhxtPP-",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGOM3Y80QNeo6DVWNULwShEn6fpIqdZ-r5BGxPZlmoCWm6YUPWnA-nHcVZgeAzQAX7Tyze1nTbPg2EaoMHQ6ls1xtMTUaWIKlf868UY29tpaZU4ZMw4dX6Fy0nWUbd_affw45AWC_TjkFpHe81VFZb7pt9eadfBRbL0QaY_1WzNl82a1kMNGbUNdTWdCKFv5xNvkEZDkW7kkoi-i8V_Kaf5i6qO-umylyusTMzoVABGLkwNN4BZrr-XPB_6MJruK6CRyBoSyhxtPP-",
    leadTime: "5-7 Business Days",
    shippingTerms: "FOB Hamburg",
    specs: {
      purity: "\u2265 98.0%",
      grade: "HPLC Grade",
      boilingPoint: "56.05 \u00B0C",
      flashPoint: "-20 \u00B0C (Closed Cup)",
      density: "0.784 g/cm\u00B3 @ 25\u00B0C",
      moisture: "\u2264 0.3%",
    },
    description:
      "Acetone (HPLC Grade) is a volatile organic solvent widely used in chromatography, pharmaceutical manufacturing, and electronics cleaning. This high-performance liquid chromatography grade acetone ensures minimal background interference, making it ideal for analytical laboratories requiring ultra-low impurity levels. Its rapid evaporation rate makes it a preferred choice for precision degreasing and surface preparation in semiconductor fabrication.",
    regulatory: {
      unNumber: "1090",
      hazardClass: "3",
      packingGroup: "II",
      safetyNote:
        "Acetone is highly flammable. Vapors may cause drowsiness and dizziness. Keep away from ignition sources. Use in well-ventilated areas.",
    },
    badges: ["HAZARDOUS", "ISO 14001"],
    supplierCount: 18,
    trendingBadge: null,
  },
  {
    id: "isopropanol-ipa",
    name: "Isopropanol (IPA)",
    fullName: "Isopropanol 99.9% (Spectroscopic Grade)",
    cas: "67-63-0",
    casDisplay: "CAS 67-63-0",
    formula: "C\u2083H\u2088O",
    formulaHtml: "C<sub>3</sub>H<sub>8</sub>O",
    category: "Industrial Solvents",
    purity: "99.9%",
    grade: "Spectroscopic",
    supplier: {
      name: "Nippon Chem-Corp",
      initials: "NC",
      location: "Osaka, JP",
      fullAddress: "Osaka, Japan",
      certification: "ISO 17025 Accredited",
      onTimeRate: "On-time Delivery Rate: 99.1%",
      verified: true,
    },
    price: "$0.95",
    priceNumber: 0.95,
    unit: "L",
    minOrder: "Min. 1,000L",
    minOrderQty: "1,000L (IBC)",
    stock: "8,200 L",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbOrBqOszlwtOib9rNcqgOCe2RVdMbJQ8oEckPEDpCLL84YD6-dLPbTmaA6yXWaK9eHMXjuKbuwgz8EOEQAZ68271yCqQAmNI9dxb5DShL4kt6Q4wnk3IrisHrYAZMRfXLYDNXgWG-J9h0wcVqWlNQLtj6AKwugGDk5Wz_rQupcY4QcJe9FXOCarHq_NYuphQhTyVUStn_xQXPmtRUzDsYYWKa2sXjN15vVmxXzc2kaXvgb9AINiuZ6Xu5itpYa3-yvJdY_p2_QY9M",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbOrBqOszlwtOib9rNcqgOCe2RVdMbJQ8oEckPEDpCLL84YD6-dLPbTmaA6yXWaK9eHMXjuKbuwgz8EOEQAZ68271yCqQAmNI9dxb5DShL4kt6Q4wnk3IrisHrYAZMRfXLYDNXgWG-J9h0wcVqWlNQLtj6AKwugGDk5Wz_rQupcY4QcJe9FXOCarHq_NYuphQhTyVUStn_xQXPmtRUzDsYYWKa2sXjN15vVmxXzc2kaXvgb9AINiuZ6Xu5itpYa3-yvJdY_p2_QY9M",
    leadTime: "7-10 Business Days",
    shippingTerms: "CIF Osaka",
    specs: {
      purity: "\u2265 99.9%",
      grade: "Spectroscopic",
      boilingPoint: "82.6 \u00B0C",
      flashPoint: "12 \u00B0C (Closed Cup)",
      density: "0.781 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 0.05%",
    },
    description:
      "Isopropanol 99.9% (Spectroscopic Grade) is an ultra-high-purity solvent engineered for demanding spectroscopic applications, electronics cleaning, and pharmaceutical intermediate synthesis. Its extremely low moisture content and trace impurity profile make it suitable for FTIR, NMR, and UV-Vis spectroscopy where background noise must be minimized. This Japan-sourced reagent meets JIS and ACS spectroscopic purity standards.",
    regulatory: {
      unNumber: "1219",
      hazardClass: "3",
      packingGroup: "II",
      safetyNote:
        "Isopropanol is flammable. May cause eye and respiratory irritation. Handle with adequate ventilation and personal protective equipment.",
    },
    badges: ["ISO 17025"],
    supplierCount: 12,
    trendingBadge: null,
  },
  {
    id: "methanol",
    name: "Methanol",
    fullName: "Methanol 99.8% (Technical Grade)",
    cas: "67-56-1",
    casDisplay: "CAS 67-56-1",
    formula: "CH\u2083OH",
    formulaHtml: "CH<sub>3</sub>OH",
    category: "Industrial Solvents",
    purity: "99.8%",
    grade: "Technical",
    supplier: {
      name: "Apex Industrial",
      initials: "AI",
      location: "Chicago, USA",
      fullAddress: "Chicago, IL, United States",
      certification: "ISO 9001:2015 Certified",
      onTimeRate: "On-time Delivery Rate: 95.2%",
      verified: true,
    },
    price: "$0.82",
    priceNumber: 0.82,
    unit: "L",
    minOrder: "Min. 500L",
    minOrderQty: "500L (Drum)",
    stock: "12,000 L",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoIWh64tOKoZtQRR8eIeXg7Si3eQL0vLNSlmzw4cEu9LPmbQd8ihL2GqXbiDsvlFjpx0BPf2LTkamq0gn7_2SaS86QOREFvj0ZqLIM2d8Qm065JdsDv5PY_TXJNQa5r-5bPP-Qua61mg8vCNOvPTSxK59p_NoyuZES1CtN_KhUWfwLNdiJ8i-tRyl6Yqh6dZx0_oaUNjM8m8g7b5xgJKK23DVl_1geh36M6pE7iB7aB5__RB3UB6gOQgrBiwRp4mcdb2fEemnhKI9f",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoIWh64tOKoZtQRR8eIeXg7Si3eQL0vLNSlmzw4cEu9LPmbQd8ihL2GqXbiDsvlFjpx0BPf2LTkamq0gn7_2SaS86QOREFvj0ZqLIM2d8Qm065JdsDv5PY_TXJNQa5r-5bPP-Qua61mg8vCNOvPTSxK59p_NoyuZES1CtN_KhUWfwLNdiJ8i-tRyl6Yqh6dZx0_oaUNjM8m8g7b5xgJKK23DVl_1geh36M6pE7iB7aB5__RB3UB6gOQgrBiwRp4mcdb2fEemnhKI9f",
    leadTime: "3-5 Business Days",
    shippingTerms: "FOB Chicago",
    specs: {
      purity: "\u2265 99.8%",
      grade: "Technical Grade",
      boilingPoint: "64.7 \u00B0C",
      flashPoint: "11 \u00B0C (Closed Cup)",
      density: "0.791 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 0.1%",
    },
    description:
      "Methanol 99.8% (Technical Grade) is a versatile industrial solvent and chemical feedstock used in the production of formaldehyde, acetic acid, and methyl tertiary butyl ether (MTBE). This high-purity technical grade methanol is widely employed as an extraction solvent, denaturant, and cleaning agent in industrial processes. Its excellent solvency for polar and non-polar compounds makes it invaluable in petrochemical refining, biodiesel production, and pharmaceutical manufacturing.",
    regulatory: {
      unNumber: "1230",
      hazardClass: "3",
      packingGroup: "II",
      safetyNote:
        "Methanol is toxic if swallowed, inhaled, or absorbed through skin. Can cause blindness. Flammable liquid and vapor. Use only with appropriate PPE in ventilated areas.",
    },
    badges: ["HAZARDOUS", "ISO 9001"],
    supplierCount: 10,
    trendingBadge: null,
  },
  {
    id: "dichloromethane",
    name: "Dichloromethane",
    fullName: "Dichloromethane 99.5% (Reagent Grade)",
    cas: "75-09-2",
    casDisplay: "CAS 75-09-2",
    formula: "CH\u2082Cl\u2082",
    formulaHtml: "CH<sub>2</sub>Cl<sub>2</sub>",
    category: "Industrial Solvents",
    purity: "99.5%",
    grade: "Reagent",
    supplier: {
      name: "SynthGlobal Inc.",
      initials: "SG",
      location: "Toronto, CA",
      fullAddress: "Toronto, ON, Canada",
      certification: "ISO 9001:2015 Certified",
      onTimeRate: "On-time Delivery Rate: 97.6%",
      verified: true,
    },
    price: "$2.45",
    priceNumber: 2.45,
    unit: "kg",
    minOrder: "Min. 50kg",
    minOrderQty: "50kg",
    stock: "3,200 kg",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3rDUsCz3YiG1KzljUp5Lq5lRuzqmWurD7dGebVdM3aKdMDrLELgS8T8NQw-sxqZ2EG1wB9xRV0V6QmI-FNx46An7xpRRyVR8zyme-CCa5kcKwmQuKurJe540oNF7DdjLI_2g-GOSbFqGfvvLEusmfknTECeDIIi5xact74-tP2ki0It8IHaGKJ2NRgWHMUOsN0a3Mq-Zh06m_0cJM88pLubHIA-m9VIcV7TAHVtHMueygfWQktR8IPc0AUFA7BTGQH5aHR5Cy_7sS",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3rDUsCz3YiG1KzljUp5Lq5lRuzqmWurD7dGebVdM3aKdMDrLELgS8T8NQw-sxqZ2EG1wB9xRV0V6QmI-FNx46An7xpRRyVR8zyme-CCa5kcKwmQuKurJe540oNF7DdjLI_2g-GOSbFqGfvvLEusmfknTECeDIIi5xact74-tP2ki0It8IHaGKJ2NRgWHMUOsN0a3Mq-Zh06m_0cJM88pLubHIA-m9VIcV7TAHVtHMueygfWQktR8IPc0AUFA7BTGQH5aHR5Cy_7sS",
    leadTime: "5-7 Business Days",
    shippingTerms: "FOB Toronto",
    specs: {
      purity: "\u2265 99.5%",
      grade: "Reagent Grade",
      boilingPoint: "39.6 \u00B0C",
      flashPoint: "None (Non-flammable)",
      density: "1.327 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 0.2%",
    },
    description:
      "Dichloromethane 99.5% (Reagent Grade) is a highly volatile chlorinated solvent used extensively in paint stripping, pharmaceutical extraction, and chemical synthesis. Also known as methylene chloride, this reagent-grade solvent provides excellent solvency for a wide range of organic compounds while being non-flammable. It is commonly used in HPLC sample preparation, degreasing operations, and as a blowing agent in polymer foam production.",
    regulatory: {
      unNumber: "1593",
      hazardClass: "6.1",
      packingGroup: "III",
      safetyNote:
        "Dichloromethane is toxic by inhalation and may cause drowsiness, dizziness, and nausea. Suspected carcinogen. Use only in well-ventilated areas with appropriate respiratory protection.",
    },
    badges: ["HAZARDOUS", "ISO 9001"],
    supplierCount: 7,
    trendingBadge: null,
  },
  {
    id: "sulfuric-acid",
    name: "Sulfuric Acid 98%",
    fullName: "Sulfuric Acid 98% (Concentrated)",
    cas: "7664-93-9",
    casDisplay: "CAS 7664-93-9",
    formula: "H\u2082SO\u2084",
    formulaHtml: "H<sub>2</sub>SO<sub>4</sub>",
    category: "Laboratory Reagents",
    purity: "98%",
    grade: "Analytical Grade",
    supplier: {
      name: "ChemCore Industries",
      initials: "CC",
      location: "Rotterdam, NL",
      fullAddress: "Rotterdam, Netherlands",
      certification: "ISO 9001:2015 Certified",
      onTimeRate: "On-time Delivery Rate: 94.7%",
      verified: true,
    },
    price: "$0.45",
    priceNumber: 0.45,
    unit: "kg",
    minOrder: "Min. 500kg",
    minOrderQty: "500kg (IBC)",
    stock: "0 kg",
    stockColor: "text-destructive",
    status: "Out of Stock",
    statusClass: "bg-red-50 text-red-700 border-red-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeBQClygZZ-rjmU61A8N7C_QeMCWQnHAlqDzgq0X_QXceWFrz-d8bADpB5DP_utTXlx1z-itCpHT0NKtW1qaoXvmcY4jkQKtxYD-OIp3OuCjr1wvbWorVGjz0XWR6zKtVyTLM88XCqmGQeKD-8XRAVbgTt2UKO8WJVnqi4Ge3kPESHx9zuJ8A8S1MkChum2FBWA-XTv3gT7vdajBeDrpHP9XYVhaedXi_4B70Jf68pOMTr_AgQpUjoySzHSaEjlw3X-88-mlGdt2aU",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeBQClygZZ-rjmU61A8N7C_QeMCWQnHAlqDzgq0X_QXceWFrz-d8bADpB5DP_utTXlx1z-itCpHT0NKtW1qaoXvmcY4jkQKtxYD-OIp3OuCjr1wvbWorVGjz0XWR6zKtVyTLM88XCqmGQeKD-8XRAVbgTt2UKO8WJVnqi4Ge3kPESHx9zuJ8A8S1MkChum2FBWA-XTv3gT7vdajBeDrpHP9XYVhaedXi_4B70Jf68pOMTr_AgQpUjoySzHSaEjlw3X-88-mlGdt2aU",
    leadTime: "10-14 Business Days",
    shippingTerms: "FOB Rotterdam",
    specs: {
      purity: "\u2265 98.0%",
      grade: "Analytical Grade",
      boilingPoint: "337 \u00B0C (Decomposes)",
      flashPoint: "None",
      density: "1.84 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 2.0%",
    },
    description:
      "Sulfuric Acid 98% (Concentrated) is one of the most important industrial chemicals worldwide, serving as a cornerstone reagent in chemical manufacturing, metal processing, battery production, and wastewater treatment. This analytical grade concentrated acid meets strict purity requirements for laboratory and industrial applications. It is widely used in fertilizer production, petroleum refining, mineral processing, and as a catalyst in organic synthesis. Proper handling with full PPE is mandatory due to its extreme corrosivity.",
    regulatory: {
      unNumber: "1830",
      hazardClass: "8",
      packingGroup: "II",
      safetyNote:
        "Sulfuric acid is extremely corrosive and causes severe skin burns and eye damage. Reacts violently with water releasing heat. Always add acid to water, never water to acid. Use acid-resistant PPE.",
    },
    badges: ["HAZARDOUS", "ISO 9001"],
    supplierCount: 8,
    trendingBadge: null,
  },
  {
    id: "sodium-hydroxide",
    name: "Sodium Hydroxide",
    fullName: "Sodium Hydroxide Pellets (Industrial Grade)",
    cas: "1310-73-2",
    casDisplay: "CAS 1310-73-2",
    formula: "NaOH",
    formulaHtml: "NaOH",
    category: "Laboratory Reagents",
    purity: "97%",
    grade: "Industrial Pellets",
    supplier: {
      name: "Meridian Chemicals",
      initials: "MC",
      location: "Singapore",
      fullAddress: "Singapore, SG",
      certification: "ISO 9001:2015 Certified",
      onTimeRate: "On-time Delivery Rate: 99.3%",
      verified: true,
    },
    price: "$1.10",
    priceNumber: 1.1,
    unit: "kg",
    minOrder: "Min. 25kg",
    minOrderQty: "25kg (Bags)",
    stock: "450 kg",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYVHtBiIxUtwKr0jp8ltI3uLnYgqbQ9SB6_EiTXzu9_bXU3ah-gkreN4yJ9F0Wd_q-OcrL4K-qwMt0xy12Rufg-eZQb6HkwOhFYwVjIsoa5AS45qbQEbJsFHkyxuWSTn-1e31jbFcAkbtjZ5mmir-KXSoblSFojlOKV0Bh1G0dBl1eU5dOeV8I2UNIf4FEeJHF0L877tZu2OGel1Kj4MkIoIK-lhqBKSbqfZpyaFcMSwGaPYE5g__Bp2U5wMe7757XXVDpNKHm6mrX",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYVHtBiIxUtwKr0jp8ltI3uLnYgqbQ9SB6_EiTXzu9_bXU3ah-gkreN4yJ9F0Wd_q-OcrL4K-qwMt0xy12Rufg-eZQb6HkwOhFYwVjIsoa5AS45qbQEbJsFHkyxuWSTn-1e31jbFcAkbtjZ5mmir-KXSoblSFojlOKV0Bh1G0dBl1eU5dOeV8I2UNIf4FEeJHF0L877tZu2OGel1Kj4MkIoIK-lhqBKSbqfZpyaFcMSwGaPYE5g__Bp2U5wMe7757XXVDpNKHm6mrX",
    leadTime: "5-7 Business Days",
    shippingTerms: "CIF Singapore",
    specs: {
      purity: "\u2265 97.0%",
      grade: "Industrial Pellets",
      boilingPoint: "1,388 \u00B0C",
      flashPoint: "None",
      density: "2.13 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 0.5%",
    },
    description:
      "Sodium Hydroxide Pellets (Industrial Grade) are a versatile alkali used in chemical manufacturing, pulp and paper production, water treatment, soap making, and petroleum refining. These uniform pellets dissolve rapidly in water, releasing significant heat during dissolution. They are commonly employed in pH adjustment, metal cleaning, food processing, and as a precursor in the production of various sodium compounds. Available in 25kg bags for easy handling and storage.",
    regulatory: {
      unNumber: "1823",
      hazardClass: "8",
      packingGroup: "II",
      safetyNote:
        "Sodium hydroxide is corrosive and causes severe skin burns and eye damage. Always use chemical-resistant gloves and eye protection. Do not inhale dust.",
    },
    badges: ["HAZARDOUS", "ISO 9001"],
    supplierCount: 22,
    trendingBadge: null,
  },
  {
    id: "ammonium-nitrate",
    name: "Ammonium Nitrate",
    fullName: "Ammonium Nitrate (Technical Grade)",
    cas: "6484-52-2",
    casDisplay: "CAS 6484-52-2",
    formula: "NH\u2084NO\u2083",
    formulaHtml: "NH<sub>4</sub>NO<sub>3</sub>",
    category: "Agrochemicals",
    purity: "99.0%",
    grade: "Technical",
    supplier: {
      name: "AgroChem Nordic",
      initials: "AN",
      location: "Stockholm, SE",
      fullAddress: "Stockholm, Sweden",
      certification: "REACH Compliant",
      onTimeRate: "On-time Delivery Rate: 92.5%",
      verified: true,
    },
    price: "$0.35",
    priceNumber: 0.35,
    unit: "kg",
    minOrder: "Min. 10,000kg",
    minOrderQty: "10,000kg (Bulk)",
    stock: "25,000 kg",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASGjAJMFse5QBc-rsxwkp0XfIqjH7CzCnv_Y4JJuXSFmF5jHNTJfUBM06TE4qkAl3HRaDHWcqE9bssA21DkA4fF-YFWOQodfmlOGKcN4X7D1haLk0Ia9klleu_sI09CzfQdd5HaCpM6-62jDPzax8hTIEvhhIHfFeL5veLTDymEBORUasuuJUzJUZpMsxBMzMLZh8X1W4smV2-mPoQKqPHncdjVY-8sNWNelkPNof0lrfP-zwWYbzSbxTnw9TKqdVBE9hRKVBPWoBM",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASGjAJMFse5QBc-rsxwkp0XfIqjH7CzCnv_Y4JJuXSFmF5jHNTJfUBM06TE4qkAl3HRaDHWcqE9bssA21DkA4fF-YFWOQodfmlOGKcN4X7D1haLk0Ia9klleu_sI09CzfQdd5HaCpM6-62jDPzax8hTIEvhhIHfFeL5veLTDymEBORUasuuJUzJUZpMsxBMzMLZh8X1W4smV2-mPoQKqPHncdjVY-8sNWNelkPNof0lrfP-zwWYbzSbxTnw9TKqdVBE9hRKVBPWoBM",
    leadTime: "14-21 Business Days",
    shippingTerms: "FOB Stockholm",
    specs: {
      purity: "\u2265 99.0%",
      grade: "Technical Grade",
      boilingPoint: "210 \u00B0C (Decomposes)",
      flashPoint: "None",
      density: "1.73 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 0.3%",
    },
    description:
      "Ammonium Nitrate (Technical Grade) is a high-nitrogen fertilizer compound widely used in large-scale agricultural operations to boost crop yields. This prilled form provides excellent spreading characteristics and rapid soil dissolution. Beyond agriculture, ammonium nitrate serves as a key ingredient in mining explosives, cold packs, and as a nitrogen source in industrial chemical processes. Subject to strict regulatory controls and licensing requirements for transport and storage due to its oxidizing properties.",
    regulatory: {
      unNumber: "2067",
      hazardClass: "5.1",
      packingGroup: "III",
      safetyNote:
        "Ammonium nitrate is an oxidizer. May intensify fire. Can decompose explosively when contaminated or exposed to extreme heat. Store separately from combustible materials in cool, dry conditions.",
    },
    badges: ["HAZARDOUS", "REACH"],
    supplierCount: 5,
    trendingBadge: null,
  },
  {
    id: "potassium-permanganate",
    name: "Potassium Permanganate",
    fullName: "Potassium Permanganate (High Purity Crystal)",
    cas: "7722-64-7",
    casDisplay: "CAS 7722-64-7",
    formula: "KMnO\u2084",
    formulaHtml: "KMnO<sub>4</sub>",
    category: "Laboratory Reagents",
    purity: "99.3%",
    grade: "High Purity",
    supplier: {
      name: "AquaPurify Ltd.",
      initials: "AP",
      location: "London, UK",
      fullAddress: "London, United Kingdom",
      certification: "ISO 9001:2015 Certified",
      onTimeRate: "On-time Delivery Rate: 96.1%",
      verified: true,
    },
    price: "$3.80",
    priceNumber: 3.8,
    unit: "kg",
    minOrder: "Min. 100kg",
    minOrderQty: "100kg (Drums)",
    stock: "800 kg",
    stockColor: "text-primary",
    status: "Active",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB71P6k8SV7toXxqjhLPdESzGGPisbpS8bHwkDN-H1Zu9cHumURBwYxmBNOBM1CzetCfPobsDyQPwbhDfdy4gMigpquY7_6MpbmoFdk5W-ZW3Dn0SbJU5jkePGzGEvlTlpStQ0dgVtJNV5Bh0ZpMGTMgUrZelMoh6wKYPLjo1Q7ZDNzhBDHvbq5jpiiYaPXXt8xq86qnUfVXfLeuzfZQCSEopN-DML_qr5uTLuQDyu8v6Wahd6Y3W9pbjD7RxvKwBGEkkKS56Vwhbyz",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB71P6k8SV7toXxqjhLPdESzGGPisbpS8bHwkDN-H1Zu9cHumURBwYxmBNOBM1CzetCfPobsDyQPwbhDfdy4gMigpquY7_6MpbmoFdk5W-ZW3Dn0SbJU5jkePGzGEvlTlpStQ0dgVtJNV5Bh0ZpMGTMgUrZelMoh6wKYPLjo1Q7ZDNzhBDHvbq5jpiiYaPXXt8xq86qnUfVXfLeuzfZQCSEopN-DML_qr5uTLuQDyu8v6Wahd6Y3W9pbjD7RxvKwBGEkkKS56Vwhbyz",
    leadTime: "7-10 Business Days",
    shippingTerms: "FOB London",
    specs: {
      purity: "\u2265 99.3%",
      grade: "High Purity Crystal",
      boilingPoint: "240 \u00B0C (Decomposes)",
      flashPoint: "None",
      density: "2.703 g/cm\u00B3 @ 20\u00B0C",
      moisture: "\u2264 0.1%",
    },
    description:
      "Potassium Permanganate (High Purity Crystal) is a powerful oxidizing agent used extensively in water treatment, chemical synthesis, and environmental remediation. Its deep purple crystals dissolve readily in water to produce a characteristic violet solution. Applications include well and reservoir disinfection, industrial wastewater treatment, removal of hydrogen sulfide and iron from water supplies, and as a reagent in organic chemistry for oxidation reactions.",
    regulatory: {
      unNumber: "1496",
      hazardClass: "5.1",
      packingGroup: "II",
      safetyNote:
        "Potassium permanganate is a strong oxidizer. Contact with combustible materials may cause fire. Harmful if swallowed. Causes skin and eye irritation. Wear appropriate PPE.",
    },
    badges: ["HAZARDOUS", "ISO 9001"],
    supplierCount: 6,
    trendingBadge: null,
  },
];

// Helper: find chemical by ID
export function getChemicalById(id: string): MockChemical | undefined {
  return chemicals.find((c) => c.id === id);
}

// Helper: get chemicals for marketplace listing (first 5)
export function getMarketplaceChemicals(): MockChemical[] {
  return chemicals;
}

// Helper: get trending chemicals for homepage
export function getTrendingChemicals(): MockChemical[] {
  return chemicals.filter((c) => c.supplierCount > 0);
}
