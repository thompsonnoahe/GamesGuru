import Header from "@/components/header";
import ChatBubble from "@/components/chatBubble";
import { questions } from "@/data/questions";
import UserChatBubble from "@/components/userChatBubble";

const Quiz = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Header />
      <main className="flex flex-col flex-1 bg-linear-120 from-gg-red to-gg-yellow p-10">
        <div className="flex-row flex-1 justify-center">
          <div className="flex mb-20">
            <ChatBubble question={questions[0]} />
          </div>
          <div className="flex flex-1 justify-end">
            <UserChatBubble answer="Hanging out with friends" />
          </div>
        </div>
        <div className="flex-row flex-1 justify-center">
          <div className="flex mb-20">
            <ChatBubble question={questions[1]} />
          </div>
          <div className="flex flex-1 justify-end">
            <UserChatBubble answer="1" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
