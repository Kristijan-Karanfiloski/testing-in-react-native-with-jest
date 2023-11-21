import { fetchTodo1 } from "./helperFunction/fetchTodo1";
import fetchMock from "jest-fetch-mock";

//BETTER WAY TO MOCK A FETCH CALL ALSO CLEAN UP AFTER THE FETCH BUT I NEED TO INSTALL THE LIBRARY JEST_FETCH_MOCK

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("should fetch data another way with jest-fetch-mock", async () => {
  const mockResponse = { title: "delectus aut autem" };
  fetch.mockResponseOnce(JSON.stringify(mockResponse));
  const result = await fetchTodo1();
  expect(result).toEqual(mockResponse);
  expect(fetch).toHaveBeenCalledTimes(1);
});
it("should return error after failing to fetch data", async () => {
  const errorMessage = "Failed to fetch ";
  fetch.mockReject(new Error(errorMessage));

  await expect(fetchTodo1()).rejects.toThrow(errorMessage);
  // await expect(fetchTodo1()).toBeNull();
});

//GOOD WAY TO CALL BUT NOT GREAT DOSENT CLEAN THE MOCK RESPONSE
describe("DelectusAutAutemFetch", () => {
  it("should fetch data", async () => {
    const mockResponse = { title: "delectus aut autem" };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchTodo1();
    expect(result).toEqual(mockResponse);
  });
});
