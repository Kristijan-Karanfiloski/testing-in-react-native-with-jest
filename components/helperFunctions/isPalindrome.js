import { reverseString } from "./reverseString";

export const isPalindromeFn = (word) => {
  return word.toLowerCase() === reverseString(word).toLowerCase();
};
