import Testing1Child from "./Testing1Child";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { getByText } from "@testing-library/dom";

describe("Testing1Child", () => {
  it("should render FlatList component with data and renderItem props", () => {
    // Arrange
    const { getByTestId, getByText } = render(<Testing1Child />);

    // Act
    const flatList = getByTestId("flat-list");

    // Assert
    expect(flatList).toBeVisible();
    expect(getByText("Text 1")).toBeTruthy();
  });
  it("onPressItem is called with pressed", () => {
    const onItemPressMock = jest.fn();

    render(<Testing1Child onItemPress={onItemPressMock} />);

    const list = screen.getByTestId("flat-list");
    const text1 = screen.getByText("Text 1");

    fireEvent.press(text1);

    expect(onItemPressMock).toHaveBeenCalledWith("1");
  });
});
