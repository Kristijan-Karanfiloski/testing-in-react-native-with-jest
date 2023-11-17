import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Item from "./Item";

const data = [
  { id: "1", text: "Text 1" },
  { id: "2", text: "Text 2" },
  { id: "3", text: "Text 3" },
];

const Testing1Child = ({ onItemPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.buttons}
      onPress={() => onItemPress(item.id)}
      //THIS WAY IS BAD FOR ONCLICK BECAUSE WILL CALL THE FUN IMIDIETLY
      // onPress={onItemPress(item.id)}
    >
      <Item key={item.id} title={item.text} />
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        testID="flat-list"
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default Testing1Child;

const styles = StyleSheet.create({
  buttons: {
    marginBottom: 10,
  },
});
