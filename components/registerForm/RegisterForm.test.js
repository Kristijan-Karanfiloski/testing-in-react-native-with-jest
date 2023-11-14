import {fireEvent, render, waitFor} from "@testing-library/react-native";
import RegisterForm from "./RegisterForm";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home";
// import API from "../../components/__mocks__/fetch";

const Stack = createNativeStackNavigator();

// const mockSetIsSignIn = jest.fn();

// const MockRegisterScreen = () => (
//   <RegisterForm setIsSignIn={mockSetIsSignIn} isSignIn={true} />

// const MockRegisterScreen = () => (
//   <Stack.Screen name="Form">
//     {() => <RegisterForm setIsSignIn={setIsSignIn} isSignIn={false} />}
//   </Stack.Screen>
// );

// global.fetch = API.post;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ token: "123" }),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe("RegisterScreen", () => {
  it("should render the form screen", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <RegisterForm />
      </NavigationContainer>,
    );

    await waitFor(() => getByTestId("register-screen"));
  });

  it("allows the user to register", async () => {
    const setIsSignInMock = jest.fn();
    const { getByTestId, getByRole } = render(
      <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={false} />,
    );

    const usernameInput = getByTestId("username-input");

    fireEvent.changeText(getByTestId("username-input"), "atuny0");
    fireEvent.changeText(getByTestId("password-input"), "9uQFF1Lh");
    fireEvent.press(getByTestId("btn"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "atuny0",
          password: "9uQFF1Lh",
        }),
      });

      // Check if setIsSignIn has been called, which would likely update the parent component state
      expect(setIsSignInMock).toHaveBeenCalledWith(true);
    });
  });

  // const MockRegisterScreen = () => (
  //     <Stack.Screen name="Form">
  //       {() => (
  //           <RegisterForm setIsSignIn={setIsSignIn} isSignIn={false} />
  //       )}
  //     </Stack.Screen>
  // );

  it("submits the form with valid input and navigates to the home screen", async () => {
    const setIsSignInMock = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          {/*<Stack.Screen name="MockRegister" component={MockRegisterScreen} />*/}
          <Stack.Screen name="Form">
            {() => (
              <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={true} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    // Fill the email input
    const username = getByTestId("username-input");
    fireEvent.changeText(username, "atuny0");

    // Fill the password input
    const passwordInput = getByTestId("password-input");
    fireEvent.changeText(passwordInput, "9uQFF1Lh");

    // Simulate the form submission
    const submitButton = getByTestId("btn");
    fireEvent.press(submitButton);

    // Check that setIsSignIn was called which indicates navigation should happen
    // Assuming false is the value to navigate to Home
    await waitFor(() => expect(setIsSignInMock).toHaveBeenCalledWith(false));
  });

  it("should display error message if the length of the username is less then 6 characters", () => {
    const mockSetIsSignIn = jest.fn();

    const { getByTestId, getByText } = render(
      <RegisterForm setIsSignIn={mockSetIsSignIn} isSignIn={true} />,
    );
    const usernameInput = getByTestId("username-input");
    const btn = getByTestId("btn");

    //
    fireEvent.changeText(usernameInput, "inva");

    fireEvent.press(btn);
    const errorMessage = getByText("Username must be at least 6 characters");

    // expect(errorMessage).toHaveTextContent("Please enter a valid email");
    expect(errorMessage).toBeTruthy();
    //
    // expect(getByText("Please enter a valid email")).toHaveTextContent();
  });

  it("username input should be empty", () => {
    const { findByRole } = render(<RegisterForm />);

    const usernameInput = findByRole("text");

    // expect(usernameInput.value).toBe("");
  });

  it("should navigate to the home screen when the form is submitted with valid input", async () => {
    const setIsSignInMock = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Form">
            {() => (
              <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={true} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    fireEvent.changeText(getByTestId("username-input"), "atuny0");
    fireEvent.changeText(getByTestId("password-input"), "9uQFF1Lh");
    fireEvent.press(getByTestId("btn"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "atuny0",
          password: "9uQFF1Lh",
        }),
      });

      expect(setIsSignInMock).toHaveBeenCalledWith(false);
    });
  });

  // it("calls the post function with the correct data", async () => {
  //   const setIsSignInMock = jest.fn();
  //
  //   const { getByTestId } = render(
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         {/*<Stack.Screen name="MockRegister" component={MockRegisterScreen} />*/}
  //         <Stack.Screen name="Form">
  //           {() => (
  //             <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={true} />
  //           )}
  //         </Stack.Screen>
  //         <Stack.Screen name="Home" component={Home} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  //
  //   // Fill the email input
  //   const username = getByTestId("username-input");
  //   fireEvent.changeText(username, "atuny0");
  //
  //   // Fill the password input
  //   const passwordInput = getByTestId("password-input");
  //   fireEvent.changeText(passwordInput, "9uQFF1Lh");
  //
  //   // Simulate the form submission
  //   const submitButton = getByTestId("btn");
  //   fireEvent.press(submitButton);
  //
  //   await waitFor(() => {
  //     expect(API.post).toHaveBeenCalledWith(1);
  //     expect(API.post).toHaveBeenCalledWith({
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         username: "atuny0",
  //         password: "9uQFF1Lh",
  //       }),
  //     });
  //   });
  // });
});
// import API from "../../components/__mocks__/fetch";

