import { render, waitFor } from "@testing-library/react-native";
import FetchingDataComponent from "./FetchingDataComponent";

describe("Coffee", () => {
  it("should display a coffee title", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ title: "Black" }, { title: "Latte" }]),
      })
    );

    const { getByText } = render(<FetchingDataComponent />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const coffeeElement = getByText("Black");

    expect(coffeeElement).toBeTruthy();
  });

  it("should not  display a coffee title", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const { getByText, debug } = render(<FetchingDataComponent />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    debug();

    const coffeeElement = getByText("No coffee found");

    expect(coffeeElement).toBeTruthy();
  });
});
