import { fizzBuzz } from "./fizzBuzz";

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });

  it('should return "Fizz" when the input is divisible by 3', () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(6)).toEqual("Fizz");
    expect(fizzBuzz(9)).toEqual("Fizz");
  });

  it('should return "FizzBuzz" when the input is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
  });
});
