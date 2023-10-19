import { render, fireEvent } from "@testing-library/react-native";
import Multiplier from "./Multiplier";

describe("Multiplier", () => {
  it("multiplies two numbers correctly", () => {
    const { getByPlaceholderText, getByText } = render(<Multiplier />);

    fireEvent.changeText(getByPlaceholderText("Number 1"), "5");
    fireEvent.changeText(getByPlaceholderText("Number 2"), "5");
    fireEvent.press(getByText("Multiply"));

    const result = getByText("Result :25");

    expect(result).toBeTruthy();
  });

  it("adds 1+2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});
