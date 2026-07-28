import LoginForm from "@/components/authComponents/LoginForm"
import SectionTitle from "@/components/shared/SectionTitle"


const LoginPage = () => {
  return (
    <div className="">
      <SectionTitle
        title="Sign in Your Account"
        subtitle="Signin RentNest and Get Many Access"
      />
      <LoginForm/>
    </div>
  )
}

export default LoginPage