import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [username, setUsername] = useState("");
  const a = 3;
  const b = 3;
  // console.log("Before the on press", showParagraph);

  useEffect(() => {
    validateInput();
  }, [username]);

  const validateInput = () => {
    let error = "";

    if (!username) {
      error = "Please enter a username";
    } else if (username.length < 4) {
      error = "Needs to be 4 characters or more";
    }

    setErrorText(error);
    setIsInputValid(!error);
  };

  const handleInputTextChange = (text) => {
    setUsername(text);
  };

  const onPressShowParagraph = () => {
    console.log("Pressed");

    if (isInputValid) {
      console.log("Username is valid");
      // setErrorText("");
      setShowParagraph(!showParagraph);
    } else {
      console.log("Username input is not valid");
    }

    // console.log("After the on press", showParagraph);
  };

  //LOGICAL && iF THE CONDITION BEFORE THE && LIKE IN THIS CASE THE SHOW PARAGRAPH IS FALSE THE EXPRESSION AFTHER THE && IS SKIPED
  // IF THE EXPRESSION BEFORE THE && IS TRUE THEN THE EXPRESSION AFTHER THE && IS EVALUETED AND RENDERED
  return (
    <>
      <View style={styles.container}>
        <Text testID="mytestid">Hello</Text>
        <Text title="sum">{a + b}</Text>
        <View>
          <TextInput
            style={[styles.input, isInputValid ? styles.valid : styles.invalid]}
            placeholder="username"
            value={username}
            onChangeText={handleInputTextChange}
          />
        </View>
        {/*<Text>{username}</Text>*/}
        <View>
          {errorText && <Text style={{ color: "red" }}>{errorText}</Text>}
        </View>
        <Button title="Press" onPress={onPressShowParagraph} />
        {showParagraph && <Text>Hello there !!</Text>}
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 20,
  },
  input: {
    borderWidth: 2,
    padding: 7,
  },
  valid: {
    borderColor: "black",
  },
  invalid: {
    borderColor: "red",
  },
});
