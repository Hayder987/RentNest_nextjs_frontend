"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import {Check, X, Loader2, CircleCheckBig} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandlordRentalRequest } from "@/lib/landlord.rentalRequest.type";
import { RentalStatus } from "@/lib/rental.type";
import { updateRentalRequestStatusAction } from "@/app/(dashboardGroup)/_actions/LandLordActions/updateRentalRequestStatusAction";
import { RentalStatusBadge } from "@/utils/getStatusBadge";
import { updateActiveToCompletedAction } from "@/app/(dashboardGroup)/_actions/LandLordActions/updateActiveToCompletedAction";

interface RentalRequestActionsProps {
  rental: LandlordRentalRequest;
}

export default function RentalRequestActionsButton({
  rental,
}: RentalRequestActionsProps) {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = (status: RentalStatus) => {
    startTransition(async () => {
      const res = await updateRentalRequestStatusAction({
        id: rental.id,
        status,
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    });
  };

 const handleUpdateComplete = (status: RentalStatus) =>{
   startTransition(async () => {
      const res = await updateActiveToCompletedAction({
        id: rental.id,
        status,
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    }); 
 }

  // ACTIVE → Mark Complete button
  if (rental.status === "ACTIVE") {
    return (
      <Button
        size="sm"
        disabled={isPending}
        onClick={() => handleUpdateComplete("COMPLETED")}
      >
        {isPending ? (
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <CircleCheckBig className="mr-1 h-4 w-4" />
        )}
        Mark Complete
      </Button>
    );
  }

  // COMPLETED, REJECTED, APPROVED → Badge
  if (rental.status !== "PENDING") {
    return <RentalStatusBadge status={rental.status} />;
  }

  // PENDING → Approve & Reject buttons
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        disabled={isPending}
        onClick={() => handleUpdate("APPROVED")}
      >
        {isPending ? (
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <Check className="mr-1 h-4 w-4" />
        )}
        Approve
      </Button>

      <Button
        size="sm"
        variant="destructive"
        disabled={isPending}
        onClick={() => handleUpdate("REJECTED")}
      >
        {isPending ? (
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <X className="mr-1 h-4 w-4" />
        )}
        Reject
      </Button>
    </div>
  );
}