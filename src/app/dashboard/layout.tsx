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
  Bell,
  HelpCircle,
  Settings,
  ChevronRight,
} from "lucide-react";

const sideNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "My Chemicals", icon: FlaskConical, href: "/dashboard/chemicals" },
  { label: "Add Chemical", icon: CirclePlus, href: "/dashboard/chemicals/new" },
  { label: "Requests/Orders", icon: Receipt, href: "/dashboard/orders" },
];

const footerNavItems = [
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Support", icon: HelpCircle, href: "#" },
];

/* Derive page title from pathname */
function getPageTitle(pathname: string): string {
  if (pathname === "/dashboard") return "Dashboard";
  if (pathname === "/dashboard/chemicals") return "My Chemicals";
  if (pathname === "/dashboard/chemicals/new") return "Add Chemical";
  if (pathname === "/dashboard/orders") return "Requests/Orders";
  return "Dashboard";
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

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
                  "flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out active:scale-95",
                  isActive
                    ? "bg-secondary-container text-on-secondary-container font-semibold rounded-lg"
                    : "text-on-surface-variant hover:bg-surface-container-high transition-colors"
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
          <button className="w-full mb-4 mx-2 py-2 px-4 bg-primary text-on-primary rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
            Export Data
          </button>
          {footerNavItems.map((item) => {
            const IconComp = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                <IconComp className="h-5 w-5" />
                <span className="text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* ── Top Navigation Bar ── */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-surface-bright border-b border-outline-variant flex items-center justify-between px-6 z-40">
        {/* Left: Page title */}
        <div className="flex items-center gap-4">
          <h2 className="text-headline-md font-bold text-primary">{pageTitle}</h2>
        </div>
        {/* Right: Notifications + User */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <button className="cursor-pointer hover:text-secondary transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="cursor-pointer hover:text-secondary transition-colors">
              <HelpCircle className="h-5 w-5" />
            </button>
          </div>
          <div className="h-8 w-px bg-outline-variant" />
          <div className="flex items-center gap-4 cursor-pointer active:opacity-80">
            <div className="text-right">
              <p className="text-label-md font-bold text-primary">Global Chem Ltd.</p>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                Supplier Tier 1
              </p>
            </div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHnJlmBdtMRBzwHdV5VtJppkgg2Bp9KhKgvGbOldGyajG0Iq5EXVGDGCD1NiEIJrjxVbXBFcfTbV0EMIJwxP9umrjovUxoBH8X-OLmfKfxF9L6AuD5hMceLQUdazq_Ni1GG8FZA12XhVWM0xqKMyYRhksX7lJDjzd7LjJm6x7C3_dn5Rk_-N8OjZsP7X0L86rZ1mTyTf7RVCEzEabOuHm8a3sJVzB-axyA57nYkiKuwhuU410rr8vbCrqFpJuYEk-o_2R8VUg_f1Zl"
              alt="User avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border border-outline-variant object-cover"
            />
          </div>
        </div>
      </header>

      {/* ── Main Content Canvas ── */}
      <main className="ml-64 pt-16 min-h-screen">{children}</main>
    </div>
  );
}
