import React from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../../components/Styles";
import Btn from "../../components/Btn";

export default class MeasurementTypesScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Målingstype menu</Text>
        <Btn
          text="Målingstypeliste"
          onPress={() => navigation.navigate("MeasurementTypesList")}
        />
        <Btn
          text="Opret Målingstype"
          onPress={() => navigation.navigate("MeasurementTypeCreate")}
        />
        <Btn
          text="Gå tilbage hovedmenu"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}
