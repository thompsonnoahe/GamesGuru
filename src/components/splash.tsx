"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Splash() {
  const router = useRouter();

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ transform: "translateY(25%)", opacity: 0 }}
      animate={{ transform: "translateY(0%)", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="select-none text-5xl text-background uppercase mb-5">
        Let&#39;s find something <span className="font-bold">awesome</span>.
      </h1>
      <motion.button
        onClick={() => router.push("/quiz ")}
        className="select-none cursor-pointer dark:bg-background flex flex-row justify-between items-center rounded-xl px-5 py-2 uppercase text-2xl"
        initial={{ transform: "translateY(25%)", opacity: 0 }}
        animate={{ transform: "translateY(0%)", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Take the Quiz
        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
      </motion.button>
    </motion.div>
  );
}
