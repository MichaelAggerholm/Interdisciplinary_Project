import React, { Component } from "react";
import { View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
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
    hardwareUnitTypes: [],
    hardwarePlacements: [],
  };

  async componentDidMount() {
    await this.getHardwareUnitTypes();
    await this.getHardwarePlacements();
  }

  async getHardwareUnitTypes() {
    const url = "/api/hardwareUnitType";
    const method = "GET";

    try {
      const response = await this.api.request(method, url);
      const data = response.data;
      this.setState({ hardwareUnitTypes: data });
    } catch (error) {
      console.error("GET hardwareUnitTypes fejlede! ", error);
    }
  }

  async getHardwarePlacements() {
    const url = "/api/hardwarePlacement";
    const method = "GET";

    try {
      const response = await this.api.request(method, url);
      const data = response.data;
      this.setState({ hardwarePlacements: data });
    } catch (error) {
      console.error("GET hardwarePlacements fejlede! ", error);
    }
  }

  handleNameChange = (name) => {
    this.setState({ name });
  };

  handleHardwareUnitTypeChange = (selectedItem, index) => {
    const selectedHardwareUnitType = this.state.hardwareUnitTypes[index];
    this.setState({
      hardwareUnitTypeId: selectedHardwareUnitType.id,
    });
  };

  handleHardwarePlacementChange = (selectedItem, index) => {
    const selectedHardwarePlacement = this.state.hardwarePlacements[index];
    this.setState({
      hardwarePlacementId: selectedHardwarePlacement.id,
    });
  };

  handleEditUnit = async () => {
    const { name, hardwareUnitTypeId, hardwarePlacementId } = this.state;
    const { route } = this.props;
    const { unitId } = route.params;

    const url = `/api/hardwareUnit/${unitId}`;
    const method = "PUT";
    const body = { name, hardwareUnitTypeId, hardwarePlacementId };

    try {
      const response = await this.api.request(method, url, body);
      const status = response?.response?.status || response?.status;
      const successMessage = status === 200 ? "Enhed redigeret!" : null;
      const errorMessage = successMessage
        ? null
        : "Det lykkedes ikke at redigere enhed!";
      this.setState({ successMessage, errorMessage });
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteUnit = async () => {
    const { route } = this.props;
    const { unitId } = route.params;

    const url = `/api/hardwareUnit/${unitId}`;
    const method = "DELETE";
    const body = {};

    try {
      const response = await this.api.request(method, url, body);
      const status = response?.response?.status || response?.status;
      const successMessage = status === 200 ? "Enhed slettet!" : null;
      const errorMessage = successMessage
        ? null
        : "Det lykkedes ikke at slette enhed!";
      this.setState({ successMessage, errorMessage });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { navigation, route } = this.props;
    const { unitId, unitName, unitType, unitPlacement } = route.params;
    const {
      name,
      hardwareUnitTypeId,
      hardwarePlacementId,
      hardwareUnitTypes,
      hardwarePlacements,
      successMessage,
      errorMessage,
    } = this.state;

    // console.log(unitType);
    // console.log(unitPlacement);

    const hardwareUnitTypeOptions = hardwareUnitTypes.map((unitType) => {
      // console.log(unitType.name);
      return {
        id: unitType.id,
        name: unitType.name,
      };
    });

    const hardwarePlacementOptions = hardwarePlacements.map((unitPlacement) => {
      // console.log(unitPlacement.name);
      return {
        id: unitPlacement.id,
        name: unitPlacement.name,
      };
    });

    return (
      <View style={commonStyles.container}>
        <Text>Du håndterer enhed med id: {unitId}</Text>

        <TextInputField
          placeholder={unitName}
          onChangeText={this.handleNameChange}
          value={name}
        />

        <SelectDropdown
          data={hardwareUnitTypeOptions}
          defaultValueByIndex={hardwareUnitTypes.findIndex(
            (item) => item.name === unitType
          )}
          onSelect={this.handleHardwareUnitTypeChange}
          buttonTextAfterSelection={(selectedItem, index) => selectedItem.name}
          rowTextForSelection={(item, index) => item.name}
        />

        <SelectDropdown
          data={hardwarePlacementOptions}
          defaultValueByIndex={hardwarePlacements.findIndex(
            (item) => item.name === unitPlacement
          )}
          onSelect={this.handleHardwarePlacementChange}
          buttonTextAfterSelection={(selectedItem, index) => selectedItem.name}
          rowTextForSelection={(item, index) => item.name}
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
