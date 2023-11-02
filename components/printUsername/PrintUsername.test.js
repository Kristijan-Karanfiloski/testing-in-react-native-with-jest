import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import PrintUsername from "./PrintUsername";
import { Button, TextInput, View } from "react-native";

describe("Print username", () => {
  it("checking if the element is empty", () => {
    render(<PrintUsername />);
    const emptyElement = screen.getByTestId("empty-element");

    expect(emptyElement).toBeEmptyElement();
  });

  // it("should print the text with id printed-username", async () => {
  //   render(<PrintUsername />);
  //
  //   const input = screen.getByTestId("input");
  //   const button = screen.getByText("Print Username");
  //
  //   let output = screen.queryByTestId("printed-username");
  //
  //   expect(output).not.toBeVisible();
  //
  //   fireEvent.press(button);
  //
  //   //! TRYING TO FIND THE OUTPUT IF THE INITIAL STATE IN THE COMPONENT IS FALSE IT WILL TROW AN ERROR
  //
  //   await waitFor(() => {
  //     output = screen.queryByTestId("printed-username");
  //     expect(output).not.toBeVisible();
  //     // expect(output).toBeTruthy();
  //   });
  // });

  it("should have a btn Submit that is disabled", () => {
    render(<PrintUsername />);

    const button = screen.getByText("submit");

    expect(button).toBeDisabled();
    expect(button).toHaveProp("disabled", true);
  });

  it("it displays the username when the button is pressed", async () => {
    const { getByTestId, getByText } = render(<PrintUsername />);

    // Input the username
    const input = getByTestId("input");
    fireEvent.changeText(input, "john_doe");

    // Press the button
    const button = getByText("Print Username");
    fireEvent.press(button);

    // Wait for the username to be displayed
    await waitFor(
      () =>
        expect(getByTestId("printed-username")).toHaveTextContent("john_doe")
      // expect(getByTestId("printed-username")).toBeOnTheScreen();
    );
  });

  it("testing", () => {
    const { getByTestId } = render(
      <View>
        <Button testID="button" title="submit" onPress={(e) => e} />
        <TextInput testID="input" value="text" />
      </View>
    );

    expect(getByTestId("button")).toBeEnabled();
    expect(getByTestId("input")).toBeEnabled();
  });
});

//TODO: TO CHECK THE OUTPUT OF THE COMPONENT ON THE LEFT
