import { StyleSheet, Text, View } from "react-native";

const UserList = ({ users }) => {
  console.log("USERS FROM LIST :", users);

  const renderedUsers = users.map((user) => {
    return (
      <View key={user.name}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
    );
  });

  return (
    <>
      <View style={styles.container}>{renderedUsers}</View>
    </>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    border: "7px solid blue",
    // height: "50vh",
  },
});
