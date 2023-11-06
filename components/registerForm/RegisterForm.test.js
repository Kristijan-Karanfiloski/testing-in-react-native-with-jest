import { render } from "@testing-library/react-native";
import RegisterForm from "./RegisterForm";

describe("Register Form", () => {
  it("should check if the input is empty", () => {
    render(<RegisterForm />);
  });
});
