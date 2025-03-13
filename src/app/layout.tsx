"use client"; 

import "@/app/globals.css";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Показываем контент только после маунта */}
        {mounted ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
