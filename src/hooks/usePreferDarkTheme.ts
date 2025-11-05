"use client";

import { useEffect, useState } from "react";

// Returns whether the user prefers dark mode or not
const usePreferDarkTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDarkMode;
};

export default usePreferDarkTheme;
