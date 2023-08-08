import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/screens/Home";
import Pet from "./src/screens/pets/Pet";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";
import ForgotPassword from "./src/screens/auth/ForgotPassword";
import FlashMessage from "react-native-flash-message";

import { createContext } from 'react';

export const userContext = createContext({
  "_id": {
    "$oid": "64ce926c5eb9cdbbb0922b02"
  },
  "id": "025737ca-3214-4287-a22a-b889246a3c56",
  "username": "Egghead",
  "email": "Egg@egg.com",
  "password": {
    "$binary": {
      "base64": "JDJiJDEyJFYyWUJmZFR1c1FYaDlvWXFNZGpJSXUzZjFmRUFQTnhQckdDMHR3dE1HM3B0N1dDSXM1S1N5",
      "subType": "00"
    }
  },
  "created": {
    "$date": "2023-08-05T11:18:20.087Z"
  },
  "recovery_key": "",
  "recovery_key_expiration": {
    "$date": "2023-08-05T11:18:20.087Z"
  },
  "pet-slots": 1,
  "eggs": 1,
  "egg_hatchers": 1
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Pet" component={Pet} />
        {/* <Stack.Screen name="Sign In" component={SignIn} /> */}
        {/* <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};