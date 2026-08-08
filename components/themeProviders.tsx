
"use client";

import { ThemeProvider } from "next-themes";

interface ThemeProvidersProps {
  children: React.ReactNode;
}

export default function ThemeProviders({
  children,
}: ThemeProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      enableColorScheme={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

