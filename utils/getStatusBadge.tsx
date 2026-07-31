
import {CheckCircle2, Clock3, XCircle,} from "lucide-react";


import { Badge } from "@/components/ui/badge";
import { RentalStatus } from "@/lib/rental.type";

interface StatusBadgeProps {
  status: RentalStatus;
}

export const RentalStatusBadge = ({ status }: StatusBadgeProps) => {
    switch (status) {
      case "PENDING":
        return (
          <Badge
            variant="secondary"
            className="gap-1"
          >
            <Clock3 className="h-3 w-3" />
            Pending
          </Badge>
        );

      case "APPROVED":
        return (
          <Badge className="gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Approved
          </Badge>
        );

      case "REJECTED":
        return (
          <Badge
            variant="destructive"
            className="gap-1"
          >
            <XCircle className="h-3 w-3" />
            Rejected
          </Badge>
        );

      case "ACTIVE":
        return (
          <Badge className="gap-1">
            Active
          </Badge>
        );

      case "COMPLETED":
        return (
          <Badge
            variant="outline"
            className="gap-1"
          >
            Completed
          </Badge>
        );

      default:
        return null;
    }
  };