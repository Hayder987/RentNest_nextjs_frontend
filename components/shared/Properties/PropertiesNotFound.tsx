import { SearchX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PropertiesNotFound = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-lg border-dashed shadow-sm">
        <CardContent className="flex flex-col items-center py-12 text-center">
          <div className="mb-5 rounded-full bg-primary/10 p-5">
            <SearchX className="h-10 w-10 text-primary" />
          </div>

          <h2 className="text-2xl font-bold">No Properties Found</h2>

          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            We {"couldn't"} find any properties matching your search or filter
            criteria. Try changing the filters or browse all available
            properties.
          </p>

          <Button asChild className="mt-6">
            <Link href="/properties">View All Properties</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertiesNotFound;
