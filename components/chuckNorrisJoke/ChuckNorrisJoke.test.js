import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import ChuckNorrisJoke from "./ChuckNorrisJoke";
import { fetchJoke } from "./ChuckNorrisJoke";

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
  it("should return the expected data", async () => {
    const APIdata = {
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "f7aGbCj9QcWQCdvDxJYkjg",
      url: "",
      value:
        "Chuck Norris can tap dance though a mine field...wearing clown shoes",
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(APIdata),
      }),
    );

    const result = await fetchJoke();
    expect(result).toEqual(APIdata);
  });

  // it("should handle errors when fetching data from the API", async () => {
  //   // Arrange
  //   const { getByText } = render(<ChuckNorrisJoke />);
  //   global.fetch = jest.fn(() => Promise.reject(new Error("API error")));
  //
  //   // Act
  //   fireEvent.press(screen.getByText("Joke Roll"));
  //
  //   // Assert
  //   // await waitFor(() =>
  //   //   expect(console.error).toHaveBeenCalledWith(
  //   //     "Error in the handleOnClickNewJoke",
  //   //     new Error("API error"),
  //   //   ),
  //   // );
  // });
  // it("should return  the expected data", async () => {
  //   const result = await fetchJoke();
  //   expect(result).toEqual(APIdata);
  // });
});
