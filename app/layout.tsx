import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Providers from "./providers";
import ThemeProviders from "@/components/themeProviders";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import DownloadAppButton from "@/components/shared/DownloadAppButton";


// ============================================
// Fonts
// ============================================

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});


// ============================================
// Metadata
// ============================================

export const metadata: Metadata = {
  title: "RentNest",
  description: "Find your perfect rental property with RentNest.",
};


// ============================================
// Root Layout
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        ibmPlexSans.variable,
        spaceGroteskHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          <ThemeProviders>
            <TooltipProvider>
              <Toaster
                position="top-right"
                richColors
                duration={3000}
              />

              {children}
              <DownloadAppButton/>
              <ScrollToTopButton />
            </TooltipProvider>
          </ThemeProviders>
        </Providers>
      </body>
    </html>
  );
}