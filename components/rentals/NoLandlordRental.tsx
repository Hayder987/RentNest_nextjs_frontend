import { Inbox } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function NoLandlordRental() {
  return (
    <Card className="flex flex-col items-center justify-center py-20">
      <Inbox className="mb-4 h-14 w-14 text-muted-foreground" />

      <h2 className="text-xl font-semibold">
        No Rental Requests
      </h2>

      <p className="mt-2 max-w-md text-center text-muted-foreground">
        You {"haven't"} received any rental requests yet.
        Once tenants submit requests for your properties,
        {"they'll"} appear here.
      </p>
    </Card>
  );
}