"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl text-background uppercase mb-5">
        Let&#39;s find something <span className="font-bold">awesome</span>.
      </h1>
      <button
        onClick={() => router.push("/quiz")}
        className="cursor-pointer bg-background flex flex-row justify-between items-center rounded-xl px-5 py-2 uppercase text-2xl"
      >
        Take the Quiz
        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
      </button>
    </div>
  );
}
