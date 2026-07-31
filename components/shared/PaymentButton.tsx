"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { paymentAction } from "@/app/(dashboardGroup)/_actions/TenantActions/paymentAction";



const PaymentButton = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () =>{
        setLoading(true)
        await paymentAction({id})
        setLoading(false)
    }

  return (
    <Button
     onClick={()=>handlePayment()}
     disabled={loading} className="w-full">
      {loading ? "Processing..." : "Proceed To Payment"}
    </Button>
  );
};

export default PaymentButton;
