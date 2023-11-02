import { StyleSheet, View } from "react-native";
import Users from "./components/usersComponent/Users";

export default function App() {
  // const [users, setUsers] = useState([]);

  // const onAddUser = (user) => {
  //   setUsers([...users, user]);
  //   console.log("USER FROM APP :", users);
  // };
  //
  // const handlePress = () => {
  //   console.log("Button Pressed!");
  // };

  return (
    <>
      <View style={styles.wrapper}>
        <Users />
      </View>
      ;
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "yellow",
    padding: 10,
  },
});
