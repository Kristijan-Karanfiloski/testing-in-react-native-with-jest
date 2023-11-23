import React from "react";
import { Text, View } from "react-native";

const ArrayCollectionOfAnything = () => {
  const arr = [
    1,
    false,
    { name: "Dragan", address: "1230 st." },
    function (name) {
      const greeting = "Hello";
      console.log(`${greeting} ${name}`);
    },
    "Hello",
  ];

  console.log(arr);
  arr[3](arr[2].name);

  return (
    <>
      <View>
        <Text>Array Collection Of Anything</Text>
      </View>
    </>
  );
};

export default ArrayCollectionOfAnything;
