import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TestScreen from "./screens/TestScreen";
import GeolocationScreen from "./screens/GeolocationScreen";
import UnitsScreen from "./screens/unitScreens/UnitsScreen";
import UnitsListScreen from "./screens/unitScreens/UnitsListScreen";
import CreateUnitScreen from "./screens/unitScreens/CreateUnitScreen";
import HandleUnitScreen from "./screens/unitScreens/HandleUnitScreen";

const Stack = createNativeStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* Menu Screens */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Units" component={UnitsScreen} />
          {/* Unit Screens */}
          <Stack.Screen name="UnitsList" component={UnitsListScreen} />
          <Stack.Screen name="UnitCreate" component={CreateUnitScreen} />
          <Stack.Screen name="UnitHandle" component={HandleUnitScreen} />
          {/* Other Screens */}
          <Stack.Screen name="Geolocation" component={GeolocationScreen} />
          <Stack.Screen
            name="Test"
            component={TestScreen}
            initialParams={{ measurementId: 2 }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
