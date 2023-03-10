import React from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../../components/Styles";
import Btn from "../../components/Btn";

export default class LocationsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Placerings menu</Text>
        {/*<Btn
          text="Enhedstypeliste"
          onPress={() => navigation.navigate("UnitTypesList")}
        />
        <Btn
          text="Opret enhedstype"
          onPress={() => navigation.navigate("UnitTypeCreate")}
        />
        <Btn
          text="Gå tilbage hovedmenu"
          onPress={() => navigation.navigate("Home")}
    />*/}
      </View>
    );
  }
}
