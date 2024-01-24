"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();


  //useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <div className="flex space-x-2">
        <FiSun
          className="cursor-pointer h-4 w-4 sm:h-5 sm:w-5"
          onClick={() => setTheme("light")}
        />
        <p className="text-xs sm:text-sm">Light mode</p>
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="flex space-x-2">
        <FiMoon
          className="cursor-pointer h-4 w-4 sm:h-5 sm:w-5"
          onClick={() => setTheme("dark")}
        />
        <p className="text-xs sm:text-sm">Dark mode</p>
      </div>
    );
  }
}