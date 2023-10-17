import { fireEvent, render } from "@testing-library/react-native";
import MyButton from "./MyButton";

describe("MyButton", () => {
  it("calls onPress function when is pressed", () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(<MyButton onPress={mockOnPress} />);
    const pressMeButton = getByTestId("MyButton:Button:ClickMe");

    fireEvent.press(pressMeButton);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
