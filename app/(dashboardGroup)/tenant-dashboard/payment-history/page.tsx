import PaymentHistoryList from '@/components/payment/PaymentHistoryList'
import PaymentHistorySkeleton from '@/components/payment/PaymentHistorySkeleton'
import React, { Suspense } from 'react'

const PaymentHistoryPage = () => {
  return (
    <div>
        <Suspense fallback={<PaymentHistorySkeleton/>}>
            <PaymentHistoryList/>
        </Suspense>
    </div>
  )
}

export default PaymentHistoryPage