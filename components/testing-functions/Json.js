import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Json = () => {
  const baseUrl = "http://api.github.com/users";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          console.log("Fetching failed");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  console.log("Users :", users);

  return (
    <>
      <View>Calling the github api</View>
      {loading ? (
        "Loading"
      ) : (
        <View>
          {users.map((user) => (
            <Text key={user.id}>{user.login}</Text>
          ))}
        </View>
      )}
    </>
  );
};

export default Json;
