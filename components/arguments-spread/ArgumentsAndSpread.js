import React from "react";
import { View, Text } from "react-native";

const ArgumentsAndSpread = () => {
  function greet(firstName, lastName = "fucker", language) {
    language = language || "mkd"; // language = language (undefined-->falsy value) and the the || will give the truthly value that is 'mkd'
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log("----------------");
  }

  greet();
  greet("KIKo", "Karanfilac");
  greet("Kiko", "Karanfilac", "MKD");

  return (
    <>
      <View>
        <Text>Arguments and Spread</Text>
      </View>
    </>
  );
};

export default ArgumentsAndSpread;
