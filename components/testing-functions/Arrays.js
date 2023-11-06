import React from "react";
import { View } from "react-native";

const Arrays = () => {
  let x;

  const arr = [34, 55, 95, 20, 15];

  x = arr.includes(20);

  //! IF I RUN LIKE THIS IT WILL GIVE ME -1
  x = arr.indexOf(340);

  console.log(x);

  return (
    <>
      <View>Testing arrays</View>
    </>
  );
};

export default Arrays;
