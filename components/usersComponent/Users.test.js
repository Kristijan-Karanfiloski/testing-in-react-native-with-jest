import { render, screen, waitFor } from "@testing-library/react-native";
import Users from "./Users";

describe("Users", () => {
  it("renders correctly", () => {
    render(<Users />);

    const title = screen.getByText("Users :");

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

  it("handles if the api call dosent work", async () => {
    fetch.mockReject(new Error("Failed to fetch"));

    const { getByText } = render(<Users />);

    await waitFor(() => getByText("Error fetching users"));
  });
});
