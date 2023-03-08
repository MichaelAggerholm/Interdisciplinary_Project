import React from "react";
import { View, Text } from "react-native";
import Btn from "../components/Btn";
import { commonStyles } from "../components/Styles";

class TestScreen extends React.Component {
  render() {
    const { measurementId } = this.props.route.params;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={commonStyles.title}>Test Screen</Text>
        <Text>measurementId: {measurementId}</Text>
        <Btn
          text="Gå tilbage hovedmenu"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default TestScreen;
