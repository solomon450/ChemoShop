"use client";

// Navbar — exact match of ChemTrade Pro top navigation

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Procurement", href: "/" },
  { label: "Marketplace", href: "/chemicals" },
  { label: "Inventory", href: "/rfq" },
  { label: "Logistics", href: "/dashboard" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-outline-variant w-full">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-[1440px] mx-auto">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-headline-md font-bold text-primary">
            ChemTrade Pro
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1 text-body-md"
                    : "text-on-surface-variant hover:text-secondary transition-colors text-body-md"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side: icons + buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded transition-all">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded transition-all">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
          <button className="hidden lg:block px-6 h-10 border border-secondary text-secondary font-bold hover:bg-surface-container-low transition-all">
            Sign In
          </button>
          <button className="px-6 h-10 bg-secondary text-on-primary font-bold hover:opacity-90 transition-all">
            Sell Chemicals
          </button>
        </div>
      </div>
    </nav>
  );
}
