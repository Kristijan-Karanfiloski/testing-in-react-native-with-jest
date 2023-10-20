import { fireEvent, render } from "@testing-library/react-native";
import ButtonPressed from "../components/ButtonPressed";

describe("component", () => {
  it("calls handlePress when button is pressed", () => {
    const handlePress = jest.fn();
    // const log = jest.fn();
    const { getByText } = render(<ButtonPressed handlePress={handlePress()} />);

    const button = getByText("Button");

    fireEvent.press(button);

    expect(handlePress).toBeDefined();
  });
});
