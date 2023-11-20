import { runCallback } from "./jestFn";

describe("run callback", () => {
  const callbackMock = jest.fn();

  it("should run callback (< 100)", () => {
    runCallback(19, callbackMock);

    expect(callbackMock).toHaveBeenCalled();
    expect(callbackMock).toBeCalledWith(95);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not run callback (>= 100)", () => {
    runCallback(20, callbackMock);

    expect(callbackMock).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
