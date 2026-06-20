"use client";

// Dashboard Layout — Supplier Portal with side nav, top bar, and scrollable body
// Pixel-perfect match of the ChemTrade Pro dashboard HTML template

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FlaskConical,
  CirclePlus,
  Receipt,
  Search,
  Bell,
  HelpCircle,
  Settings,
  Download,
  Info,
  Factory,
  Truck,
  FileText,
  Upload,
  FileCheck,
  ShieldCheck,
  ClipboardCheck,
  ChevronDown,
} from "lucide-react";

const sideNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "My Chemicals", icon: FlaskConical, href: "/dashboard/chemicals" },
  { label: "Add Chemical", icon: CirclePlus, href: "/dashboard/chemicals/new" },
  { label: "Requests/Orders", icon: Receipt, href: "/dashboard" },
];

const footerNavItems = [
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Support", icon: HelpCircle, href: "#" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide the root marketing Navbar when inside dashboard
  useEffect(() => {
    const nav = document.getElementById("main-navbar");
    if (nav) nav.style.display = "none";
    const footer = document.getElementById("main-footer");
    if (footer) footer.style.display = "none";
    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* ── Side Navigation Bar ── */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant flex flex-col py-6 z-50">
        {/* Brand Header */}
        <div className="px-4 mb-10">
          <h1 className="text-headline-md font-bold text-primary">
            ChemTrade Pro
          </h1>
          <p className="text-on-surface-variant text-body-sm">Supplier Portal</p>
        </div>

        {/* Main Tabs */}
        <nav className="flex-1 px-2 space-y-1">
          {sideNavItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComp = item.icon;
            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 transition-colors active:scale-95",
                  isActive
                    ? "bg-secondary-container text-on-secondary-container font-semibold rounded-lg"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                )}
              >
                <IconComp className="h-5 w-5" />
                <span className="text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA + Footer */}
        <div className="px-2 pt-4 mt-auto border-t border-outline-variant">
          <button className="w-full mb-4 py-2 px-4 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity">
            Export Data
          </button>
          {footerNavItems.map((item) => {
            const IconComp = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95"
              >
                <IconComp className="h-5 w-5" />
                <span className="text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* ── Top Navigation Bar ── */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-surface-bright border-b border-outline-variant flex items-center justify-between px-10 z-40">
        <div className="flex items-center w-1/3">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant h-5 w-5" />
            <input
              className="w-full pl-10 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded text-sm focus:border-secondary focus:outline-none"
              placeholder="Search orders or products..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:text-secondary active:opacity-80 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-secondary active:opacity-80 transition-colors">
            <HelpCircle className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant ml-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVLtwvPda-cf5I4JX6GSpBqZDs13kwL5i2SYLyc-YYpuZ6CilKtO8EG2JnZvJGR6ierh26eArnQtuYJVHNPj_-10pyD7bSQl0gAqQud_4kLONoctUeS9lGbddSHJLgNbcpkrt2GNwFSBc0JKswVYKL1IJUiGyqVk04XFLgZtHE5fhjAE9hpGSUe2zreRLjoZ-t0cPwwG2YBQaMujQ7IE3hy2fNWes4EKgrVgPUhWELkyXFNBVZaj6n_DzCConM2kV8Cm0Kp3SVZoqv"
              alt="User avatar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* ── Main Content Canvas ── */}
      <main className="pl-64 pt-16 min-h-screen">
        {children}
      </main>
    </div>
  );
}
