"use client";

import Header from "@/components/header";
import ChatBubble from "@/components/chatBubble";
import UserChatBubble from "@/components/userChatBubble";
import { Fragment, useEffect, useState } from "react";
import { Question } from "@/data/questions";
import Recommendation from "@/components/recommendation";
import { QueryBuilder } from "@/utils/QueryBuilder";

interface ChatHistoryItem {
  question: Question | undefined;
  answer: string | undefined;
}

const Quiz = () => {
  const [current, setCurrent] = useState<Question>();
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);
  const [fields, setFields] = useState<MultiMap<number[]>>({});
  useEffect(() => {
    fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/questions?entry=true`)
      .then((res) => res.json())
      .then((q) => {
        setCurrent(q);
      });
  }, []);

  useEffect(() => {
    if (!current) return;

    fetch(
      `http://${process.env.NEXT_PUBLIC_API_URL}/questions/${current?.next}`,
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((q) => {
        setCurrent(q);
      });
  }, [answer]);

  if (current && !current?.next) {
    console.log(fields);
    return <Recommendation fields={new QueryBuilder(fields).toString()} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Header />
      <main className="flex flex-col flex-1 bg-linear-120 from-gg-red to-gg-yellow p-10">
        <div className="flex-row flex-1 justify-center">
          {history?.map((item, index) => (
            <Fragment key={index}>
              <div className="flex mb-20">
                <ChatBubble question={item.question} />
              </div>
              <div className="flex flex-1 justify-end">
                {item.answer && <UserChatBubble answer={item.answer} />}
              </div>
            </Fragment>
          ))}
          <div className="flex mb-20">
            <ChatBubble
              question={current}
              onAnswerClick={(a) => {
                setHistory([...history, { question: current, answer: a.text }]);
                setAnswer(a.text);
                if (a.value) {
                  setFields({
                    ...fields,
                    [a.score_field]: [
                      ...(fields[a.score_field] || []),
                      a.value,
                    ],
                  });
                }
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
