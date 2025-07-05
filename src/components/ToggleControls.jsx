"use client";
import { useState, useEffect } from "react";

export default function ToggleControls() {
  const [darkMode, setDarkMode] = useState(false);
  const [rtl, setRtl] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
  }, [rtl]);

  return (
    <div className="flex justify-end gap-4 p-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button
        onClick={() => setRtl(!rtl)}
        className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        {rtl ? "LTR" : "RTL"} Layout
      </button>
    </div>
  );
}