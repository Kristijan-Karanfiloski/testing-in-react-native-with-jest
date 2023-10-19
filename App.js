import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Multiplier from "./components/Multiplier";
import UserForm from "./components/UserForm";
import { useState } from "react";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers([...users, user]);
    console.log("USER FROM APP :", users);
  };

  return (
    <View style={styles.wrapper}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <Multiplier />
      {/*<StatusBar style="auto" />*/}

      {/*<View style={styles.container}>*/}
      <UserForm onAddUser={onAddUser} />
      {/*<UserList users={users} />*/}
      {/*</View>*/}

      <UserList users={users} />
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
