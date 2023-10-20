import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  { id: "1", text: "Text 1" },
  { id: "2", text: "Text 2" },
  { id: "3", text: "Text 3" },
];

const ComponentWithData = ({ onItemPress }) => {
  const Item = (props) => {
    return (
      <View>
        <Text>{props.title}</Text>
      </View>
    );
  };
  const onPressItem = (id) => {
    // console.log(typeof id);
    onItemPress(id);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => onPressItem(item.id)}>
      <Item title={item.text} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        testID="flat-list"
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ComponentWithData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 7,
    // height: "50vh",
  },
});
