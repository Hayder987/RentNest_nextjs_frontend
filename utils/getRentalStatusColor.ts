import { RentalStatus } from "@/lib/rental.type";

export function getRentalStatusColor(status: RentalStatus) {
  switch (status) {
    case "PENDING":
      return "secondary";

    case "APPROVED":
      return "default";

    case "REJECTED":
      return "destructive";

    case "ACTIVE":
      return "default";

    case "COMPLETED":
      return "outline";

    default:
      return "secondary";
  }
};