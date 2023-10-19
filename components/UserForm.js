import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const UserForm = ({ onAddUser }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    onAddUser({ name, email });
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Demo Form</Text>
        <View>
          <TextInput
            // onChange={(e) => setName(e.target.value)}
            // onValueChange={(e) => setName(e.target.value)}
            onChangeText={setName}
            value={name}
            style={styles.emailInput}
            placeholder="Name"
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            // onValueChange={(e) => setEmail(e.target.value)}

            // onChange={(e) => setEmail(e.target.value)}
          />
        </View>
        <Button testID="submit" onPress={handleSubmit} title="Submit" />
      </View>
    </>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    border: "7px solid blue",
    height: "50vh",
  },
  emailInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 4,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 4,
  },
});
