import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

const FetchingDataComponent = () => {
  const [todo, setTodo] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await response.json();

    // console.log("FIRST ITEM OF THE TODO :", data[1].title);
    setTodo(data);
  };

  const renderWithMap = todo.map((item) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.title === "Black" ? item.description : ""}</Text>
      </View>
    );
  });

  const renderItem = ({ item }) => {
    console.log("ITEM :", item);
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.title === "Black" ? item.description : ""}</Text>
      </View>
    );
  };

  useEffect(() => {
    fetchData().then((r) => {
      // console.log(r);
    });
  }, []);

  // console.log("DATA TODO :", todo);

  return (
    <View style={styles.container}>
      {/*<FlatList data={todo} renderItem={renderItem} />*/}
      {/*{todo.map((item) => (*/}
      {/*  <View>*/}
      {/*    <Text>{item.title}</Text>*/}
      {/*    <Text>{item.title === "Latte" ? item.description : ""}</Text>*/}
      {/*  </View>*/}
      {/*))}*/}

      {todo.length > 0 ? (
        <Text>{todo[0].title}</Text>
      ) : (
        <Text>No coffee found</Text>
      )}
    </View>
  );
};

export default FetchingDataComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    border: "7px solid blue",
    // height: "50vh",
  },
});
