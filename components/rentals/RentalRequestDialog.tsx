"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Home, Loader2 } from "lucide-react";

// import { createRentalRequestAction } from "@/app/(dashboardGroup)/_actions/rental/createRentalRequestAction";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createRentalRequestAction } from "@/app/(dashboardGroup)/_actions/TenantActions/createRentalRequestAction";

interface RentalRequestDialogProps {
  propertyId: string;
  propertyTitle: string;
}

export default function RentalRequestDialog({
  propertyId,
  propertyTitle,
}: RentalRequestDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const res = await createRentalRequestAction({
        propertyId,
      });

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);

      setOpen(false);

      router.refresh();
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          Request Rental
        </Button>
      </DialogTrigger>

      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            Confirm Rental Request
          </DialogTitle>

          <DialogDescription>
            {"You're"} about to send a rental request for this property.
          </DialogDescription>

        </DialogHeader>

        <div className="rounded-lg border p-4">

          <div className="flex items-center gap-3">

            <Home className="h-5 w-5 text-primary" />

            <div>

              <p className="font-medium">
                {propertyTitle}
              </p>

              <p className="text-sm text-muted-foreground">
                A request will be sent to the landlord.
              </p>

            </div>

          </div>

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isPending}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}

            {isPending
              ? "Submitting..."
              : "Confirm Request"}
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}