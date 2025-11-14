"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-5 shadow-xl w-full sticky dark:bg-background">
      <div className="flex flex-row items-center justify-center">
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
      </div>
    </header>
  );
}
