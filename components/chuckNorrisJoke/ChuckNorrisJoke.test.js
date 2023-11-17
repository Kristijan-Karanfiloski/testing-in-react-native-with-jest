import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import ChuckNorrisJoke from "./ChuckNorrisJoke";
import { fetchJoke } from "./ChuckNorrisJoke";

describe("Chuck Norris Joke", () => {
  const APIdata = {
    // icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    // id: "f7aGbCj9QcWQCdvDxJYkjg",
    // url: "",
    value:
      "Chuck Norris can tap dance though a mine field...wearing clown shoes",
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(APIdata),
    }),
  );
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should returns undefined from the catch block in the exported fetchJoke ", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("Api is down"));
    const result = await fetchJoke();

    // expect(result).toBeNull();
    expect(result).toBeUndefined();
  });
  // Mock the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ value: "Chuck Norris joke" }),
    }),
  );
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should fetch a new Chuck Norris joke from the API when "Joke Roll" button is pressed', async () => {
    // Arrange
    // Render the ChuckNorrisJoke component
    render(<ChuckNorrisJoke />);

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
  // it("should return the expected data", async () => {
  //   const result = await fetchJoke();
  //   expect(result).toEqual(APIdata);
  // });
});
