import { isPalindromeFn } from "../components/helperFunctions/isPalindrome";
import { render, screen } from "@testing-library/react-native";
import IsPalindrome from "../components/IsPalindrome";

// test("Tacocat returns true", () => {
//   const { getByPlaceholdr } = render(<IsPalindrome />);
//
//   //! In the Arrange phase, the input data is created
//   const input = "madam";
//   const input2 = "kiko";
//
//   //! ACT -- In the Act phase, the function isPalindromeFn is called with the input data.
//
//   const result = isPalindromeFn(input);
//   const result2 = isPalindromeFn(input2);
//
//   //! ASSERT-- In the Assert phase, Jest's expect and toBe functions are used to check that the result is as expected.
//
//   // expect(isPalindromeFn("Tacocat")).toBe(true);
//   expect(result2).toBe(false);
// });
//
// test("Dave returns false", () => {
//   expect(isPalindromeFn("Dave")).toBe(false);
// });

describe("isPalindrome", () => {
  it("should return element with text", () => {
    render(<IsPalindrome />);

    const myElement = screen.getByText(/check if palindrome/i);

    expect(myElement).toBeTruthy();
  });

  it("Tacocat returns true", () => {
    // const { getByPlaceholdr } = render(<IsPalindrome />);

    //! In the Arrange phase, the input data is created
    const input = "madam";
    const input2 = "kiko";

    //! ACT -- In the Act phase, the function isPalindromeFn is called with the input data.

    const result = isPalindromeFn(input);
    const result2 = isPalindromeFn(input2);

    //! ASSERT-- In the Assert phase, Jest's expect and toBe functions are used to check that the result is as expected.

    // expect(isPalindromeFn("Tacocat")).toBe(true);
    expect(result2).toBe(false);
  });

  it("Dave returns false", () => {
    expect(isPalindromeFn("Dave")).toBe(false);
  });

  it("Button with title submit to exist in the document", () => {
    render(<IsPalindrome />);

    const btnSubmit = screen.getByRole("button", { name: "Submit" });

    expect(btnSubmit).toBeTruthy();
  });
});
