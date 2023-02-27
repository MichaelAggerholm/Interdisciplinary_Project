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

class DeleteUnitComponent extends React.Component {

  DeleteData(deleteUrl, unitId) {
    fetch(deleteUrl + unitId, {
    method: 'DELETE'
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
          <Button onPress={() => { this.DeleteData(this.props.navigation.deleteUrl, this.props.navigation.unitId) }} title="Click MEEEE!!!!!!!"></Button>
      </View>
    );
  }
}
export default DeleteUnitComponent;