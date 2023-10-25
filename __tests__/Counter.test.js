import { fireEvent, render, screen } from "@testing-library/react-native";
import Counter from "../components/Counter";

describe("Counter ", () => {
  it("should increment the value of the counter by one", () => {
    const { getByText, getByTestId, queryByText } = render(<Counter />);

    //!  SELECT ITEMS TO INTERACT

    const incrementBtn = getByTestId("increment");
    // const counter = screen.queryByText("counter");

    let counter = screen.getByText("0");
    expect(counter).toBeTruthy();

    //! INTERACT WITH ELEMENTS

    // const counterText=getByText()
    fireEvent.press(incrementBtn);
    counter = screen.getByText("2");
    expect(counter).toBeTruthy();
  });
});
