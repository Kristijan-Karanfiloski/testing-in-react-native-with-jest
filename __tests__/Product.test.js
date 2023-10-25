import { render } from "@testing-library/react-native";
import Product from "../components/Product";

test("accepts", () => {
  const product = { name: "Pizza", quantity: 5 };

  const { getByText, debug } = render(<Product product={product} />);

  // debug();
  // const productName = getByText(product.name);
  const productName = getByText(product.name);
  const quantity = getByText(`How many :${product.quantity.toString()}`);

  expect(productName).toBeTruthy();
  expect(quantity).toBeTruthy();
});
