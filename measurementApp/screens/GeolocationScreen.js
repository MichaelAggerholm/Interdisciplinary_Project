import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { commonStyles } from "../components/Styles";
import Btn from "../components/Btn";

class GeolocationScreen extends Component {
  state = {
    location: null,
    errorMsg: null,
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        this.setState({ errorMsg: "Tilladelse afvist!" });
        return;
      }
      const userLocation = await getCurrentPositionAsync({ accuracy: 6 });
      this.setState({ location: userLocation });
    } catch (error) {
      this.setState({ errorMsg: error.message });
    }
  };

  render() {
    const { location, errorMsg } = this.state;
    const { navigation } = this.props;

    return (
      <View style={commonStyles.container}>
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : location ? (
          <View>
            <Text style={commonStyles.title}>Nuværende lokation:</Text>
            <Text style={commonStyles.item}>
              Breddegrad: {location.coords.latitude}
            </Text>
            <Text style={commonStyles.item}>
              Længdegrad: {location.coords.longitude}
            </Text>
          </View>
        ) : (
          <Text style={commonStyles.title}>Venter..</Text>
        )}
        <Btn
          text="Gå tilbage hovedmenu"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default GeolocationScreen;
