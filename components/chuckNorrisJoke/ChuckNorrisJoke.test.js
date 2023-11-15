import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import ChuckNorrisJoke from "./ChuckNorrisJoke";

describe("Chuck Norris Joke", () => {
  it('should fetch a new Chuck Norris joke from the API when "Joke Roll" button is pressed', async () => {
    // Arrange
    // Render the ChuckNorrisJoke component
    render(<ChuckNorrisJoke />);
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ value: "Chuck Norris joke" }),
      }),
    );

    // Act
    // Click the 'Joke Roll' button
    fireEvent.press(screen.getByText(/Joke Roll/i));

    // Assert
    // Check if the fetch function is called with the correct URL
    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith(
        "https://api.chucknorris.io/jokes/random",
      ),
    );

    // Check if a new Chuck Norris joke is displayed
    // await expect(screen.findByText(/Chuck Norris/i)).toBeVisible();
  });
  it("should handle errors when fetching data from the API", async () => {
    // Arrange
    const { getByText } = render(<ChuckNorrisJoke />);
    global.fetch = jest.fn(() => Promise.reject(new Error("API error")));

    // Act
    fireEvent.press(getByText("Joke Roll"));

    // Assert
    await waitFor(() =>
      expect(console.error).toHaveBeenCalledWith(
        "Error in the handleOnClickNewJoke",
        new Error("API error"),
      ),
    );
  });
});
