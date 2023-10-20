import { fireEvent, render } from "@testing-library/react-native";
import ComponentWithData from "./ComponentWithData";

describe("render Component", () => {
  it("should render items correctly", () => {
    const { getByTestId } = render(<ComponentWithData />);
    const list = getByTestId("flat-list");

    expect(list).toBeDefined();

    expect(list.props.data.length).toBe(3);
  });

  it("display the correct item", () => {
    const { getByText } = render(<ComponentWithData />);

    const text1 = getByText("Text 1");

    expect(text1).toBeDefined();
  });

  it("onPress item is called when pressed", () => {
    const onItemPressMock = jest.fn();
    const { getByText, getByTestId } = render(
      <ComponentWithData onItemPress={onItemPressMock} />
    );

    //! find the flat-list and Text elements
    const list = getByTestId("flat-list");
    const text1 = getByText("Text 1");

    //! simulate the press on 'Text 1'.
    fireEvent.press(text1);

    //! the onItemPressMock handle is called with the 'id' of the item passed as an argument
    expect(onItemPressMock).toHaveBeenCalledWith("1");
  });
});
