import { FlatList, View } from "react-native";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/selector";
import { Text } from "react-native";

function TodoItemStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted);
  return (
    <View>
      <View>
        <Text>Total items: {totalNum}</Text>
      </View>
      <View>
        <Text>Items completed: {totalCompletedNum}</Text>
      </View>
      <View>
        <Text>Items not completed: {totalUncompletedNum}</Text>
      </View>
      <View>
        <Text>Percent completed:{formattedPercentCompleted}</Text>
      </View>
    </View>
  );
}

export default TodoItemStats;
