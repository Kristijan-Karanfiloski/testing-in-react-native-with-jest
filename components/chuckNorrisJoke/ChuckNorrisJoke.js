import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import ChuckPng from "../../assets/chucknorris_logo_coloured_small.png";
import { useState } from "react";

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data);
    setJoke(data);
  };

  const handleOnClickNewJoke = () => {
    fetchJoke().catch((error) => {
      console.error("Error in the hendleOnClcikNewJoke", error);
    });
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
