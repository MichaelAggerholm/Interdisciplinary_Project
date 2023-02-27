import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';

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
class CreateUnitComponent extends React.Component {

  postData(postUrl) {
    fetch(postUrl, {
    method: 'POST', 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "hardwareUnitTypeId": 1,
      "hardwarePlacementId": 1,
      "name": "Enhed 31"
    })
  })
  .catch((error) => {
    console.log(error);
  })
}

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{marginTop: 20}}>Tilbage</Text>
        </TouchableOpacity>
        <Text>Test tekst her..</Text>
          <Button onPress={this.postData(this.props.navigation.postUrl)} title="Click MEEEE!!!!!!!"></Button>
      </View>
    );
  }
}
export default CreateUnitComponent;