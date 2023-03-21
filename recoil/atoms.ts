import { atom, selector } from "recoil";
import { Todo } from "../components/TodoList";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show is done":
        return list.filter((item) => item.isDone);
      case "Show is not done":
        return list.filter((item) => !item.isDone);
      default:
        return list;
    }
  },
});
