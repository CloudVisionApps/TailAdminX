"use client";

import type React from "react";
import { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark";
export type Radius = "zero" | "sharp" | "default" | "rounded";

type ThemeContextType = {
  theme: Theme;
  radius: Radius;
  toggleTheme: () => void;
  setRadius: (radius: Radius) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [radius, setRadius] = useState<Radius>("default");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // This code will only run on the client side
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedRadius = localStorage.getItem("radius") as Radius | null;
    const initialTheme = savedTheme || "light"; // Default to light theme
    const initialRadius = savedRadius || "default";

    setTheme(initialTheme);
    setRadius(initialRadius);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("radius", radius);
      document.documentElement.setAttribute("data-radius", radius);
    }
  }, [radius, isInitialized]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, radius, toggleTheme, setRadius }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
