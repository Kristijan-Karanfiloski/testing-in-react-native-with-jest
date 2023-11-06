import { View } from "react-native";

const TestingFunctions = () => {
  //! VAKA FUNCKCIJATA PREDVIDUVA DEKA KE PRIMI ARGUMENT OD KOJ KE IDE STO JA SAKAM
  const loginUser = (kurov) => {
    // return `Risto da mu se kacis na ${kurov.name} kurot od  ${kurov.id} cm`;
    return `Moeto ime e ${kurov.name}`;
  };

  const sumOfNumber = (fuck) => {
    let total = 0;

    fuck.map((number) => (total += number));
    return total;
  };

  const numbers = [2, 3, 6, 3];

  const user = {
    id: 20,
    name: "Kiko",
  };

  // console.log(addTwoNumbers(2, 3));

  const addTwoNumbers = (a, b) => a + b;

  console.log(addTwoNumbers(2, 3));

  console.log(loginUser(user));
  console.log(sumOfNumber(numbers));

  console.log(sumOfNumber([23, 32, 45]));

  return (
    <>
      <View></View>
    </>
  );
};

export default TestingFunctions;
