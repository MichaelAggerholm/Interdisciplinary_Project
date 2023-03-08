import React from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../../components/Styles";
import Btn from "../../components/Btn";

export default class UnitsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Enhedsmenu</Text>
        <Btn
          text="Enhedsliste"
          onPress={() => navigation.navigate("UnitsList")}
        />
        <Btn
          text="Opret enhed"
          onPress={() => navigation.navigate("UnitCreate")}
        />
        <Btn
          text="Gå tilbage hovedmenu"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}
