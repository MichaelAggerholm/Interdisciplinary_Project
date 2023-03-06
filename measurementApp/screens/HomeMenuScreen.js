import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeComponent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Hovedmenu</Text>

      <TouchableOpacity onPress={() => navigation.navigate('UnitMenu')}>
        <Text>Enheder</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MeasurementMenu')}>
        <Text>Målinger</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Geolocation')}>
        <Text>Geolocation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeComponent;