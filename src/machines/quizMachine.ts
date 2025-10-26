import { assign, setup } from "xstate";

export const quizMachine = setup({
  types: {} as {
    context: {
      started: boolean;
    };
  },
}).createMachine({
  context: () => ({
    started: false,
  }),
  initial: "notStarted",
  states: {
    notStarted: {
      on: {
        go: {
          target: "start",
        },
      },
    },
    start: {
      entry: assign({
        started: true,
      }),
    },
  },
});
