import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PracticeCssInNative = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "lightgrey",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "green",
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "blue",
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 40,
  },
});

export default PracticeCssInNative;
