import { Alert, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState } from "react";

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleFormValueChanges = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const checkIfEmailIsValid = (formValues) => {
    if (formValues.email !== "" && formValues.email.includes("@")) {
      // setErrorText("You ve entered a valid email");
      // console.log("Please enter a valid email");
      setEmailErrorText("");
      console.log("You ve entered a valid email");
    } else {
      setEmailErrorText("Please enter a valid email");
    }
  };
  const checkIfPasswordIsValid = (formValues) => {
    if (formValues.password.length < 7) {
      // console.log("Please enter a valid email");
      // setErrorText("Please enter a valid password");
      setPasswordErrorText("Please enter a valid password");
    } else {
      setPasswordErrorText("");
    }
  };

  const checkIfPasswordsMatch = (formValues) => {
    if (
      formValues.password &&
      formValues.repeatPassword &&
      formValues.password === formValues.repeatPassword
    ) {
      setRepeatPassword("");
    } else if (!formValues.password || !formValues.repeatPassword) {
      // Optionally handle the case where one or both fields are empty
      setRepeatPassword("Passwords do not match");
    } else {
      setRepeatPassword("Passwords do not match");
    }
  };

  const handleSubmit = () => {
    checkIfEmailIsValid(formValues);
    checkIfPasswordIsValid(formValues);
    checkIfPasswordsMatch(formValues);
    console.log("Success");
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Register form</Text>
        <View style={styles.form}>
          <Text>Enter email</Text>
          <TextInput
            style={styles.input}
            value={formValues.email}
            onChangeText={(value) => handleFormValueChanges("email", value)}
          />
          <Text style={styles.errorText}>{emailErrorText}</Text>
          <Text>{formValues.email}</Text>
          <Text>Enter password</Text>
          <TextInput
            style={styles.input}
            value={formValues.password}
            onChangeText={(value) => handleFormValueChanges("password", value)}
          />
          <Text style={styles.errorText}>{passwordErrorText}</Text>
          <Text>Repeat password</Text>
          <TextInput
            style={styles.input}
            value={formValues.repeatPassword}
            onChangeText={(value) =>
              handleFormValueChanges("repeatPassword", value)
            }
          />
          <Text style={styles.errorText}>{repeatPassword}</Text>
          <Button
            title="Press me"
            // onPress={() => console.log("Simple Button pressed")}
            onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
});
