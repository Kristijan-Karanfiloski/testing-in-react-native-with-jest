import { reverseString } from "./reverseString";

describe("reverse a string", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function");
  });

  it("should return  a string", () => {
    expect(typeof reverseString("hello")).toEqual("string");
  });
  it("should return  a reversed string", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
});
