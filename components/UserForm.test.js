import {
  fireEvent,
  render,
  screen,
  // userEvent,
} from "@testing-library/react-native";

import userEvent from "@testing-library/user-event";

import UserForm from "./UserForm";
import renderer from "react-test-renderer";

test("it calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn();

  //! TRY TO RENDER MY COMPONENT
  const { getByPlaceholderText } = render(<UserForm onAddUser={mock} />);

  //! FIND TWO INPUTS
  fireEvent.changeText(getByPlaceholderText("Name"), "Jane");
  fireEvent.changeText(getByPlaceholderText("Email"), "Jane@jane.com");

  //! FIND THE BUTTON and simulate click

  fireEvent.press(screen.getByTestId("submit"));

  //! ASSERTION to make sure
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "Jane", email: "Jane@jane.com" });
});

test("empties the two inputs when form is submitted", () => {
  const { getByPlaceholderText, getByTestId } = render(
    <UserForm onAddUser={() => {}} />
  );

  //! FIND TWO INPUTS

  const nameInput = getByPlaceholderText("Name");
  const emailInput = getByPlaceholderText("Email");

  // const nameInput = screen.getByRole("textbox", { name: /name/i });
  // const emailInput = screen.getByRole("textbox", { name: /email/i });

  //! FIND THE BUTTON
  const button = getByTestId("submit");

  // userEvent.click(nameInput);
  // userEvent.keyboard("Jane");
  // userEvent.click(emailInput);
  // userEvent.keyboard("Jane@jane.com");

  fireEvent.changeText(nameInput, "Jane");
  fireEvent.changeText(emailInput, "Jane@jane.com");

  fireEvent.press(button);

  expect(nameInput).toBe("");
  expect(emailInput).toBe("");
});
