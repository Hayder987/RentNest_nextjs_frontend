import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UserTableSkeleton() {
  return (
    <div className="space-y-6">
      {/* Search & Filter Skeleton */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Skeleton className="h-10 w-full lg:max-w-sm" />

        <div className="flex gap-3">
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-28" />
        </div>
      </div>

      {/* Table Skeleton */}

      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-11 w-11 rounded-full" />

                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <Skeleton className="h-4 w-52" />
                </TableCell>

                <TableCell>
                  <Skeleton className="h-6 w-24 rounded-full" />
                </TableCell>

                <TableCell>
                  <Skeleton className="h-6 w-24 rounded-full" />
                </TableCell>

                <TableCell>
                  <Skeleton className="h-4 w-28" />
                </TableCell>

                <TableCell>
                  <Skeleton className="ml-auto h-10 w-28" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Skeleton */}

      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-52" />

        <div className="flex gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-12" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}