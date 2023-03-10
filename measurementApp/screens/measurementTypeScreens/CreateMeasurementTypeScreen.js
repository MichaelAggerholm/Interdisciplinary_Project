import React, { Component } from "react";
import { Button, TextInput, View, Text } from "react-native";
import TextInputField from "../../components/TextInputField";
import { commonStyles } from "../../components/Styles";
import Api from "../../components/Api";
import Btn from "../../components/Btn";

class CreateMeasurementTypeScreen extends Component {
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

  handleCreateUnit = async () => {
    const { name, hardwareUnitTypeId, hardwarePlacementId } = this.state;
    const url = "/api/hardwareUnit";
    const method = "POST";
    const body = {
      name,
      hardwareUnitTypeId,
      hardwarePlacementId,
    };

    try {
      const response = await this.api.request(method, url, body);
      if (response && response.status === 200) {
        this.setState({
          successMessage: "Enhed oprettet!",
        });
      } else {
        this.setState({
          errorMessage: "Det lykkedes ikke at oprette enhed!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { successMessage, errorMessage } = this.state;
    const { navigation } = this.props;

    return (
      <View style={commonStyles.container}>
        <TextInputField
          placeholder="Name"
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
        <Btn text="Opret enhed" onPress={this.handleCreateUnit} />
        {successMessage && <Text>{successMessage}</Text>}
        {errorMessage && <Text>{errorMessage}</Text>}
        <Btn text="Gå tilbage" onPress={() => navigation.navigate("Units")} />
        <Api ref={(api) => (this.api = api)} />
      </View>
    );
  }
}

export default CreateMeasurementTypeScreen;
