import Link from "next/link";
import { FileX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RentalNotFound = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-lg border-dashed shadow-sm">
        <CardContent className="flex flex-col items-center py-12 text-center">
          <div className="mb-5 rounded-full bg-primary/10 p-5">
            <FileX className="h-10 w-10 text-primary" />
          </div>

          <h2 className="text-2xl font-bold">Rental Not Found</h2>

          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            The rental request you are looking for could not be found. It may
            have been removed, cancelled, or the link is invalid.
          </p>

          <Button asChild className="mt-6">
            <Link href="/tenant-dashboard/my-rentals">
              Back to My Rentals
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalNotFound;