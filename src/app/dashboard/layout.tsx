// Dashboard layout — wrapper for supplier dashboard pages

import { Container } from "@/components/layout/Container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your chemicals and quote requests
          </p>
        </div>
        {children}
      </div>
    </Container>
  );
}
