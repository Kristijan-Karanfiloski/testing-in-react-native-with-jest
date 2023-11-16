import React from "react";
import { Text, View } from "react-native";

const ClosureInFunctions = () => {
  const secureBookings = function () {
    let passengerCount = 0;
    return function (count) {
      passengerCount++;
      console.log(`${passengerCount} passengers ${count}`);
    };
  };

  const booker = secureBookings();

  booker("count");
  booker("robe");
  booker("spirit");

  let f;

  const g = function () {
    const a = 23;

    f = function () {
      console.log(a * 2);
    };
  };

  const h = function () {
    const b = 100;
    f = function () {
      console.log(b * 2);
    };
  };

  g();
  f();
  // console.dir(f);

  //RE ASSIGNING F FUNCTION

  h();
  f();

  return (
    <View>
      <Text>Closure in Functions</Text>
    </View>
  );
};

export default ClosureInFunctions;
