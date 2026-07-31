import PaymentSuccess from "@/components/payment/PaymentSuccess";

interface SuccessPageProps {
  searchParams: Promise<{
    rentalId?: string;
    session_id?: string;
  }>;
}

export default async function SuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id } = await searchParams;

  return (
    <main className="container mx-auto px-4 py-16">
      <PaymentSuccess session_id={session_id} />
    </main>
  );
}