import { getPaymentHistoryAction } from '@/app/(dashboardGroup)/_actions/TenantActions/getPaymentHistoryAction';
import PaymentHistoryClient from './PaymentHistoryClient';

const PaymentHistoryList = async() => {
     const paymentHistory = await getPaymentHistoryAction();
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payment History</h1>
        <p className="text-muted-foreground">
          View all your completed payments and leave reviews.
        </p>
      </div>

      <PaymentHistoryClient payments={paymentHistory} />
    </section>
  )
}

export default PaymentHistoryList