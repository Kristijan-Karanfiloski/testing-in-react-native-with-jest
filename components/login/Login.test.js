import { fireEvent, render } from "@testing-library/react-native";
import Login from "./Login";

describe("Login", () => {
  const add = (a, b) => a + b;

  // if (add(1, 2) !== 4) {
  //   throw new Error("Expected 3 to be 4");
  // }
  it("get the text input username", () => {
    const { getByPlaceholderText } = render(<Login />);
    const usernameInput = getByPlaceholderText("username");
    // expect();
  });

  it("should show error message for the username on first render", () => {
    const { getByText } = render(<Login />);

    const errorEnterUsernameMessage = getByText(/please enter a username/i);

    expect(errorEnterUsernameMessage).toBeVisible();
  });

  it("should show the message needs to be 4 characters or more", () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    const usernameInput = getByPlaceholderText(/username/i);

    fireEvent.changeText(usernameInput, "kik");

    const pressButton = getByText(/press/i);

    const errorMessage = getByText(/needs to be 4 characters or more/i);

    expect(errorMessage).toBeVisible();
  });
});
