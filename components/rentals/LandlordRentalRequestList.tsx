import { getLandlordRentalRequestsAction } from '@/app/(dashboardGroup)/_actions/LandLordActions/getLandlordRentalRequestsAction';
import React from 'react'
import NoLandlordRental from './NoLandlordRental';
import RentalRequestsTable from './RentalRequestsTable';

const LandlordRentalRequestList = async() => {
  const res = await getLandlordRentalRequestsAction();

  if (!res.success) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-semibold">
          Failed to load rental requests.
        </h2>

        <p className="mt-2 text-muted-foreground">
          {res.message}
        </p>
      </div>
    );
  }

   return (
    <section className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Rental Requests
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review incoming rental requests and approve or reject
          them.
        </p>
      </div>

      {/* Empty */}

      {res.data.length === 0 ? (
        <NoLandlordRental />
      ) : (
        <RentalRequestsTable rentals={res.data} />
      )}
    </section>
  );
}

export default LandlordRentalRequestList