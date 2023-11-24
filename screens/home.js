import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";

const Home = () => {
  // const [fontsLoaded] = useFonts({
  //   Nunito_400Regular,
  // });

  const [fontsLoaded] = useFonts({
    "Nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  console.log(fontsLoaded);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontFamily: " Nunito-regular", fontSize: 20 }}>
          Home Screen
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 26,
  },
});

export default Home;
