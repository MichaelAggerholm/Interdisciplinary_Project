import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Measurements')}>
        <Text>Go to Measurements</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;