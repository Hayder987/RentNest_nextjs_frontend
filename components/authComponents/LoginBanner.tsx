import Image from "next/image";
import authImg from "../../public/auth-image.jpg"

const LoginBanner = () => {
  return (
    <div className="relative hidden bg-muted md:block">
      <Image
        src={authImg}
        alt="Register Banner"
        fill
        priority
        className="object-cover dark:brightness-75"
      />
    </div>
  );
};

export default LoginBanner;