import { getAllUsersAction } from "@/app/(dashboardGroup)/_actions/AdminActions/getAllUsersAction";
import { AdminUsersPageProps } from "@/lib/admin-user.type";
import UserSearchFilter from "./UserSearchFilter";
import UserManagementTable from "./UserManagementTable";

const AdminUsersList = async ({ searchParams }: AdminUsersPageProps) => {
  const params = await searchParams;

  const response = await getAllUsersAction({
    searchTerm: params.searchTerm,
    role: params.role,
    status: params.status,
    page: params.page,
    limit: params.limit ?? "10",
  });

  if (!response.success) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-xl font-semibold">Failed to load users</h2>

        <p className="text-muted-foreground mt-2">{response.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Management</h1>

        <p className="text-muted-foreground mt-2">
          Manage all platform users, search, filter and update their status.
        </p>
      </div>

      <UserSearchFilter />

      <UserManagementTable users={response.data} meta={response.meta} />
    </div>
  );
};

export default AdminUsersList;
