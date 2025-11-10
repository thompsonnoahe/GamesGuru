export type Question = {
  id: number;
  question: string;
  score_field: string;
  answers: [
    {
      text: string;
      value: number | null;
    },
  ];
  next: number | null | undefined;
  entry: boolean;
};
