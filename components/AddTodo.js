import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const AddTodo = () => {
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // const numbers = [1, 2, 3, 4, 5];
  //
  // const increment = (number) => number + 1;
  // const double = (number) => 2 * number;
  // const square = (number) => number * number;
  //
  // const words = ["hello", "world"];
  //
  // const reverse = (string) => [...string].reverse().join();
  // const reversedWordsArray = words.map(reverse);
  //
  // const numbersIncremented = numbers.map(increment);
  //
  // console.log("Numbers incremented :", numbersIncremented);
  // console.log("REVERSED WORDS ARRAY :", reversedWordsArray);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  const [todoItem, setTodoItem] = useState([
    { id: 1, title: "Buy Milk", dueDate: "'2023-10-28'", completed: true },
    { id: 2, title: "Buy Bread", dueDate: "'2023-10-29'", completed: false },
    {
      id: 3,
      title: "Go to the cinema",
      dueDate: "'2023-10-30'",
      completed: true,
    },
  ]);

  const [addNewTodoItemTitle, setAddNewTodoItemTitle] = useState("");
  const [addNewTodoDueDate, setAddNewTodoDueDate] = useState("");

  // const newTodoItem = [
  //   [
  //     ...todoItem,
  //     { id: todoItem.length + 1, title: "Buy Pool", dueDate: "'2023-10-27'" },
  //   ],
  // ];

  // console.log("ADDED ITEM TO THE ARRAY :", newTodoItem);
  console.log("THE TODO ITEMS ARRAY :", todoItem);

  const onPressAddTodoItem = () => {
    setTodoItem([
      ...todoItem,
      { id: 6, title: addNewTodoItemTitle, dueDate: addNewTodoDueDate },
    ]);
    // setTodoItem();
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Todo Form</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="New Todo"
            onChangeText={setAddNewTodoItemTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Due Date"
            onChangeText={setAddNewTodoDueDate}
          />
          <Text>{addNewTodoItemTitle}</Text>
          <Text>{addNewTodoDueDate}</Text>
          <TouchableOpacity style={styles.button} onPress={onPressAddTodoItem}>
            <Text>Add new todo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Text>Todo List:</Text>
          <View style={styles.listContainer}>
            {todoItem.map((item) => {
              // console.log("ITEM : ", item);
              return (
                <ul key={item.id} style={styles.listItemContainer}>
                  {/*<Text>{item.title}</Text>*/}
                  {/*<Text>{item.dueDate}</Text>*/}
                  {/*<Text>{item.completed === true ? "done" : "to be done"}</Text>*/}
                  {/*<li>{item.title}</li>*/}
                  <li>
                    {` ${item.title},${item.dueDate} : ${
                      item.completed === true ? "done" : "to be done"
                    }`}
                  </li>
                </ul>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    borderWidth: 7,
    borderColor: "blue",
  },
  header: {
    color: "red",
    marginTop: 10,
  },
  form: {
    marginTop: 16,
    borderWidth: 3,
    borderColor: "blue",
    gap: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 16,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  listContainer: {
    padding: 10,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 3,
    borderColor: "blue",
  },
});
