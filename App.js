import { SafeAreaView, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import PracticeCssInNative from "./components/tryingout-css-native/PracticeCssInNative";
import ReviewsApp from "./components/reviews-app/ReviewsApp";
import "react-native-gesture-handler";
import { UserProfile } from "./components/user-profile/UserProfile";

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
      {/*<SafeAreaView style={styles.wrapper}>*/}
      {/*  /!*<ChuckNorrisJoke />*!/*/}
      {/*  /!*<ModalTesting />*!/*/}
      {/*</SafeAreaView>*/}
      {/*<View style={styles.wrapper}>*/}
      {/*</View>*/}
      <ReviewsApp />
      <UserProfile />
      {/*<RegisterForm />*/}
      {/*<Home />*/}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    borderWidth: 4,
    // borderColor: "blue",
    // justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    // backgroundColor: "yellow",
    padding: 10,
  },
});
