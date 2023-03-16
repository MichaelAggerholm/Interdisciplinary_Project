import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { commonStyles } from "../../components/Styles";
import Api from "../../components/Api";
import Btn from "../../components/Btn";

class MeasurementsListScreen extends Component {
  renderData = (data) => {
    const { navigation } = this.props;

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Btn
            text={
              item.hardwareUnit +
              " - " +
              item.measurementType +
              " : " +
              item.value +
              "°"
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
        <Text>Seneste målinger fra denne enhed:</Text>
        <View style={{ width: "100%", height: "50%", margin: "10%" }}>
          <Api
            renderItem={this.renderData}
            url="/api/measurement"
            method="GET"
          />
        </View>
        <Btn text="Gå tilbage" onPress={() => navigation.navigate("Units")} />
      </View>
    );
  }
}

export default MeasurementsListScreen;
