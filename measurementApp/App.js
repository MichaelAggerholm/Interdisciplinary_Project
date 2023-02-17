import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {
    this.fetchData(); // Hent data ved start

    var self = this;
    this.interval = setInterval(() => {
      self.fetchData();
    }, 5000); // Hent data hvert femte sekund
  }

  fetchData() {
    var params = {
      method: 'GET',
      headers: {
        "cache-control": 'no-cache',
        pragma: 'no-cache',
      }
    };

    /*return fetch('http://192.168.1.54:8000/api/measurement', params)*/ 
    return fetch('http://10.161.193.98:8000/api/measurement', params)
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      }
    );
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      let measurements = this.state.dataSource.map((val, key) => {
        return  <View key={key} style={styles.item}>
                  <Text>{val.hardwareUnit} - {val.measurementType} : {val.value}</Text>
                </View>
      });

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Measurements</Text>
          {/* Display the latest 5 measurements from API */}
          {measurements.slice(Math.max(measurements.length - 5, 0))}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
