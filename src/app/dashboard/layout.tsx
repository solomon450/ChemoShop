"use client";

// Dashboard Layout — Supplier Portal with side nav, top bar, and scrollable body
// Hides the root Navbar when on dashboard pages

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
  Settings,
  HelpCircle,
  LogOut,
  Plus,
  FileDown,
  ShieldCheck,
} from "lucide-react";

const sideNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "My Chemicals", icon: FlaskConical, href: "/dashboard/chemicals" },
  { label: "Add Chemical", icon: CirclePlus, href: "/dashboard/chemicals/new" },
  { label: "Requests/Orders", icon: Receipt, href: "/dashboard" },
];

const footerNavItems = [
  { label: "Help Center", icon: HelpCircle, href: "#" },
  { label: "Logout", icon: LogOut, href: "#" },
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
    <div className="flex h-screen overflow-hidden">
      {/* ── Side Navigation Bar ── */}
      <aside className="flex flex-col h-full border-r border-outline-variant py-6 bg-surface-container-lowest w-64 shrink-0 z-50">
        {/* Brand Header */}
        <div className="px-4 mb-10">
          <h1 className="text-headline-md font-bold text-primary">
            Supplier Portal
          </h1>
          <p className="font-mono text-label-sm text-on-surface-variant opacity-70">
            v2.4.0
          </p>
        </div>

        {/* Main Tabs */}
        <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
          {sideNavItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComp = item.icon;
            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 font-mono text-label-md transition-all cursor-pointer",
                  isActive
                    ? "text-secondary bg-secondary-fixed font-bold scale-[0.98] active:scale-95 transition-transform"
                    : "text-on-surface-variant hover:bg-surface-container"
                )}
              >
                <IconComp
                  className={cn(
                    "h-5 w-5",
                    isActive && "fill-secondary"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Section */}
        <div className="px-4 mt-6">
          <button className="w-full bg-primary text-on-primary py-2 px-4 font-mono text-label-md rounded border border-primary hover:opacity-90 transition-opacity">
            Upgrade Plan
          </button>
        </div>

        {/* Footer Tabs */}
        <div className="px-2 pt-6 mt-6 border-t border-outline-variant">
          {footerNavItems.map((item) => {
            const IconComp = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 font-mono text-label-md text-on-surface-variant hover:bg-surface-container transition-all cursor-pointer"
              >
                <IconComp className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </aside>

      {/* ── Main Content Area ── */}
      <main className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-4 flex-1">
            <span className="text-headline-md font-bold text-primary">
              ChemTrade Pro
            </span>
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-surface-container-low rounded-lg px-3 py-1.5 w-64 ml-6 border border-transparent focus-within:border-secondary transition-colors">
              <Search className="h-5 w-5 text-on-surface-variant shrink-0" />
              <input
                className="bg-transparent border-none focus:ring-0 focus:outline-none w-full placeholder:text-outline text-body-md"
                placeholder="Global search..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant mx-2" />
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-body-sm font-semibold leading-tight">
                  Acme Chemicals Ltd.
                </p>
                <p className="font-mono text-label-sm text-on-surface-variant">
                  Verified Supplier
                </p>
              </div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGxIXOnqBIKoZglKmluCYYe697e5D-nwr_XGc13fqj0Ggo-uWG1voQMM5TSGfG33WuLs7PplQhuA-lVYPJiOza0T075j3hBpFm9shAT9C8oyH2A1sLexGeyEwO75_j3u-jYHknS6dFXFEksDucZaJRL3jhArWuM5QZE9uud8bD8EeRxxVl3f04YCxCQ5ibk-F6FYDa2JQm9yKVeP40QmERmV3NgmJkyiIY5oiWWnUZiAr8DVPKCuUhHmH2X0MZBibWzgc6B8ptMjn9"
                alt="User avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border border-outline-variant object-cover"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-8">{children}</div>
      </main>
    </div>
  );
}
