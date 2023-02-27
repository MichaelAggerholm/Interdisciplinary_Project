import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeComponent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('UnitMenu')}>
        <Text>Enheder</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MeasurementMenu')}>
        <Text>Målinger</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeComponent;