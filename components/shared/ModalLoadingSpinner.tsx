import { LayoutList } from "lucide-react"
import { Spinner } from "../ui/spinner"


const ModalLoadingSpinner = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
        <LayoutList className="h-10 w-10 text-primary" />
          {/* Spinner */}
        <Spinner className="mb-5 h-9 w-9 text-primary" />

        {/* Brand Name */}
        <h1 className="text-xl font-bold tracking-tight">
          Loading...
        </h1>
    </div>
  )
}

export default ModalLoadingSpinner