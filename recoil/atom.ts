import { atom } from "recoil";
import { Todo } from "../components/TodoList";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterStates = atom({
  key: "todoListFilterState",
  default: "Show All",
});
