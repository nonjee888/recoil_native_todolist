import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atoms";
import TodoItemCreator from "./TodoItemCreator";

export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
    </>
  );
}

export default TodoList;
