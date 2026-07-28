import RegisterForm from "@/components/authComponents/RegisterForm"
import SectionTitle from "@/components/shared/SectionTitle"


const RegisterPage = () => {
  return (
    <div className="">
      <SectionTitle
        title="Create Your Account"
        subtitle="Join RentNest and find your perfect home easily"
      />
      <RegisterForm/>
    </div>
  )
}

export default RegisterPage