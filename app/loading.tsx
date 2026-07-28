import { Spinner } from "@/components/ui/spinner";

interface GlobalLoadingProps {
  text?: string;
  className?: string;
}

const GlobalLoading = ({
  text = "Loading...",
  className = "",
}: GlobalLoadingProps) => {
  return (
    <div
      className={`flex min-h-75 w-full flex-col items-center justify-center gap-4 ${className}`}
    >
      <Spinner className="size-8 text-primary" />

      <p className="text-sm text-muted-foreground">
        {text}
      </p>
    </div>
  );
};

export default GlobalLoading;