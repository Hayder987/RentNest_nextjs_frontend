import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const RentalRequestsTableSkeleton = () => {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <Skeleton className="h-7 w-56" />
        <Skeleton className="h-4 w-80" />
      </CardHeader>

      <CardContent>
        <Table>

          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => (
              <TableRow key={index}>
                {/* Property */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-14 w-20 rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-3 w-28" />
                    </div>
                  </div>
                </TableCell>

                {/* Tenant */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-40" />
                    </div>
                  </div>
                </TableCell>

                {/* Move In */}
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>

                {/* Rent */}
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Skeleton className="h-7 w-24 rounded-full" />
                </TableCell>

                {/* Action */}
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Skeleton className="h-9 w-20 rounded-md" />
                    <Skeleton className="h-9 w-9 rounded-md" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RentalRequestsTableSkeleton;