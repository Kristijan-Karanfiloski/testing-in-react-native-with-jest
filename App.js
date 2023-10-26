import { StyleSheet, View } from "react-native";
import { useState } from "react";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers([...users, user]);
    console.log("USER FROM APP :", users);
  };

  const handlePress = () => {
    console.log("Button Pressed!");
  };

  return (
    <View style={styles.wrapper}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      {/*<Multiplier />*/}
      {/*<StatusBar style="auto" />*/}

      {/*<View style={styles.container}>*/}
      {/*<UserForm onAddUser={onAddUser} />*/}
      {/*<UserList users={users} />*/}
      {/*</View>*/}
      {/*<Product />*/}
      {/*<Customer />*/}
      <AddTodo />
      {/*<ComponentWithData />*/}
      {/*<FetchingDataComponent />*/}
      {/*<Counter />*/}
      {/*<IsPalindrome />*/}
      {/*<UserList users={users} />*/}
      {/*<ButtonPressed handlePress={handlePress} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
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
