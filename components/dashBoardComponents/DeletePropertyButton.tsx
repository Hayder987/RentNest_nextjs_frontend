"use client"

import { Trash2 } from "lucide-react"
import { toast } from "sonner";
import ConfirmDialog from "./ConfirmDialog";
import { deletePropertyById } from "@/app/(dashboardGroup)/_actions/LandLordActions/deletePropertyById";
import { Button } from "../ui/button";


const DeletePropertyButton = ({id} : {id:string}) => {

 const handleDelete = async () => {
    await deletePropertyById({id});
     toast.info("Property Deleted SuccessFully!")
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
          variant="destructive"
        >
          <Trash2 className="mr-2 h-4 w-4" />

          Delete
        </Button>
      }
    />
  );
}

export default DeletePropertyButton