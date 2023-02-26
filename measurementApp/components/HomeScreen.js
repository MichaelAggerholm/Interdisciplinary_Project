import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Measurements')}>
        <Text>Go to Measurements</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Test')}>
        <Text>Go to Test</Text>
      </TouchableOpacity>
      {/*Test fetch 1 with params*/}
      <TouchableOpacity onPress={() => navigation.navigate('FetchOne')}>
        <Text>Go to Fetch 1</Text>
      </TouchableOpacity>
      {/*Test fetch 2 with params*/}
      <TouchableOpacity onPress={() => navigation.navigate('FetchTwo')}>
        <Text>Go to Fetch 2</Text>
      </TouchableOpacity>
      {/*Test fetch 3 with params*/}
      <TouchableOpacity onPress={() => navigation.navigate('FetchThree')}>
        <Text>Go to Fetch 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;