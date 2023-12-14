"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="justify-self-end mr-5 flex">
      <button onClick={() => setTheme("dark")}>
        <Image
          src="/assets/moon.png"
          alt="moon image"
          width="48"
          height="48"
          className={`w-[40px] h-[40px] cursor-pointer ${
            theme !== "dark" && "grayscale"
          }`}
        />
      </button>
      <button onClick={() => setTheme("light")}>
        <Image
          src="/assets/sun.svg"
          alt="sun image"
          width="48"
          height="48"
          className={`w-[40px] h-[40px] cursor-pointer ${
            theme === "dark" && "grayscale"
          }`}
        />
      </button>
    </div>
  );
}
