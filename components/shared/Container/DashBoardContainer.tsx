import React from "react";

interface DashboardContainerProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardContainer = ({
  children,
  className,
}: DashboardContainerProps) => {
  return (
    <div
      className={`
        w-full
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        max-w-screen-2xl
        ${className ?? ""}
      `}
    >
      {children}
    </div>
  );
};

export default DashboardContainer;