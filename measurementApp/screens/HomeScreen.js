import React from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../components/Styles";
import Btn from "../components/Btn";

export default class MainScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Home Screen</Text>
        <Btn text="Test" onPress={() => navigation.navigate("Test")} />
        <Btn text="Enheder" onPress={() => navigation.navigate("Units")} />
        <Btn
          text="Geolokation"
          onPress={() => navigation.navigate("Geolocation")}
        />
      </View>
    );
  }
}
