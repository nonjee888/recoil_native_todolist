import React from "react";
import { TextInputChangeEventData } from "react-native";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atom";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoItemStats from "./TodoItemStats";
import TodoListFilter from "./TodoListFilter";

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
      <TodoListFilter />
      <TodoItemStats />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
