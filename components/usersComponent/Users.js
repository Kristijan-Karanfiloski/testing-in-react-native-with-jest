import { Text, View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          console.log("THE DATA IS NOT GOOD");
          setError("The data is not good");
        }
        return response.json();
      })
      .then((data) => {
        console.log("DATA RETURNED", data);

        // setUsers(data.map((users) => users.name));
        setUsers(data);
      })
      .catch(() => {
        setError("Error fetching users");
      });
  }, []);

  console.log(error, typeof error);

  // const renderItem = users.map((user) => user.name);

  const Item = ({ name, username }) => (
    <View style={styles.item}>
      <Text>{name}</Text>
      <Text>{username}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} username={item.username} />
  );

  return (
    <>
      <View style={styles.container}>
        <Text>Users :</Text>
        {error && <Text>{error}</Text>}
        {/*{users.map((user) => {*/}
        {/*  // console.log("USER ", user);*/}
        {/*  return <Text key={user.id}>{user.name}</Text>;*/}
        {/*})}*/}

        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(users) => users.id}
          // onRefresh={() => console.log("refresh")}
          // refreshing={true}
        />
      </View>
    </>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "black",
    padding: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: "red",
    padding: 3,
    marginBottom: 3,
    marginTop: 3,
  },
});
