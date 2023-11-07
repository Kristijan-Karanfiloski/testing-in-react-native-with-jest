import { fireEvent, render, waitFor } from "@testing-library/react-native";
import RegisterForm from "./RegisterForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const mockSetIsSignIn = jest.fn();

const MockRegisterScreen = () => (
  <RegisterForm setIsSignIn={mockSetIsSignIn} isSignIn={true} />
);

test("navigates to the home screen", () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockRegisterScreen"
          component={MockRegisterScreen}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  const submitButton = getByTestId("btn");

  fireEvent.press(submitButton);

  expect(mockSetIsSignIn).toHaveBeenCalledWith(false);
});

test("submits the form with valid input and navigates to the home screen", () => {
  const { getByTestId, debug } = render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockRegister" component={MockRegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // Fill the email input
  const emailInput = getByTestId("email-input");
  fireEvent.changeText(emailInput, "test@example.com");

  // Fill the password input
  const passwordInput = getByTestId("password-input");
  fireEvent.changeText(passwordInput, "password123");

  // Fill the repeat password input
  const repeatPasswordInput = getByTestId("repeat-password-input");
  fireEvent.changeText(repeatPasswordInput, "password123");

  // Simulate the form submission
  const submitButton = getByTestId("btn");
  fireEvent.press(submitButton);

  // Check that setIsSignIn was called which indicates navigation should happen
  expect(mockSetIsSignIn).toHaveBeenCalledWith(false); // Assuming false is the value to navigate to Home
  debug();
});

describe("Register Form", () => {
  it("should display error message", () => {
    const mockSetIsSignIn = jest.fn();

    const { getByTestId, debug } = render(
      <RegisterForm setIsSignIn={mockSetIsSignIn} isSignIn={true} />
    );
    const emailInput = getByTestId("email-input");
    const errorMessage = getByTestId("email-error-text");
    const btn = getByTestId("btn");

    // debug();
    //
    fireEvent.changeText(emailInput, "invalid");

    fireEvent.press(btn);

    expect(errorMessage).toHaveTextContent("Please enter a valid email");
    //
    // expect(getByText("Please enter a valid email")).toHaveTextContent();
    // debug();
  });

  it("should render the form screen", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <RegisterForm />
      </NavigationContainer>
    );

    await waitFor(() => getByTestId("register-screen"));
  });
});
