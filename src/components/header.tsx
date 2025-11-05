"use client";

import Image from "next/image";
import usePreferDarkTheme from "@/hooks/usePreferDarkTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const preferDark = usePreferDarkTheme();

  return (
    <header className="p-5 shadow-xl w-full sticky">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
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
        <div className="flex flex-row items-center justify-between">
          <FontAwesomeIcon size="xl" icon={preferDark ? faSun : faMoon} />
          <h1 className="text-2xl ml-7">Sign In</h1>
        </div>
      </div>
    </header>
  );
}
