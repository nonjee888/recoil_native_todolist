import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms";

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isDone: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "grey", borderWidth: 1 }}
        value={inputValue}
        onChangeText={onChange}
      />
      <Button onPress={addItem} title="Add Item" />
    </View>
  );
}

export default TodoItemCreator;
