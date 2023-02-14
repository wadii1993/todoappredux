import { COMPLETE, DELETE, ADD, FILTER, EDIT } from "./actionTypes";

const init = {
  tasks: [
    {
      id: Math.random(),
      tache: "learn html",
      isdone: true,
    },
    {
      id: Math.random(),
      tache: "learn css",
      isdone: true,
    },
    {
      id: Math.random(),
      tache: "learn redux",
      isdone: false,
    },
  ],
  filter: false,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isdone: !el.isdone } : el
        ),
      };
    case ADD:
      return { ...state, tasks: [...state.tasks, payload] };

    case FILTER:
      return { ...state, filter: !state.filter };

    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) => (el.id === payload.id ? payload : el)),
      };
    default:
      return state;
  }
};

export default reducer;
