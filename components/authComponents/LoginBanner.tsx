import Image from "next/image";

const LoginBanner = () => {
  return (
    <div className="relative hidden bg-muted md:block">
      <Image
        src="/auth-image.jpg"
        alt="Register Banner"
        fill
        priority
        className="object-cover dark:brightness-75"
      />
    </div>
  );
};

export default LoginBanner;