"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const baseStyles =
    "w-6 h-6 group-hover:rotate-45 group-active:scale-[-.5] transition-transform duration-500 ease-in-out";
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    <div className="p-2">
      <div className="w-5 h-5"></div>
    </div>;
  }
  return (
    <div>
      <button
        onClick={toggleTheme}
        aria-label={`Cambiar a tema ${theme === "light" ? "dark" : "light"}`}
        className="p-2 rounded-full  bg-background-800  transition-colors group cursor-pointer"
      >
        {theme === "light" ? (
          <Sun className={baseStyles + "text-orange-300"} />
        ) : (
          <Moon className={baseStyles + "text-accent"} />
        )}
      </button>
    </div>
  );
};
