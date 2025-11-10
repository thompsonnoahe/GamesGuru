import { Question } from "@/data/questions";
import Image from "next/image";

interface ChatBubbleProps {
  question: Question | undefined;
  onAnswerClick?: (answer: {
    score_field: string;
    text: string;
    value: number | null;
  }) => void;
}

const ChatBubble = (props: ChatBubbleProps) => {
  return (
    <div className="bg-background p-10 min-w-[40%] rounded-xl text-xl mt-5">
      <div className="flex flex-row justify-stretch">
        <div className="flex flex-col mr-7 items-center">
          <Image src="Logo.svg" alt="user" width={50} height={50} />
          <p>GamesGuru</p>
        </div>
        <div className="flex flex-col w-full">
          <p className="mb-10">{props.question?.question}</p>
          <div className="border border-gg-pink w-full rounded">
            {props.question?.answers?.map((value, index, array) => {
              return (
                <a
                  className={`${index === array.length - 1 ? "" : "border-b"} cursor-pointer border-gg-pink min-h-20 flex items-center justify-center`}
                  key={index}
                  onClick={() =>
                    props.onAnswerClick &&
                    props.onAnswerClick({
                      ...value,
                      score_field: props.question?.score_field || "",
                    })
                  }
                >
                  <p className="text-gg-pink text-center text-xl">
                    {value.text}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
