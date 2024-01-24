"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const NextThemeProvider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
