import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

import { NavigationContainer } from "@react-navigation/native";

const screen={
    Home:{
        screen:Home
    },
    ReviewDetails:{
        screen:ReviewDetails
    }
}

export default  HomeStack=createStackNavigator(screen);

