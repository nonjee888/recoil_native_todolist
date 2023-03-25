import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { todoListFilterStates } from "../recoil/atom";

type FilterState = "Show Completed" | "Show All" | "Show Uncompleted";

function TodoListFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterStates);
  const updateFilter = (value: string) => {
    setFilter(value as FilterState);
  };

  return (
    <View>
      <Picker selectedValue={filter} onValueChange={updateFilter}>
        <Picker.Item label="Show Completed" />
        <Picker.Item label="Show All" />
        <Picker.Item label="Show Uncompleted" />
      </Picker>
    </View>
  );
}

export default TodoListFilter;
