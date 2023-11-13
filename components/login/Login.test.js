import { fireEvent, render, screen } from "@testing-library/react-native";
import Login from "./Login";

describe("Login", () => {
  const add = (a, b) => a + b;

  // if (add(1, 2) !== 4) {
  //   throw new Error("Expected 3 to be 4");
  // }

  it("should sum two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should render title", () => {
    render(<Login />);
    const title = screen.getByTestId("mytestid");

    expect(title).toBeVisible();
  });
  it("should display the sum", () => {
    render(<Login />);
  });

  it("get the text input username", () => {
    const { getByPlaceholderText } = render(<Login />);
    const usernameInput = getByPlaceholderText("username");
    // expect();
  });

  it("should render the hello there paragraph on pressing the button", () => {
    const { getByText } = render(<Login />);

    const button = getByText(/press me/i);

    fireEvent.press(button);

    const paragraphText = getByText(/hello there !!/i);

    expect(paragraphText).toBeVisible();
  });
});
