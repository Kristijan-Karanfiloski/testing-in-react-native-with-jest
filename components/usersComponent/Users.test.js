import { act, render, screen, waitFor } from "@testing-library/react-native";
import Users from "./Users";
import renderer from "react-test-renderer";

describe("Users", () => {
  it("renders correctly", () => {
    render(<Users />);

    const title = screen.getByText("Users");

    expect(title).toBeTruthy();
  });

  it("fetches and displays data", async () => {
    fetch.mockResponseOnce(
      JSON.stringify([{ name: "John Doe", username: "johndoe", id: "1" }])
    );

    const { getByText } = render(<Users />);

    await waitFor(() => getByText("johndoe"));
    await waitFor(() => getByText("John Doe"));
  });

  it("handles if the api call doesn't work", async () => {
    fetch.mockReject(new Error("Failed to fetch"));
    // await act(() => {});
    const { getByText } = render(<Users />);

    await waitFor(() => getByText("Error fetching users"));
  });

  it("checks if an element has props", () => {
    const { getByTestId } = render(<Users />);

    const flatList = getByTestId("flat-list");

    expect(flatList).toHaveProp("data");
  });

  it("checking for the text content", () => {
    const { getByTestId } = render(<Users />);

    const userText = getByTestId("title-text");

    expect(userText).toHaveTextContent("Users");
    expect(userText).toHaveTextContent(/Users/);
  });

  it("checking for the styles ", () => {
    const { getByTestId } = render(<Users />);

    const userText = getByTestId("title-text");

    expect(userText).toHaveStyle({ color: "black" });
  });
});

describe("Users", () => {
  it("should be visible", () => {
    const { getByTestId } = render(<Users />);

    const userText = getByTestId("title-text");

    expect(userText).not.toBeVisible();
  });

  renderer.create();
});
