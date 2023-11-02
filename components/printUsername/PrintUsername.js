import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

const PrintUsername = () => {
  const [name, setUser] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setUser}
          testID="input"
          placeholder="Enter username"
        />
        <Button
          onPress={() => {
            setTimeout(() => {
              setShow(true);
            }, Math.random() * 200);
          }}
          title="Print Username"
        />
        <Button disabled title="submit" />

        {show && <Text testID="printed-username">{name}</Text>}
        <View testID="empty-element"></View>
      </View>
    </>
  );
};

export default PrintUsername;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    padding: 5,
  },
});
