import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import from @expo/vector-icons

import WelcomeScreen from "../screens/WelcomeScreen";
import LogIn from "../screens/LoginScreen";
import SignUp from "../screens/SIgnupScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";
import HomeScreen from "../screens/HomeScreen";
import PersonScreen from "../screens/PersonScreen";
import MovieScreen from "../screens/MovieScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Saved") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1F1D2B",
          borderTopWidth: 0,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="HomeTab" component={HomeTabs} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Person" component={PersonScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
