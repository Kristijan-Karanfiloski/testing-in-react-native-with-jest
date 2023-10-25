import { Text, View, StyleSheet } from "react-native";

// const product = {
//   name: "Pizza",
//   quantity: 5,
//   price: "$50",
// };
const Product = ({ product }) => {
  // console.log(typeof product.quantity);
  // console.log(typeof product.price);
  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Text>How many :{product.quantity}</Text>
      <Text>Price:{product.price}</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    borderWidth: 5,
    borderColor: "blue",
    padding: 10,
  },
});
