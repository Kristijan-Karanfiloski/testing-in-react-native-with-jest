import { StyleSheet, View } from "react-native";
import RegisterForm from "./components/registerForm/RegisterForm";
import Home from "./components/registerForm/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("isSignIn updated to:", isSignIn);
    console.log(typeof setIsSignIn);
  }, [isSignIn]);

  return (
    <>
      <NavigationContainer>
        {/*<Stack.Navigator>*/}
        {/*  {isSignIn ? (*/}
        {/*    <Stack.Screen name="RegisterScreen">*/}
        {/*      {(props) => (*/}
        {/*        <RegisterForm*/}
        {/*          {...props}*/}
        {/*          isSignIn={isSignIn}*/}
        {/*          setIsSignIn={setIsSignIn}*/}
        {/*        />*/}
        {/*      )}*/}
        {/*    </Stack.Screen>*/}
        {/*  ) : (*/}
        {/*    // <Stack.Screen*/}
        {/*    //   name="RegisterScreen"*/}
        {/*    //   component={RegisterForm}*/}
        {/*    //   initialParams={{ isSignIn: isSignIn, setIsSignIn: setIsSignIn }}*/}
        {/*    // />*/}
        {/*    <Stack.Screen name="HomeScreen" component={Home} />*/}
        {/*  )}*/}
        {/*</Stack.Navigator>*/}
        {isSignIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Form">
              {() => (
                <RegisterForm setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      {/*<RegisterForm />*/}
      {/*<Home />*/}
    </>
  );
}

const styles = StyleSheet.create({
  // wrapper: {
  //   flex: 1,
  //   borderWidth: 4,
  //   borderColor: "blue",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // flexDirection: "column",
  //   backgroundColor: "yellow",
  //   padding: 10,
  // },
});
