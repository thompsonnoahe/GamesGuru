"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <header className="p-5 shadow-xl w-full sticky dark:bg-background">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center cursor-pointer">
            <Image
              src="Logo.svg"
              alt="GamesGuru logo"
              width={60}
              height={60}
              className="mr-5 not-dark:brightness-25"
            />
            <div>
              <h1 className="font-bold text-2xl">
                Games<span className="font-normal">Guru</span>
              </h1>
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-between">
          <FontAwesomeIcon
            size="xl"
            icon={theme === "light" ? faMoon : faSun}
            className="cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <h1 className="text-2xl ml-7">Sign In</h1>
        </div>
      </div>
    </header>
  );
}
