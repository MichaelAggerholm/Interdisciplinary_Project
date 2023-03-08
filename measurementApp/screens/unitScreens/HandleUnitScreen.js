import React, { Component } from "react";
import { View, Text } from "react-native";
import TextInputField from "../../components/TextInputField";
import { commonStyles } from "../../components/Styles";
import Api from "../../components/Api";
import Btn from "../../components/Btn";

class HandleUnitScreen extends Component {
  state = {
    name: "",
    hardwareUnitTypeId: "",
    hardwarePlacementId: "",
    successMessage: null,
    errorMessage: null,
  };

  handleNameChange = (name) => {
    this.setState({ name });
  };

  handleHardwareUnitTypeIdChange = (hardwareUnitTypeId) => {
    this.setState({ hardwareUnitTypeId });
  };

  handleHardwarePlacementIdChange = (hardwarePlacementId) => {
    this.setState({ hardwarePlacementId });
  };

  handleEditUnit = async () => {
    const { name, hardwareUnitTypeId, hardwarePlacementId } = this.state;
    const { route } = this.props;
    const { unitId } = route.params;

    const url = "/api/hardwareUnit/" + unitId;
    const method = "PUT";
    const body = {
      name,
      hardwareUnitTypeId,
      hardwarePlacementId,
    };

    try {
      const response = await this.api.request(method, url, body);
      if (response && response.status === 200) {
        this.setState({
          successMessage: "Enhed redigeret!",
        });
      } else {
        this.setState({
          errorMessage: "Det lykkedes ikke at redigere enhed!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteUnit = async () => {
    const { route } = this.props;
    const { unitId } = route.params;

    const url = "/api/hardwareUnit/" + unitId;
    const method = "DELETE";
    const body = {};

    try {
      const response = await this.api.request(method, url, body);
      if (response && response.status === 200) {
        this.setState({
          successMessage: "Enhed Slettet!",
        });
      } else {
        this.setState({
          errorMessage: "Det lykkedes ikke at slette enhed!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { successMessage, errorMessage } = this.state;
    const { navigation, route } = this.props;
    const { unitId, unitName } = route.params;

    return (
      <View style={commonStyles.container}>
        <Text>Du håndterer enhed med id: {unitId}</Text>

        <TextInputField
          placeholder={unitName}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <TextInputField
          placeholder="Hardware Unit Type ID"
          onChangeText={this.handleHardwareUnitTypeIdChange}
          value={this.state.hardwareUnitTypeId}
        />
        <TextInputField
          placeholder="Hardware Placement ID"
          onChangeText={this.handleHardwarePlacementIdChange}
          value={this.state.hardwarePlacementId}
        />
        <Btn text="Rediger enhed" onPress={this.handleEditUnit} />
        {successMessage && <Text>{successMessage}</Text>}
        {errorMessage && <Text>{errorMessage}</Text>}
        <Btn text="Slet enhed" onPress={this.handleDeleteUnit} />
        <Btn
          text="Gå tilbage"
          onPress={() => navigation.navigate("UnitsList")}
        />
        <Api ref={(api) => (this.api = api)} />
      </View>
    );
  }
}

export default HandleUnitScreen;
