import React from "react";
import { Text, View } from "react-native";

const CallbackFunctions = () => {
  function greeting(name1, name2) {
    console.log(`${name1} si ti ${name2}`);
  }

  function processUserInput(callbackFunction) {
    const name1 = "Kristijan";
    const name2 = "Debil ";
    callbackFunction(name2, name1);
  }

  processUserInput(greeting);
  return (
    <View>
      <Text>Callback FUNCTIONS</Text>
    </View>
  );
};

export default CallbackFunctions;
