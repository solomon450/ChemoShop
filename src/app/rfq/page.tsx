// RFQ (Request for Quote) page

import { Container } from "@/components/layout/Container";

export default function RFQPage() {
  return (
    <Container size="md">
      <div className="py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Request a Quote</h1>
          <p className="text-muted-foreground mt-1">
            Submit a quote request to our supplier network
          </p>
        </div>

        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">
            RFQ form — ready for API integration
          </p>
        </div>
      </div>
    </Container>
  );
}
