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
    fetchJoke();
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={ChuckPng} />
        <Pressable style={styles.button} onPress={handleOnClickNewJoke}>
          <Text>Roll</Text>
        </Pressable>

        <View style={styles.phraseContainer}>
          <Text>{joke.value}</Text>
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
  button: {
    width: 100,
    backgroundColor: "red",
    alignItems: "center",
    marginTop: 15,
    padding: 5,
    borderRadius: 7,
    cursor: "pointer",
  },
  phraseContainer: {
    padding: 7,
  },
});
