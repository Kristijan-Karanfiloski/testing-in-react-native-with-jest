import { Image, View, StyleSheet } from "react-native";
import ChuckPng from "../../assets/chucknorris_logo_coloured_small.png";

const ChuckNorrisJoke = () => {
  return (
    <>
      <View>
        <Image style={styles.img} source={ChuckPng} />
      </View>
    </>
  );
};

export default ChuckNorrisJoke;

const styles = StyleSheet.create({
  container: {},
  img: {
    height: 150,
    width: 250,
  },
});
