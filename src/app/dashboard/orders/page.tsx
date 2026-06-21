"use client";

// Dashboard Requests/Orders page — placeholder for supplier order management

import {
  Receipt,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Filter,
  Search,
} from "lucide-react";

/* ─────────────────── MOCK DATA ─────────────────── */

const orders = [
  {
    id: "RFQ-2024-001",
    chemical: "Ethanol 99.5%",
    buyer: "Merck Pharmaceuticals",
    quantity: "5,000 L",
    status: "Pending",
    statusColor: "text-amber-600",
    date: "Jun 18, 2024",
    value: "$12,500",
  },
  {
    id: "RFQ-2024-002",
    chemical: "Sulfuric Acid 98%",
    buyer: "BASF Industrial",
    quantity: "10 MT",
    status: "Quoted",
    statusColor: "text-blue-600",
    date: "Jun 17, 2024",
    value: "$8,200",
  },
  {
    id: "RFQ-2024-003",
    chemical: "Acetone ACS Grade",
    buyer: "Sigma-Aldrich Labs",
    quantity: "2,000 L",
    status: "Confirmed",
    statusColor: "text-green-600",
    date: "Jun 15, 2024",
    value: "$6,750",
  },
  {
    id: "RFQ-2024-004",
    chemical: "Methanol HPLC Grade",
    buyer: "Dow Chemical",
    quantity: "8,000 L",
    status: "Shipped",
    statusColor: "text-indigo-600",
    date: "Jun 12, 2024",
    value: "$15,400",
  },
  {
    id: "RFQ-2024-005",
    chemical: "Sodium Hydroxide Pellets",
    buyer: "Procter & Gamble",
    quantity: "20 MT",
    status: "Delivered",
    statusColor: "text-green-700",
    date: "Jun 10, 2024",
    value: "$22,000",
  },
  {
    id: "RFQ-2024-006",
    chemical: "Dichloromethane",
    buyer: "3M Corporation",
    quantity: "3,000 L",
    status: "Cancelled",
    statusColor: "text-red-500",
    date: "Jun 8, 2024",
    value: "$9,800",
  },
  {
    id: "RFQ-2024-007",
    chemical: "Isopropanol 99.9%",
    buyer: "Unilever Chemicals",
    quantity: "4,500 L",
    status: "Pending",
    statusColor: "text-amber-600",
    date: "Jun 20, 2024",
    value: "$11,250",
  },
];

const statusFilters = [
  "All",
  "Pending",
  "Quoted",
  "Confirmed",
  "Shipped",
  "Delivered",
  "Cancelled",
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function OrdersPage() {
  return (
    <div className="px-8 py-10 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-headline-xl text-primary">Requests / Orders</h2>
          <p className="text-on-surface-variant text-body-md mt-1">
            Track incoming RFQs, quotations, and active orders from buyers.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-surface-container-high px-3 py-1.5 rounded text-primary font-mono text-label-md border border-outline-variant">
            7 Orders
          </div>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {statusFilters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 text-body-sm font-medium border transition-colors ${
              filter === "All"
                ? "bg-secondary text-on-primary border-secondary"
                : "border-outline-variant text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Search + Actions Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex-1 min-w-[280px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline h-5 w-5" />
          <input
            className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary/20 outline-none transition-all"
            placeholder="Search by chemical, buyer, or RFQ ID..."
            type="text"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors">
          <Filter className="h-4 w-4" />
          More Filters
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-on-primary hover:opacity-90 transition-opacity font-semibold">
          <Receipt className="h-4 w-4" />
          Export
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-container-high border-b border-outline-variant">
                <th className="text-left px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  RFQ ID
                </th>
                <th className="text-left px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Chemical
                </th>
                <th className="text-left px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Buyer
                </th>
                <th className="text-left px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Quantity
                </th>
                <th className="text-left px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Value
                </th>
                <th className="text-left px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Date
                </th>
                <th className="text-right px-4 py-3 text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-outline-variant/50 hover:bg-surface-container-high transition-colors"
                >
                  <td className="px-4 py-4 font-mono text-label-md text-secondary">
                    {order.id}
                  </td>
                  <td className="px-4 py-4 text-body-md text-primary font-medium">
                    {order.chemical}
                  </td>
                  <td className="px-4 py-4 text-body-sm text-on-surface-variant">
                    {order.buyer}
                  </td>
                  <td className="px-4 py-4 text-body-sm text-on-surface">
                    {order.quantity}
                  </td>
                  <td className="px-4 py-4 font-mono text-label-md text-primary font-bold">
                    {order.value}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-medium ${order.statusColor} bg-surface-container-high`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          order.status === "Pending"
                            ? "bg-amber-500"
                            : order.status === "Quoted"
                              ? "bg-blue-500"
                              : order.status === "Confirmed"
                                ? "bg-green-500"
                                : order.status === "Shipped"
                                  ? "bg-indigo-500"
                                  : order.status === "Delivered"
                                    ? "bg-green-700"
                                    : "bg-red-500"
                        }`}
                      />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-body-sm text-on-surface-variant">
                    {order.date}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-secondary hover:underline text-body-sm font-medium">
                      View
                      <ArrowRight className="inline h-3.5 w-3.5 ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface-container-high border-t border-outline-variant">
          <p className="text-label-sm text-on-surface-variant">
            Showing 1–7 of 7 orders
          </p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-sm">
              &lsaquo;
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-secondary text-on-primary font-bold text-label-sm rounded-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-sm">
              &rsaquo;
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { label: "Pending RFQs", value: "2", icon: Clock, color: "text-amber-600" },
          { label: "Active Orders", value: "3", icon: Package, color: "text-blue-600" },
          { label: "Delivered", value: "1", icon: CheckCircle, color: "text-green-600" },
          { label: "Cancelled", value: "1", icon: XCircle, color: "text-red-500" },
        ].map((stat) => {
          const IconComp = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-surface-container-lowest border border-outline-variant p-4 flex items-center gap-4"
            >
              <IconComp className={`h-8 w-8 ${stat.color}`} />
              <div>
                <p className="text-label-sm text-on-surface-variant uppercase">
                  {stat.label}
                </p>
                <p className="text-headline-lg text-primary">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
