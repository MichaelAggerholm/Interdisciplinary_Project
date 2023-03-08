/*import React from "react";
import { View, Text, Button } from "react-native";

class PostData extends React.Component {
  state = {
    isLoading: false,
    error: null,
    successMessage: null,
  };

  handlePostData = async () => {
    const { postUrl, body, successMessage } = this.props;

    try {
      this.setState({ isLoading: true });

      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Error posting data");
      }

      this.setState({ isLoading: false, successMessage });
    } catch (error) {
      this.setState({ isLoading: false, error: error.message });
    }
  };

  render() {
    const { isLoading, error, successMessage } = this.state;

    return (
      <View>
        <Button
          title="Create Unit"
          onPress={this.handlePostData}
          disabled={isLoading}
        />
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        {successMessage && <Text>{successMessage}</Text>}
      </View>
    );
  }
}

export default PostData;
*/
