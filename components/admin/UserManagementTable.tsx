import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AdminUser, AdminUsersMeta } from "@/lib/admin-user.type";
import UserTableEmpty from "./UserTableEmpty";
import UserStatusSelect from "./UserStatusSelect";
import UserPagination from "./UserPagination";

interface UserManagementTableProps {
  users: AdminUser[];
  meta: AdminUsersMeta;
}

export default function UserManagementTable({
  users,
  meta,
}: UserManagementTableProps) {
  if (!users.length) {
    return <UserTableEmpty />;
  }

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>

              <TableHead>Email</TableHead>

              <TableHead>Role</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Joined</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11">
                      <AvatarImage src={user.profilePhoto} />

                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium">{user.name}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      user.status === "ACTIVE" ? "default" : "destructive"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>

                <TableCell className="text-right">
                  <UserStatusSelect user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <UserPagination meta={meta} />
    </div>
  );
}
