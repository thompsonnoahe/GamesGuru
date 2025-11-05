import Image from "next/image";

interface UserChatBubbleProps {
  answer: string;
}

const UserChatBubble = (props: UserChatBubbleProps) => {
  return (
    <div className="bg-background p-10 min-w-1/2 min-h-40 rounded-xl text-xl">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center text-gg-pink text-xl">{props.answer}</p>
        </div>
        <div className="flex flex-col ml-10 items-center">
          <Image src="User.svg" alt="user" width={75} height={75} />
          <p>You</p>
        </div>
      </div>
    </div>
  );
};

export default UserChatBubble;
