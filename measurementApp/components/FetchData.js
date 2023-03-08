/*import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

class FetchData extends Component {
  state = {
    isLoading: true,
    units: [],
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://192.168.1.54:8000/api/hardwareUnit");
      const units = await response.json();
      //console.log(units);
      this.setState({ isLoading: false, units, error: null });
    } catch (error) {
      this.setState({ isLoading: false, units: [], error });
    }
  };

  render() {
    const { isLoading, units, error } = this.state;
    const { renderItem, renderError, children } = this.props;

    if (isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    if (error) {
      return renderError ? renderError() : null;
    }

    return (
      <View>
        {renderItem(units)}
        {children}
      </View>
    );
  }
}

export default FetchData;
*/
