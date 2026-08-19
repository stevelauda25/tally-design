"use client";

import { useSyncExternalStore } from "react";
import { IconButton } from "@/components/ui/icon-button";
import { isTheme, themeStorageKey, type Theme } from "@/lib/theme";

const themeChangeEvent = "tally-ui-theme-change";

function documentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The theme still applies for the current session when storage is unavailable.
  }

  window.dispatchEvent(new Event(themeChangeEvent));
}

function subscribeToTheme(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== themeStorageKey || !isTheme(event.newValue)) {
      return;
    }

    document.documentElement.dataset.theme = event.newValue;
    onStoreChange();
  };

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    documentTheme,
    () => "light",
  );

  const dark = theme === "dark";

  function toggleTheme() {
    const nextTheme = documentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  return (
    <IconButton
      label={dark ? "Switch to light mode" : "Switch to dark mode"}
      icon="/assets/icons/utility/theme.svg"
      pressed={dark}
      onClick={toggleTheme}
    />
  );
}
