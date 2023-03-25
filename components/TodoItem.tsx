import Checkbox from "expo-checkbox";
import {
  Button,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atom";
import { Todo } from "./TodoList";

const replaceItemAtIndex = (
  arr: Todo[],
  index: number,
  newValue: Todo
): Todo[] => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
const removeItemIndex = (arr: Todo[], index: number): Todo[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

function TodoItem({ item }: { item: Todo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const { text } = e.nativeEvent;
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: text,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isDone: !item.isDone,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <View style={{ display: "flex" }}>
      <TextInput value={item.text} onChange={editItemText} />
      <Checkbox value={item.isDone} onValueChange={toggleItemCompletion} />
      <Button onPress={deleteItem} title="delete" />
    </View>
  );
}

export default TodoItem;
