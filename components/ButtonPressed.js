import { Text, TouchableOpacity } from "react-native";

const ButtonPressed = ({ handlePress }) => {
  // const handlePress = () => {
  //   console.log("Button Pressed!");
  // };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

export default ButtonPressed;
