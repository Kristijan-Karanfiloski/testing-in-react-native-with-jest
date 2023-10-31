import Appointment from "../components/Appointment";
import { render } from "@testing-library/react-native";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const mockFunction = jest.fn(() => {
      return "hello";
    });

    expect(mockFunction()).toBe("hello");

    const { getByText } = render(<Appointment />);

    expect(getByText("Ashley")).toBeTruthy();
    // expect(customerName.toString()).toMatch("Ashley");
    // expect("Ashley").toMatch("Ashley");
  });
});
