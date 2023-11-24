import { View, Text, StyleSheet } from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { globalStyles } from "../styles/global";

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
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
          Home Screen
        </Text>
      </View>
    </>
  );
};



export default Home;
