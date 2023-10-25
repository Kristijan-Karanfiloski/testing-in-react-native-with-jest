import renderer from "react-test-renderer";
import App from "./App";
import { addTwoNumbers } from "./components/utils";

//!This begins a new test suite (a collection of tests) for the App component.
// describe("App", () => {
//   it("has 1 child", () => {
//     ////////////////////////////////////////////////////////////////////////////////////////////////
//     //!This line creates a new instance of the App component, renders it to a JSON object, and assigns this object
//     //! to a variable named tree.
//     const tree = renderer.create(<App />).toJSON();
//
//     ////////////////////////////////////////////////////////////////////////////////////////////////
//
//     //!This is an assertion that checks if the tree object has exactly one child. If it does, this test will pass;
//     //! if it doesn't, this test will fail.
//     expect(tree.children.length).toBe(1);
//   });
//
//   it("renders correctly", () => {
//     const tree = renderer.create(<App />).toJSON();
//
//     //!    This is an assertion that checks if the tree object matches a previously saved snapshot. If it does, this
//     //!  test will pass; if it doesn't, this test will fail, indicating that the App component's rendered output has
//     //! changed.
//
//     expect(tree).toMatchSnapshot();
//   });
// });

describe("testing the add function from utils", () => {
  it("should add two numbers correctly", () => {
    expect(addTwoNumbers(2, 3)).toEqual(5);
    expect(addTwoNumbers(-2, 3)).toBe(1);
    expect(addTwoNumbers(-2, -3)).toBe(-5);
  });
});
