import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <>
      <View testID="home-screen" style={styles.wrapper}>
        <Text>This is the Home screen</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 4,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",

    // flexDirection: "column",
    // padding: 10,
  },
});
