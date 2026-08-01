import DashboardWelcome from "@/components/dashBoardComponents/DashboardWelcome"


const TenantDashBoardPage = () => {
  return (
    <div>
      <DashboardWelcome
      role="Tenant"
      title="Welcome to Your Tenant Dashboard"
      description="Browse available properties, manage rental requests, complete payments securely, leave reviews, and keep track of your rental history from one place."
      buttonText="Browse Profile"
      buttonLink="/tenant-dashboard/my-profile"
    />
    </div>
  )
}

export default TenantDashBoardPage