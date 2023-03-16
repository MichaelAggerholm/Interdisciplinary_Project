import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Main menu Screens
import HomeScreen from "./screens/HomeScreen";
import TestScreen from "./screens/TestScreen";
import GeolocationScreen from "./screens/GeolocationScreen";
// Unit Screens
import UnitsScreen from "./screens/unitScreens/UnitsScreen";
import UnitsListScreen from "./screens/unitScreens/UnitsListScreen";
import CreateUnitScreen from "./screens/unitScreens/CreateUnitScreen";
import HandleUnitScreen from "./screens/unitScreens/HandleUnitScreen";
// Unittypes Screens
import UnitTypesScreen from "./screens/unitTypeScreens/UnitTypesScreen";
import UnitTypesListScreen from "./screens/unitTypeScreens/UnitTypesListScreen";
import CreateUnitTypeScreen from "./screens/unitTypeScreens/CreateUnitTypeScreen";
import HandleUnitTypeScreen from "./screens/unitTypeScreens/HandleUnitTypeScreen";
// Measurements Screens
import MeasurementsScreen from "./screens/measurementScreens/MeasurementsScreen";
import MeasurementsListScreen from "./screens/measurementScreens/MeasurementsListScreen";
// MeasurementTypes Screens
import MeasurementTypesScreen from "./screens/measurementTypeScreens/MeasurementTypesScreen";
import MeasurementTypesListScreen from "./screens/measurementTypeScreens/MeasurementTypesListScreen";
import CreateMeasurementTypeScreen from "./screens/measurementTypeScreens/CreateMeasurementTypeScreen";
import HandleMeasurementTypeScreen from "./screens/measurementTypeScreens/HandleMeasurementTypeScreen";
// Location Screens
import LocationsScreen from "./screens/locationScreens/LocationsScreen";
import LocationsListScreen from "./screens/locationScreens/LocationsListScreen";
import CreateLocationScreen from "./screens/locationScreens/LocationsScreen";
import HandleLocationScreen from "./screens/locationScreens/HandleLocationScreen";

const Stack = createNativeStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* Main menu Screens */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Geolocation" component={GeolocationScreen} />
          {/* measurement Screens */}
          <Stack.Screen
            name="Measurements"
            component={MeasurementsListScreen}
          />
          <Stack.Screen
            name="MeasurementsList"
            component={MeasurementsListScreen}
          />
          {/* MeasurementType Screens */}
          <Stack.Screen
            name="MeasurementTypes"
            component={MeasurementTypesScreen}
          />
          <Stack.Screen
            name="MeasurementTypesList"
            component={MeasurementTypesListScreen}
          />
          <Stack.Screen
            name="MeasurementTypeCreate"
            component={CreateMeasurementTypeScreen}
          />
          <Stack.Screen
            name="MeasurementTypeHandle"
            component={HandleMeasurementTypeScreen}
          />
          {/* Unit Screens */}
          <Stack.Screen name="Units" component={UnitsScreen} />
          <Stack.Screen name="UnitsList" component={UnitsListScreen} />
          <Stack.Screen name="UnitCreate" component={CreateUnitScreen} />
          <Stack.Screen name="UnitHandle" component={HandleUnitScreen} />
          {/* UnitType Screens */}
          <Stack.Screen name="UnitTypes" component={UnitTypesScreen} />
          <Stack.Screen name="UnitTypesList" component={UnitTypesListScreen} />
          <Stack.Screen
            name="UnitTypeCreate"
            component={CreateUnitTypeScreen}
          />
          <Stack.Screen
            name="UnitTypeHandle"
            component={HandleUnitTypeScreen}
          />
          {/* Location Screens */}
          <Stack.Screen name="Locations" component={LocationsScreen} />
          <Stack.Screen name="LocationsList" component={LocationsListScreen} />
          <Stack.Screen
            name="LocationCreate"
            component={CreateLocationScreen}
          />
          <Stack.Screen
            name="LocationHandle"
            component={HandleLocationScreen}
          />
          {/* Other Screens */}
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
