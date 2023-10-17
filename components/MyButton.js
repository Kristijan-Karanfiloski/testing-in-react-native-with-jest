import { Button } from "react-native";

const MyButton = (props) => {
  return (
    <Button
      testID="MyButton:Button:ClickMe"
      title="Click Me"
      onPress={props.onPress}
    />
  );
};

export default MyButton;
