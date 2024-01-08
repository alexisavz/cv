"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  useEffect(() => {
    // Update the state when the theme changes outside the component
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {isDarkTheme ? (
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 " />
        ) : (
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
