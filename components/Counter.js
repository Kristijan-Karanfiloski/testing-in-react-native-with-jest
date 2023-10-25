import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 2);
  };
  const decrementCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter === 0) return 0;
      return prevCounter - 1;
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Decrement" onPress={decrementCounter} />
      <Text testID="counter">{counter}</Text>
      <Button testID="increment" title="Increment" onPress={incrementCounter} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
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
