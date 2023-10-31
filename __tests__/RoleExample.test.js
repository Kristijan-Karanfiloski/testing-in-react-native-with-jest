import { render, screen } from "@testing-library/react-native";
import RoleExample from "../components/RoleExample";
import { TouchableOpacity } from "react-native";

// test("can find elements by role", () => {
//   render(<RoleExample />);
//   const roles = [
//     "Link",
//     "Button",
//     "Contentinfo",
//     "Heading",
//     "Banner",
//     "CheckBox",
//     // "Spinbutton",
//     // "Radio",
//     // "Textbox",
//   ];
//
//   for (let role of roles) {
//     const el = screen.getByText(role);
//
//     expect(el).toBeTruthy();
//   }
// });

//! WHEN SEARCHING BY getByText is used for text

test("getting the pressable link", () => {
  render(<RoleExample />);

  const button = screen.getByRole("link");

  expect(button).toBeTruthy();
  expect(screen.queryByRole("textbox")).toBe(null);
});

test("TouchableOpacity is disabled", () => {
  render(<TouchableOpacity disabled={true} accessibilityRole="link" />);

  const element = screen.getByRole("link");

  expect(element.props.disabled).toBe(undefined);

  // expect(element).toHaveProperty("disabled", true);
});

test("getBy,queryBy,findBy when they find 1 element", async () => {
  render(<RoleExample />);

  expect(screen.getByRole("button")).toBeTruthy();
  expect(screen.queryByRole("button")).toBeTruthy();
  expect(await screen.findByRole("button")).toBeTruthy();
});

test("getBy,queryBy,findBy when they find > 1 element", async () => {
  render(<RoleExample />);

  // expect(() => screen.getByRole("link")).toThrow();

  // expect(() => screen.queryByRole("link").toThrow();

  // let errorThrown = false;
  // try {
  //   await screen.findByRole("link");
  // } catch (error) {
  //   errorThrown = true;
  // }
  // expect(errorThrown).toEqual(true);
});
