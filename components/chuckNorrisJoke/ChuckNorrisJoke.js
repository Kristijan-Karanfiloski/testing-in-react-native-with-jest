import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import ChuckPng from "../../assets/chucknorris_logo_coloured_small.png";
import { useEffect, useState } from "react";

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState("");

  // console.log("DATA BEFORE CLICKING THE BUTTON :", joke);

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data);
    setJoke(data);
    return data;
  };

  const handleOnClickNewJoke = () => {
    fetchJoke().catch((error) => {
      console.error("Error in the handleOnClickNewJoke", error);
      // throw new Error("API error");
    });
  };

  const age = 21;
  const kiko = {
    age: 22,
  };

  const [output, setOutput] = useState("");

  const checkIfHeCanDrink = (legalAge, person) => {
    // let legalAgeToDrink = 21;

    let outputMessage = "";

    if (person.age < legalAge) {
      console.log("He cant drink");
      outputMessage = "He is Retarted";
    } else {
      console.log("You can drink motherfucker");
      outputMessage = "He is disabled";
    }

    setOutput(outputMessage);
  };

  useEffect(() => {
    checkIfHeCanDrink(age, kiko);
    calcAge(1993);
  }, []);

  // console.log("DATA AFTER CLICKING THE BUTTON :", joke);
  // function exampleFunction() {
  //   console.log(arguments[0]);
  // }
  //
  // exampleFunction("Hello", "Worlds");
  //
  // const arrowFunction = (...args) => {
  //   console.log(args[0]);
  // };
  //
  // arrowFunction("FUCK", "YOU");

  function calcAge(birthYear) {
    console.log(firstName);
  }

  const firstName = "Kristijan";

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={ChuckPng} />
        <Text style={styles.title}>Get your daily Chuck Norris Joke</Text>
        <Pressable style={styles.button} onPress={handleOnClickNewJoke}>
          <Text>Joke Roll</Text>
        </Pressable>

        <View style={styles.phraseContainer}>
          <Text style={styles.jokeText}>{joke.value}</Text>
        </View>
      </View>
    </>
  );
};

export default ChuckNorrisJoke;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  img: {
    height: 150,
    width: 250,
  },
  title: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
  },
  button: {
    width: 100,
    backgroundColor: "lightblue",
    alignItems: "center",
    marginTop: 20,
    padding: 5,
    borderRadius: 7,
    cursor: "pointer",
  },
  phraseContainer: {
    marginTop: 15,
    padding: 10,
    // borderWidth: 2,
    // borderColor: "green",
  },
  jokeText: {
    fontSize: 15,
  },
});
