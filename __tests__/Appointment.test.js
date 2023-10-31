import AddTodo from "../components/AddTodo";
import Appointment from "../components/Appointment";
import { render } from "@testing-library/react-native";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const { getByText } = render(<Appointment />);

    const customerName = getByText("Ashley");

    expect(getByText("Ashley")).toBeTruthy();
    // expect(customerName.toString()).toMatch("Ashley");
    // expect("Ashley").toMatch("Ashley");
  });
});
