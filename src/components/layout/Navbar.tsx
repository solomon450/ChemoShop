"use client";

// Navbar — exact match of Selihom Gebeya top navigation

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Bell, ShoppingCart, X, Trash2, ArrowRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/components/providers/CartProvider";

const navLinks = [
  { label: "Procurement", href: "/" },
  { label: "Marketplace", href: "/chemicals" },
  { label: "Inventory", href: "/rfq" },
  { label: "Logistics", href: "/dashboard" },
] as const;

export function Navbar({ id }: { id?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount, items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, clearCart } =
    useCart();

  return (
    <nav id={id} className="sticky top-0 z-50 bg-surface border-b border-outline-variant w-full">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-[1440px] mx-auto">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-headline-md font-bold text-primary">
            Selihom Gebeya
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

            {/* Cart button with badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded transition-all relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-secondary text-on-primary text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 leading-none">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
          <button className="hidden lg:block px-6 h-10 border border-secondary text-secondary font-bold hover:bg-surface-container-low transition-all">
            Sign In
          </button>
          <Link href="/dashboard/chemicals/new" className="px-6 h-10 bg-secondary text-on-primary font-bold hover:opacity-90 transition-all">
            Sell Chemicals
          </Link>
        </div>
      </div>

      {/* ── Cart Dialog ── */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[9999] flex justify-end"
          onClick={() => setIsCartOpen(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Drawer */}
          <div
            className="relative w-full max-w-md bg-surface-container-lowest border-l border-outline-variant h-full flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5 text-secondary" />
                <h3 className="text-headline-md text-primary">
                  RFQ Cart
                </h3>
                <span className="bg-secondary-container text-on-secondary-container text-label-sm px-2 py-0.5 rounded-full font-bold">
                  {itemCount}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 hover:bg-surface-container-high rounded transition-colors"
              >
                <X className="h-5 w-5 text-on-surface-variant" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length > 0 ? (
                <div className="divide-y divide-outline-variant">
                  {items.map((item) => (
                    <div
                      key={item.chemical.id}
                      className="flex items-start gap-3 px-6 py-4 hover:bg-surface-container-low transition-colors"
                    >
                      <div className="w-12 h-12 border border-outline-variant rounded bg-surface shrink-0 overflow-hidden">
                        <Image
                          src={item.chemical.image}
                          alt={item.chemical.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-primary text-body-md truncate">
                          {item.chemical.name}
                        </p>
                        <p className="text-body-sm text-on-surface-variant truncate">
                          {item.chemical.casDisplay} &middot; {item.chemical.purity}
                        </p>
                      <div className="flex items-center justify-between mt-2">
                          <p className="font-mono text-label-md text-secondary font-bold">
                            {item.chemical.price === "Request Quote"
                              ? "Quote"
                              : `${item.chemical.price}/${item.chemical.unit}`}
                          </p>
                          <div className="flex items-center gap-2">
                            {/* Quantity controls */}
                            <div className="flex items-center border border-outline-variant rounded">
                              <button
                                onClick={() => updateQuantity(item.chemical.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-high disabled:opacity-30 transition-colors rounded-l"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <div className="w-10 h-7 flex items-center justify-center border-x border-outline-variant text-label-md font-medium">
                                {item.quantity}
                              </div>
                              <button
                                onClick={() => updateQuantity(item.chemical.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-high transition-colors rounded-r"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="text-[11px] text-on-surface-variant font-mono uppercase">
                              {item.chemical.unit}
                            </span>
                            <button
                              onClick={() => removeItem(item.chemical.id)}
                              className="p-1 text-on-surface-variant hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <ShoppingCart className="h-12 w-12 text-outline-variant mb-4" />
                  <p className="text-on-surface-variant text-body-md">
                    Your cart is empty
                  </p>
                  <p className="text-on-surface-variant text-body-sm mt-1">
                    Browse the marketplace to add chemicals to your RFQ.
                  </p>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {items.length > 0 && (
              <div className="px-6 py-4 border-t border-outline-variant space-y-3">
                <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
                  <span>{items.length} chemical{items.length !== 1 ? "s" : ""} in cart</span>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:underline text-body-sm font-medium"
                  >
                    Clear All
                  </button>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    router.push("/rfq");
                  }}
                  className="w-full py-3 bg-secondary text-on-primary font-bold text-body-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  View Detail
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
