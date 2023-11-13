import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

const RegisterForm = ({ setIsSignIn, isSignIn }) => {
  // const { isSignIn, setIsSignIn } = route.params;

  // useEffect(() => {
  //   console.log(typeof setIsSignIn);
  // }, [isSignIn]);

  // console.log("IsSignIn FROM REGISTER FORM", isSignIn);

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    // username: "atuny0",
    // password: "9uQFF1Lh",
    // repeatPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  // const [emailErrorText, setEmailErrorText] = useState("");
  // const [passwordErrorText, setPasswordErrorText] = useState("");
  // const [repeatPassword, setRepeatPassword] = useState("");

  const handleFormValueChanges = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  //VALIDATE FORM

  useEffect(() => {
    validateForm();
  }, [formValues.username, formValues.password]);

  const validateForm = () => {
    let errorsMsg = {};

    if (!formValues.username) {
      errorsMsg.username = "Please enter a valid username";
    } else if (formValues.username.length < 6) {
      errorsMsg.username = "Username must be at least 6 characters";
    }
    // else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    //   errorsMsg.email = "Email is invalid";
    // }

    ////////////////////////////////////////////////
    if (!formValues.password) {
      errorsMsg.password = "Password is required";
    } else if (formValues.password.length < 8) {
      errorsMsg.password = "Password must be at least 8 characters";
    }

    ////////////////////////////////////////////////////////////////////////////////

    // if (!formValues.repeatPassword) {
    //   errorsMsg.repeatPassword = "";
    // } else if (formValues.password !== formValues.repeatPassword) {
    //   errorsMsg.repeatPassword = "Password dosent match";
    // }

    setErrors(errorsMsg);
    setIsFormValid(Object.keys(errorsMsg).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formValues.username,
          password: formValues.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log(data);
          console.log("User registered successfully", data);
          setIsSignIn(!isSignIn); // You might want to navigate the user or change state
        })
        .catch((error) => {
          // Handle any errors during fetch
          console.error("There was an error registering the user!", error);
        });
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <>
      <View testID="register-screen" style={styles.container}>
        <Text>Register form</Text>
        <View style={styles.form}>
          <Text>Enter username</Text>
          <TextInput
            testID="username-input"
            accessibilityRole="text"
            style={styles.input}
            value={formValues.username}
            onChangeText={(value) => handleFormValueChanges("username", value)}
          />
          {/*<Text testID="email-error-text" style={styles.errorText}>*/}
          {/*  {emailErrorText}*/}
          {/*</Text>*/}
          <Text>{formValues.email}</Text>
          <Text>Enter password</Text>
          <TextInput
            testID="password-input"
            style={styles.input}
            value={formValues.password}
            onChangeText={(value) => handleFormValueChanges("password", value)}
          />
          {/*<Text style={styles.errorText}>{passwordErrorText}</Text>*/}
          {/*<Text>Repeat password</Text>*/}
          {/*<TextInput*/}
          {/*  testID="repeat-password-input"*/}
          {/*  style={styles.input}*/}
          {/*  value={formValues.repeatPassword}*/}
          {/*  onChangeText={(value) =>*/}
          {/*    handleFormValueChanges("repeatPassword", value)*/}
          {/*  }*/}
          {/*/>*/}
          {/*<Text style={styles.errorText}>{repeatPassword}</Text>*/}
          {Object.values(errors).map((error, index) => (
            <Text testID="error-text" style={styles.errorText} key={index}>
              {error}
            </Text>
          ))}
          <Button
            testID="btn"
            title="Press me"
            // onPress={() => console.log("Simple Button pressed")}
            onPress={() => handleSubmit()}
            style={styles.submit}
          />
        </View>
      </View>
    </>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
  },
  form: {
    minWidth: 400,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "red",
    padding: 20,
    display: "flex",
    gap: 10,
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errorText: {
    color: "red",
  },
  submit: {
    backgroundColor: "red",
  },
});
