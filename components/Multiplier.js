import { useState } from "react";
import { TextInput, View, Button, Text, StyleSheet } from "react-native";

function Multiplier() {
  const [num1, setNum1] = useState("5");
  const [num2, setNum2] = useState("5");
  const [result, setResult] = useState(null);

  const multiply = () => {
    const product = Number(num1) * Number(num2);
    setResult(product);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={num1}
        placeholder="Number 1"
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        value={num2}
        placeholder="Number 2"
        onChangeText={(text) => setNum2(text)}
      />
      <Button title="Multiply" onPress={multiply} />
      <Text>Result :{result}</Text>
    </View>
  );
}

export default Multiplier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    border: "7px solid blue",
    // height: "50vh",
  },
});
