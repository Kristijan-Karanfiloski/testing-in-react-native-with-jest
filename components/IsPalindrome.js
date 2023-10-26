import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { isPalindromeFn } from "./helperFunctions/isPalindrome";

const IsPalindrome = () => {
  const checkIfPalindrome = () => {
    if (isPalindromeFn("Tacocat")) {
      console.log("The word is palindrome");
      // alert("The word is palindrome");
    } else {
      console.log("The word is not palindrome");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="check if palindrome" onPress={checkIfPalindrome} />
      <Button title="Submit" />
      <Text>Fuck</Text>
    </View>
  );
};

export default IsPalindrome;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    // border: "7px solid blue",
    borderWidth: 7,
    borderColor: "blue",
    // height: "50vh",
  },
});
