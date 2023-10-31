import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
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
  const [errorMessage, setErrorMessage] = useState();

  // function greet(message) {
  //   function sayHello() {
  //     return `Hello ${message}`;
  //   }
  //
  //   return sayHello();
  // }
  //
  // console.log(greet("fucking kiko"));

  // const addSumOfTwoNumbers = (a, b) => {
  //   console.log("RESULT :", a + b);
  // };
  //
  // const a = 23;
  // const c = 32;
  //
  // addSumOfTwoNumbers(a, 23);

  //! THIS IS IF I WANT TO USE THE FUNCTION AS A HELLPER
  const deleteTodoItem = (id) => {
    return (kiko) => {
      console.log(
        "TODO ITEM FROM THE FUNCTION DELETE TODO ITEM FUNCTION :",
        kiko
      );
      return kiko.id !== id;
    };
  };

  // const onPressDeleteTodoItem = (id) => {
  //   setTodoItem(todoItem.filter(deleteTodoItem(id)));
  // };
  const onPressDeleteTodoItem = (id) => {
    console.log("ID FROM THE OUTER FUNCTION :", id);
    // setTodoItem(todoItem.filter(deleteTodoItem(id)));
    setTodoItem(
      todoItem.filter((item) => {
        console.log("ITEM  FROM INNER FUNCTION :", item);
        console.log("ITEM . ID FROM INNER FUNCTION :", item.id);
        console.log("ID FROM INNER FUNCTION :", id);

        return item.id !== id;
      })
    );
  };

  // const words = ["spr", "elite"];
  //
  // const removeWord = words.filter((word) => word.length > 3);

  // console.log("FILTER WORDS :", removeWord);

  // const newTodoItem = [
  //   [
  //     ...todoItem,
  //     { id: todoItem.length + 1, title: "Buy Pool", dueDate: "'2023-10-27'" },
  //   ],
  // ];

  // console.log("ADDED ITEM TO THE ARRAY :", newTodoItem);
  // console.log("THE TODO ITEMS ARRAY :", todoItem);

  const onPressAddTodoItem = () => {
    if (addNewTodoItemTitle === "") {
      console.log("Cant be empty");
      return;
    }

    setTodoItem([
      ...todoItem,
      {
        id: todoItem.length + 1,
        title: addNewTodoItemTitle,
        dueDate: addNewTodoDueDate,
      },
    ]);
    setAddNewTodoItemTitle("");
    setAddNewTodoDueDate("");
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
          {!setAddNewTodoItemTitle && <Text>Cant be empty</Text>}
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
                    {/*<Button title="delete" onPress={onPressDeleteTodoItem} />*/}
                    <Pressable onPress={() => onPressDeleteTodoItem(item.id)}>
                      <Text>Delete</Text>
                    </Pressable>
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
