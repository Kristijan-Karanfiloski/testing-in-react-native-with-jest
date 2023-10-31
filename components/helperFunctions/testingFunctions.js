// const numbers = [1, 2, 3, 4, 5];
//
// const increment = (number) => number + 1;
// const double = (number) => 2 * number;
// const square = (number) => number * number;
//
// const numbersIncremented = numbers.map(increment);
//
//
//
// console.log("Numbers incremented :", numbersIncremented);

import { Text, View } from "react-native";

const TestingFunctions = () => {
  let scoops = 5;
  while (scoops > 0) {
    console.log("Another scoop!");
    scoops = scoops - 1;
  }

  return (
    <View>
      <Text>For testing</Text>
    </View>
  );
};

export default TestingFunctions;
