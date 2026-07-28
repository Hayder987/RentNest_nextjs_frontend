interface ContainerLgProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerLg = ({
  children,
  className,
}: ContainerLgProps) => {
  return (
    <div
      className={`
        w-full 
        mx-auto 
        px-4 
        sm:px-6 
        lg:px-8
        max-w-400
        ${className ?? ""}
      `}
    >
      {children}
    </div>
  );
};

export default ContainerLg;