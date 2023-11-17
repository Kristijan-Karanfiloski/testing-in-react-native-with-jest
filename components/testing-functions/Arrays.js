import React from "react";
import { Text, View } from "react-native";

const Arrays = () => {
  // let x;

  const arr = [34, 55, 95, 20, 15];

  // x = arr.includes(20);

  //! IF I RUN LIKE THIS IT WILL GIVE ME -1
  // x = arr.indexOf(340);

  // console.log(x);

  let x = arr.slice();
  x.push(23);
  console.log(x);
  console.log(arr);

  return (
    <>
      <Text>Testing arrays</Text>
    </>
  );
};

export default Arrays;
