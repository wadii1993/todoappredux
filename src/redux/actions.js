import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes";

export const add = (TaskID) => {
  return {
    type: ADD,
    payload: TaskID,
  };
};
export const deletetask = (TaskID) => {
  return {
    type: DELETE,
    payload: TaskID,
  };
};

export const completetask = (TaskID) => {
  return {
    type: COMPLETE,
    payload: TaskID,
  };
};

export const ajout = (newTodo) => {
  return {
    type: ADD,
    payload: newTodo,
  };
};

export const filterTask = () => {
  return {
    type: FILTER,
  };
};

export const EditTache = (editText) => {
  return {
    type: EDIT,
    payload: editText,
  };
};
