"use client";

// Home page — landing page for ChemPortal

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, FileText, LayoutDashboard, ArrowRight } from "lucide-react";
import { APP_NAME, NAV_ITEMS } from "@/lib/constants";

const features = [
  {
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    title: "Chemical Catalog",
    description:
      "Browse our comprehensive database of industrial and laboratory chemicals with detailed specifications, pricing, and availability.",
    href: "/chemicals",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Request Quotes",
    description:
      "Submit RFQs to our network of verified suppliers and receive competitive quotes directly through the platform.",
    href: "/rfq",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: "Supplier Dashboard",
    description:
      "Manage your chemical inventory, track quote requests, and handle orders all from one centralized dashboard.",
    href: "/dashboard",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/30">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Your Chemical Supply Chain,{" "}
              <span className="text-primary">Simplified</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              {APP_NAME} connects buyers with verified chemical suppliers.
              Browse chemicals, request quotes, and manage orders — all in one
              platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href={NAV_ITEMS[1].href}>
                <Button size="lg">
                  Browse Chemicals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={NAV_ITEMS[2].href}>
                <Button size="lg" variant="outline">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Everything You Need</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              A complete platform for chemical procurement and management
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Link key={feature.href} href={feature.href}>
                <Card className="h-full transition-shadow hover:shadow-lg hover:border-primary/20">
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="border-t bg-muted/30 py-16">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Built With Modern Tech</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Query", "React Hook Form"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border bg-background text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
