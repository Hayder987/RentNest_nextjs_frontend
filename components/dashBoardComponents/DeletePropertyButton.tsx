"use client";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import ConfirmDialog from "./ConfirmDialog";
import { deletePropertyById } from "@/app/(dashboardGroup)/_actions/LandLordActions/deletePropertyById";
import { Button } from "../ui/button";
import { useState } from "react";

const DeletePropertyButton = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    await setLoading(true);
    await deletePropertyById({ id });
    setLoading(false);
    toast.info("Property Deleted SuccessFully!");
  };

  return (
    <ConfirmDialog
      title="Delete Post"
      description="Are you sure you want to delete this property? This action cannot be undone."
      confirmText="Delete"
      cancelText="Cancel"
      onConfirm={handleDelete}
      trigger={
        <Button
         disabled = {loading} 
        variant="destructive">
          {loading ? (
            "Deleting..."
          ) : (
            <>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </>
          )}
        </Button>
      }
    />
  );
};

export default DeletePropertyButton;
