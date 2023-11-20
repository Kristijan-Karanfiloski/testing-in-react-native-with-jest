import { SafeAreaView, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import ChuckNorrisJoke from "./components/chuckNorrisJoke/ChuckNorrisJoke";
import DelectusAutAutemFetch from "./components/delectusAutAutemFetch/DelectusAutAutemFetch";

const Stack = createNativeStackNavigator();

// export const FormStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Form" component={RegisterForm}>
//       {() => <RegisterForm setIsSign={setIsSignIn} />}
//     </Stack.Screen>
//   </Stack.Navigator>
// );
// export const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={Home} />
//   </Stack.Navigator>
// );

export default function App() {
  // const [users, setUsers] = useState([]);

  // const onAddUser = (user) => {
  //   setUsers([...users, user]);
  //   console.log("USER FROM APP :", users);
  // };
  //
  // const handlePress = () => {
  //   console.log("Button Pressed!");
  // };

  // createNativeStackNavigator({
  //   HomeScreen: Home,
  //   RegisterForm: RegisterForm,
  // });

  const [isSignIn, setIsSignIn] = useState(true);

  // console.log("ISSIGNIN FROM APP :", isSignIn);

  // useEffect(() => {
  //   console.log("isSignIn updated to:", isSignIn);
  //   console.log(typeof setIsSignIn);
  // }, [isSignIn]);

  return (
    <>
      {/*<NavigationContainer>*/}
      {/*  {isSignIn ? (*/}
      {/*    <Stack.Navigator>*/}
      {/*      <Stack.Screen name="Form">*/}
      {/*        {() => (*/}
      {/*          <RegisterForm setIsSignIn={setIsSignIn} isSignIn={isSignIn} />*/}
      {/*        )}*/}
      {/*      </Stack.Screen>*/}
      {/*    </Stack.Navigator>*/}
      {/*  ) : (*/}
      {/*    <Stack.Navigator>*/}
      {/*      <Stack.Screen name="Home" component={Home} />*/}
      {/*    </Stack.Navigator>*/}
      {/*  )}*/}
      {/*</NavigationContainer>*/}
      <SafeAreaView style={styles.wrapper}>
        <ChuckNorrisJoke />
        <DelectusAutAutemFetch />
      </SafeAreaView>
      {/*<RegisterForm />*/}
      {/*<Home />*/}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 4,
    // borderColor: "blue",
    // justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    // backgroundColor: "yellow",
    padding: 10,
  },
});
