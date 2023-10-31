import useStyleQueries from "../components/hooks/useStyleQueries";
import { multiplyTwoNumbers } from "../components/hooks/useStyleQueries";

describe("useStyleQueries", () => {
  // it("when is an empty object", () => {
  //   const style = useStyleQueries();
  //   expect(style).toEqual({});
  // });
  //
  // it("should return an empty object when an object with a non-string style name is passed", () => {
  //   const style = useStyleQueries({ 123: { fontSize: 16 } });
  //
  //   expect(style).toEqual({});
  // });

  describe("when a single style object is passed for a style name", () => {
    it("returns the passed in style object unchanged", () => {
      const plainStyles = {
        myComponent: { fontSize: 16 },
      };
      const result1 = useStyleQueries(plainStyles);
      const result2 = useStyleQueries({ myComponent: { fontSize: 16 } });

      expect(result1).toEqual(plainStyles);
      expect(result2).toBeTruthy();
    });
  });
});

describe("adding parameters to the style query", () => {
  it("should multiply two numbers", () => {
    const sum = multiplyTwoNumbers(2, 2);
    expect(sum).toEqual(4);
  });

  it("Should return a negative number when one of the numbers is negative", () => {
    const product1 = multiplyTwoNumbers(-2, 3);
    expect(product1).toEqual(-6);
  });
});
