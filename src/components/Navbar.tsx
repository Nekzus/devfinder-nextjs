"use client";

import { MoonIcon, SunIcon } from "@/components";
import { useEffect, useState } from "react";

const initialThemeState = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as "light" | "dark";
  }
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="mb-10 flex items-center space-x-2">
      <h1 className="flex-grow text-4xl font-bold text-blue-950 dark:text-white">
        devfinder
      </h1>

      <span className="uppercase text-blue-950 dark:text-white">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <SunIcon
            className="fill-blue-950 dark:fill-white"
            width={25}
          />
        ) : (
          <MoonIcon
            className="fill-blue-950 dark:fill-white"
            height={25}
          />
        )}
      </button>
    </header>
  );
};
export default Navbar;
