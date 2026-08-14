"use client";

import { Download } from "lucide-react";
import Link from "next/link";

const DownloadAppButton = () => {
  return (
    <>
      {/* Pulse Ring */}
      <div className="pointer-events-none fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-primary/20 animate-ping" />

      {/* Floating Download Button */}
      <Link
        href="https://drive.google.com/file/d/1544aCNwIs5MLCq6wuaZqpWRM71kzCzW7/view?usp=drive_link"
        target="_blank"
        aria-label="Download RentNest App"
        className="group fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-linear-to-br from-primary via-primary to-primary/80 text-white shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:scale-110 hover:shadow-primary/40 active:scale-95"
      >
        {/* Shine Effect */}
        <span className="absolute inset-0 -translate-x-[120%] skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[150%]" />

        {/* Download Icon */}
        <Download className="relative z-10 size-6 transition-transform duration-300 group-hover:translate-y-1" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute left-16 rounded-lg bg-black px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Download App
        </span>
      </Link>
    </>
  );
};

export default DownloadAppButton;