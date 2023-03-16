import React from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../../components/Styles";
import Btn from "../../components/Btn";

export default class MeasurementsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>
          Her skal listes enheder, ved klik på enhed, skal man se enhedes
          målinger som liste, på measurementsListScreen
        </Text>
      </View>
    );
  }
}
