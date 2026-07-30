import { Card, CardContent, CardHeader } from "@/components/ui/card";

const DashBoardFromSkeleton = () => {
  return (
    <Card className="mx-auto max-w-4xl animate-pulse">
      <CardHeader>
        <div className="h-8 w-56 rounded-md bg-muted" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Image Upload */}
        <div className="space-y-2">
          <div className="h-4 w-32 rounded bg-muted" />
          <div className="flex h-56 items-center justify-center rounded-lg border-2 border-dashed bg-muted" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 w-20 rounded bg-muted" />
          <div className="h-10 rounded-md bg-muted" />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="h-10 rounded-md bg-muted" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-28 rounded bg-muted" />
          <div className="h-32 rounded-md bg-muted" />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="h-4 w-16 rounded bg-muted" />
          <div className="h-10 rounded-md bg-muted" />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="h-10 rounded-md bg-muted" />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded bg-muted" />
          <div className="h-4 w-24 rounded bg-muted" />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <div className="h-10 w-40 rounded-md bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashBoardFromSkeleton;
