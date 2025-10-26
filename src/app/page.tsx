"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMachine } from "@xstate/react";
import { quizMachine } from "@/machines/quizMachine";

export default function Home() {
  const [state, send] = useMachine(quizMachine);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <header className="p-5 shadow-xl w-full">
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
      </header>
      <main className="h-screen flex-col items-center justify-evenly flex bg-linear-120 from-gg-red to-gg-yellow">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-background uppercase mb-5">
            Let&#39;s find something <span className="font-bold">awesome</span>.
          </h1>
          <button
            onClick={() => {
              send({
                type: "go",
              });
            }}
            className="cursor-pointer bg-background flex flex-row justify-between items-center rounded-xl px-5 py-2 uppercase text-2xl"
          >
            Take the Quiz
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </button>
        </div>
        {state?.context.started && <p>Quiz started</p>}
      </main>
    </div>
  );
}
