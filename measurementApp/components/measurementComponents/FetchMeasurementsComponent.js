import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc'
  }
});

class FetchMeasurementsComponent extends React.Component {
  state = {
    isLoading: true,
    dataSource: []
  };

  componentDidMount() {
    this.fetchData(); // Fetch data on component mount

    this.interval = setInterval(() => {
      this.fetchData();
    }, 5000); // Fetch data every 5 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData() {
    var params = {
      method: 'GET',
      headers: {
        "cache-control": 'no-cache',
        pragma: 'no-cache'
      }
    };

    // fetch URL and id as params from app.js
    fetch(this.props.navigation.fetchUrl + this.props.navigation.measurementId, params)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { navigation } = this.props;

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let measurements = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <Text>{val.hardwareUnit} - {val.measurementType} : {val.value}</Text>
          </View>
        );
      });

      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{marginTop: 20}}>Tilbage</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Measurements</Text>
          {/* Display the latest 5 measurements from API */}
          {measurements.slice(Math.max(measurements.length - 5, 0))}
        </View>
      );
    }
  }
}
export default FetchMeasurementsComponent;