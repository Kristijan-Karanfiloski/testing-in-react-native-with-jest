import { isPalindromeFn } from "../components/helperFunctions/isPalindrome";

test("Tacocat returns true", () => {
  expect(isPalindromeFn("Tacocat")).toBe(true);
});

test("Dave returns false", () => {
  expect(isPalindromeFn("Dave")).toBe(false);
});
