import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Providers from "./providers";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        ibmPlexSans.variable,
        spaceGroteskHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <TooltipProvider>
            <Toaster position="top-right" richColors duration={3000} />
            {children}
            <ScrollToTopButton/>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
