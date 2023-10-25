import React from "react";
import { View } from "react-native";
import Product from "./Product";

const product = {
  name: "Bread",
  quantity: 5,
  price: "$50",
};

const quantity = product.quantity;

// console.log("Quantity: :", quantity);

const transformToAString = quantity.toString();

// console.log("TransformToAString :", transformToAString);
// console.log(typeof transformToAString);

const Customer = () => {
  return (
    <View>
      <Product product={product} />
    </View>
  );
};

export default Customer;