// const Stack = createNativeStackNavigator();

// const mockSetIsSignIn = jest.fn();

// const MockRegisterScreen = () => (
//   <RegisterForm setIsSignIn={mockSetIsSignIn} isSignIn={true} />

// const MockRegisterScreen = () => (
//   <Stack.Screen name="Form">
//     {() => <RegisterForm setIsSignIn={setIsSignIn} isSignIn={false} />}
//   </Stack.Screen>
// );

// global.fetch = API.post;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ token: "123" }),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe("RegisterScreen", () => {
  it("should render the form screen", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <RegisterForm />
      </NavigationContainer>,
    );

    await waitFor(() => getByTestId("register-screen"));
  });

  it("allows the user to register", async () => {
    const setIsSignInMock = jest.fn();
    const { getByTestId, getByRole } = render(
      <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={false} />,
    );

    const usernameInput = getByTestId("username-input");

    fireEvent.changeText(getByTestId("username-input"), "atuny0");
    fireEvent.changeText(getByTestId("password-input"), "9uQFF1Lh");
    fireEvent.press(getByTestId("btn"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "atuny0",
          password: "9uQFF1Lh",
        }),
      });

      // Check if setIsSignIn has been called, which would likely update the parent component state
      expect(setIsSignInMock).toHaveBeenCalledWith(true);
    });
  });

  // const MockRegisterScreen = () => (
  //     <Stack.Screen name="Form">
  //       {() => (
  //           <RegisterForm setIsSignIn={setIsSignIn} isSignIn={false} />
  //       )}
  //     </Stack.Screen>
  // );

  it("submits the form with valid input and navigates to the home screen", async () => {
    const setIsSignInMock = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          {/*<Stack.Screen name="MockRegister" component={MockRegisterScreen} />*/}
          <Stack.Screen name="Form">
            {() => (
              <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={true} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    // Fill the email input
    const username = getByTestId("username-input");
    fireEvent.changeText(username, "atuny0");

    // Fill the password input
    const passwordInput = getByTestId("password-input");
    fireEvent.changeText(passwordInput, "9uQFF1Lh");

    // Simulate the form submission
    const submitButton = getByTestId("btn");
    fireEvent.press(submitButton);

    // Check that setIsSignIn was called which indicates navigation should happen
    // Assuming false is the value to navigate to Home
    await waitFor(() => expect(setIsSignInMock).toHaveBeenCalledWith(false));
  });

  it("should display error message if the length of the username is less then 6 characters", () => {
    const mockSetIsSignIn = jest.fn();

    const { getByTestId, getByText } = render(
      <RegisterForm setIsSignIn={mockSetIsSignIn} isSignIn={true} />,
    );
    const usernameInput = getByTestId("username-input");
    const btn = getByTestId("btn");

    //
    fireEvent.changeText(usernameInput, "inva");

    fireEvent.press(btn);
    const errorMessage = getByText("Username must be at least 6 characters");

    // expect(errorMessage).toHaveTextContent("Please enter a valid email");
    expect(errorMessage).toBeTruthy();
    //
    // expect(getByText("Please enter a valid email")).toHaveTextContent();
  });

  it("username input should be empty", () => {
    const { findByRole } = render(<RegisterForm />);

    const usernameInput = findByRole("text");

    // expect(usernameInput.value).toBe("");
  });

  it("should navigate to the home screen when the form is submitted with valid input", async () => {
    const setIsSignInMock = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Form">
            {() => (
              <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={true} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    fireEvent.changeText(getByTestId("username-input"), "atuny0");
    fireEvent.changeText(getByTestId("password-input"), "9uQFF1Lh");
    fireEvent.press(getByTestId("btn"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "atuny0",
          password: "9uQFF1Lh",
        }),
      });

      expect(setIsSignInMock).toHaveBeenCalledWith(false);
    });
  });

  // it("calls the post function with the correct data", async () => {
  //   const setIsSignInMock = jest.fn();
  //
  //   const { getByTestId } = render(
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         {/*<Stack.Screen name="MockRegister" component={MockRegisterScreen} />*/}
  //         <Stack.Screen name="Form">
  //           {() => (
  //             <RegisterForm setIsSignIn={setIsSignInMock} isSignIn={true} />
  //           )}
  //         </Stack.Screen>
  //         <Stack.Screen name="Home" component={Home} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  //
  //   // Fill the email input
  //   const username = getByTestId("username-input");
  //   fireEvent.changeText(username, "atuny0");
  //
  //   // Fill the password input
  //   const passwordInput = getByTestId("password-input");
  //   fireEvent.changeText(passwordInput, "9uQFF1Lh");
  //
  //   // Simulate the form submission
  //   const submitButton = getByTestId("btn");
  //   fireEvent.press(submitButton);
  //
  //   await waitFor(() => {
  //     expect(API.post).toHaveBeenCalledWith(1);
  //     expect(API.post).toHaveBeenCalledWith({
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         username: "atuny0",
  //         password: "9uQFF1Lh",
  //       }),
  //     });
  //   });
  // });
});
