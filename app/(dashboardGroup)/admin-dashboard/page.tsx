import DashboardWelcome from "@/components/dashBoardComponents/DashboardWelcome";
import React from "react";

const AdminDashBoardPage = () => {
  return (
    <div>
      <DashboardWelcome
        role="Admin"
        title="Welcome to the Admin Dashboard"
        description="Monitor platform performance, manage users, moderate properties and rental requests, organize categories, and oversee the entire RentNest system."
        buttonText="View Overview"
        buttonLink="/admin-dashboard/overview"
      />
    </div>
  );
};

export default AdminDashBoardPage;
