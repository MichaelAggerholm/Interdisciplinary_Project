import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { commonStyles } from "../../components/Styles";
import Api from "../../components/Api";
import Btn from "../../components/Btn";

class MeasurementTypesListScreen extends Component {
  renderData = (data) => {
    const { navigation } = this.props;

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Btn
            text={item.name}
            onPress={() =>
              navigation.navigate("UnitHandle", {
                unitId: item.id,
                unitName: item.name,
                unitType: item.hardwareUnitTypeId,
                unitPlacement: item.hardwarePlacementId,
              })
            }
          />
        )}
      />
    );
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={commonStyles.container}>
        <Text>klik på en enhed, for enten at redigere, eller slette</Text>
        <View style={{ width: "100%", height: "50%", margin: "10%" }}>
          <Api
            renderItem={this.renderData}
            url="/api/hardwareUnit"
            method="GET"
          />
        </View>
        <Btn text="Gå tilbage" onPress={() => navigation.navigate("Units")} />
      </View>
    );
  }
}

export default MeasurementTypesListScreen;
