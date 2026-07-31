interface ProfileInfoItemProps {
  label: string;
  value: string;
}

export default function ProfileInfoItem({
  label,
  value,
}: ProfileInfoItemProps) {
  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 font-medium break-all">
        {value}
      </p>
    </div>
  );
}