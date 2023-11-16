import React from "react";
import { Text, View } from "react-native";

const FunctionReturningFunction = () => {
  const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting}${name}`);
    };
  };

  const greeterHey = greet("Hey ");
  greeterHey("Kristijan");
  greeterHey("Dragan");
  greet("Hey ")("Dime");

  const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
  greet2("Idi u picku mater")("Riki");
  return (
    <View>
      <Text>Function returning function</Text>
    </View>
  );
};

export default FunctionReturningFunction;
