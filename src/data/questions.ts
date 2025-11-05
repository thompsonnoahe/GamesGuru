export type Question = {
  id: number;
  question: string;
  answers: string[];
  next: number | null | undefined;
};

export const questions: Question[] = [
  {
    id: 0,
    question:
      "Hey! What’s up? I’m here to help you find your next game to play. Are you looking for something to play by yourself or with friends?",
    answers: ["I'm flying solo", "Hanging out with friends"],
    next: 1,
  },
  {
    id: 1,
    question: "Nice! How many friends are you playing with?",
    answers: ["1", "2", "3", "4 or more"],
    next: null,
  },
];

const getQuestion = async (id: number): Promise<Question> => {
  return new Promise((resolve, reject) => {
    if (id < questions.length && id >= 0) {
      resolve(questions[id]);
    } else {
      reject("Out of bounds");
    }
  });
};

export default getQuestion;
