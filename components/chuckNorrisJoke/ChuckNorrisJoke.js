import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import ChuckPng from "../../assets/chucknorris_logo_coloured_small.png";
import { useState } from "react";
import ClosureInFunctions from "../testing-functions/ClosureInFunctions";

export const fetchJoke = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data);

    return data;
  } catch (e) {
    //OVOJ RETURN SO UNDEFINED TREBA DA E IST  SO MOCK SO PRAVAM VO TEST AKO NAPRAVI RETURN NULL TESTOT KE NAPRAI FAIL
    return undefined;
  }
};

const ChuckNorrisJoke = ({ onItemPress }) => {
  const [joke, setJoke] = useState("");

  // console.log("DATA BEFORE CLICKING THE BUTTON :", joke);

  const handleOnClickNewJoke = async () => {
    const data = await fetchJoke();
    setJoke(data);
    // fetchJoke().catch((error) => {
    //   console.error("Error in the handleOnClickNewJoke", error);
    //   // throw new Error("API error");
    // });
  };

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
        <View>
          <ClosureInFunctions />
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
