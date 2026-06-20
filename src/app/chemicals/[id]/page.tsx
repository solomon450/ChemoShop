// Chemical detail page

import { Container } from "@/components/layout/Container";

interface ChemicalDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ChemicalDetailPage({ params }: ChemicalDetailPageProps) {
  const { id } = await params;

  return (
    <Container size="md">
      <div className="py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Chemical Detail</h1>
          <p className="text-muted-foreground mt-1">
            Viewing chemical ID: {id}
          </p>
        </div>

        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">
            Chemical detail view — ready for API integration
          </p>
        </div>
      </div>
    </Container>
  );
}
