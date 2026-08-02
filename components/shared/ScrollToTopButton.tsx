"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 450);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Pulse Ring */}
      <div
        className={`pointer-events-none fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary/20 transition-all duration-500 ${
          show ? "animate-ping opacity-100" : "scale-0 opacity-0"
        }`}
      />

      {/* Button */}
      <button
        aria-label="Scroll To Top"
        onClick={scrollTop}
        className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-linear-to-br from-primary via-primary to-primary/80 text-white shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:scale-110 hover:shadow-primary/40 active:scale-95 ${
          show
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        {/* Shine */}
        <span className="absolute inset-0 translate-x-[-120%] skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[150%]" />

        {/* Icon */}
        <ChevronUp className="relative z-10 size-6 transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 rounded-lg bg-black px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          Back to Top
        </span>
      </button>
    </>
  );
};

export default ScrollToTopButton;