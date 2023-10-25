import { shallowObjClone } from "../components/helperFunctions/shallowObjClone";

test("Create a clone of the object parameter", () => {
  const myObject = { person: "Hitchhiker", number: 42 };

  expect(shallowObjClone(myObject)).toStrictEqual(myObject);
});
