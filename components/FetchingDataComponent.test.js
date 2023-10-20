import { APIRequest } from "./helperFunctions/api";

describe("testing api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls the coffee api and returns data", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

    const response = await APIRequest("google");
    expect(response.data).toEqual("12345");

    expect(fetch.mock.calls.length).toEqual("1");
  });
});
