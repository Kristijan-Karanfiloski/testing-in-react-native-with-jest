import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { fetchTodo1, loadTitle } from "./helperFunction/fetchTodo1";
import { printTitle } from "./helperFunction/fetchTodo1";

const DelectusAutAutemFetch = () => {
  const [todo1, setTodo1] = useState("");
  const [toUpperCaseTodo1, setToUpperCaseTodo1] = useState("");
  const [showText, setShowText] = useState(false);
  const [noData, setNoData] = useState("");

  const handleOnPress = async () => {
    setShowText(!showText);
    const title = await printTitle(fetchTodo1());
    const upperCaseTitle = await loadTitle(fetchTodo1());

    if (!title && !upperCaseTitle) {
      const noDataText = "No data available";
      setNoData(noDataText);
    } else {
      setNoData("");
    }

    setTodo1(title);
    setToUpperCaseTodo1(upperCaseTitle);
  };

  return (
    <>
      <View>
        <Text>After click to show the text Delectus Aut Autem</Text>
        <Pressable style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>Press</Text>
        </Pressable>
        {showText && (
          <View>
            <Text style={styles.outputText}>{todo1}</Text>
            <Text style={styles.outputText}>{toUpperCaseTodo1}</Text>
          </View>
        )}
        <Text style={styles.errorText}>{noData}</Text>
      </View>
    </>
  );
};

export default DelectusAutAutemFetch;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#000",
    backgroundColor: "salmon",
    color: "green",
    fontSize: 10,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  outputText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  errorText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});
