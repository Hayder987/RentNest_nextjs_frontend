"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AdminUser } from "@/lib/admin-user.type";
import { updateUserStatusAction } from "@/app/(dashboardGroup)/_actions/AdminActions/updateUserStatusAction";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Props {
  user: AdminUser;
}

export default function UserStatusSelect({ user }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState(user.status);

  const handleUpdate = () => {
    startTransition(async () => {
      const result = await updateUserStatusAction({
        id: user.id,
        status,
      });

      if (result.success) {
        toast.success(result.message);

        router.refresh();
      } else {
        toast.error(result.message);
      }

      setOpen(false);
    });
  };

  return (
    <>
      <Select
        value={status}
        onValueChange={(value) => {
          if (value === user.status) return;

          setStatus(value as "ACTIVE" | "BLOCKED");
          setOpen(true);
        }}
      >
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ACTIVE">Active</SelectItem>

          <SelectItem value="BLOCKED">Blocked</SelectItem>
        </SelectContent>
      </Select>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Update User Status</AlertDialogTitle>

            <AlertDialogDescription>
              Are you sure you want to change <strong>{user.name}</strong>s
              status to <strong>{status}</strong>?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>

            <AlertDialogAction asChild>
              <Button disabled={isPending} onClick={handleUpdate}>
                {isPending ? "Updating..." : "Confirm"}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
