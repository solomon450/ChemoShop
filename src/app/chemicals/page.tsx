// Chemicals listing page

import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { Loader } from "@/components/shared/Loader";

export default function ChemicalsPage() {
  return (
    <Container>
      <div className="py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Chemicals</h1>
          <p className="text-muted-foreground mt-1">
            Browse and search our chemical catalog
          </p>
        </div>

        <Suspense fallback={<Loader variant="skeleton" />}>
          {/* ChemicalFilters and ChemicalTable will be wired here */}
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">
              Chemical listing — ready for API integration
            </p>
          </div>
        </Suspense>
      </div>
    </Container>
  );
}
