import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

class Api extends Component {
  state = {
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    const method = this.props.method;
    const url = this.props.url;
    this.request(method, url);
    this.interval = setInterval(() => this.request(method, url), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  request = async (method, url, body) => {
    try {
      const response = await fetch("http://192.168.1.54:8000" + url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      this.setState({ isLoading: false, data, error: null });
      return { response, data };
    } catch (error) {
      this.setState({ isLoading: false, data: [], error });
    }
  };

  render() {
    const { isLoading, data, error } = this.state;
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
        {renderItem && renderItem(data)}
        {children}
      </View>
    );
  }
}

export default Api;
