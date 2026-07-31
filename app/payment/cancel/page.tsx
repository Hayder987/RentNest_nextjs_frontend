import PaymentCancel from "@/components/payment/PaymentCancel";

interface CancelPageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function CancelPage({
  searchParams,
}: CancelPageProps) {
  const { session_id } = await searchParams;

  return (
    <main className="container mx-auto px-4 py-16">
      <PaymentCancel session_id={session_id} />
    </main>
  );
}