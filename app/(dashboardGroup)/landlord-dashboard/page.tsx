import DashboardWelcome from "@/components/dashBoardComponents/DashboardWelcome"


const LandLordDashBoardPage = () => {
  return (
    <div>
       <DashboardWelcome
      role="Landlord"
      title="Welcome to Your Landlord Dashboard"
      description="Manage your property listings, approve or reject rental requests, monitor active rentals, and grow your rental business efficiently."
      buttonText="Manage Properties"
      buttonLink="/landlord-dashboard/my-properties"
    />
    </div>
  )
}

export default LandLordDashBoardPage