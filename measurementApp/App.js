import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import MeasurementsScreen from './components/MeasurementsScreen';
import TestScreen from './components/TestScreen';
import FetchOneComponent from './components/FetchOneComponent';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const App = () => {
  const [screen, setScreen] = useState('Home');
  
  const renderScreen = () => {
    switch(screen) {
      case 'Home':
        return <HomeScreen navigation={{ navigate: setScreen }} />;
      case 'Measurements':
        return <MeasurementsScreen navigation={{ navigate: setScreen, goBack: () => setScreen('Home') }} />;
      case 'Test':
        return <TestScreen navigation={{ navigate: setScreen, goBack: () => setScreen('Home') }} />;
      // Test 1 with params 
      case 'FetchOne':
        return <FetchOneComponent navigation={{ navigate: setScreen, goBack: () => setScreen('Home'), testUrl: 'http://192.168.1.54:8000/api/measurement/', testId: 1 }} />;
      // Test 2 with params 
      case 'FetchTwo':
        return <FetchOneComponent navigation={{ navigate: setScreen, goBack: () => setScreen('Home'), testUrl: 'http://192.168.1.54:8000/api/measurement/', testId: 2 }} />;
      // Test 3 with params 
      case 'FetchThree':
        return <FetchOneComponent navigation={{ navigate: setScreen, goBack: () => setScreen('Home'), testUrl: 'http://192.168.1.54:8000/api/measurement/', testId: 3 }} />;
      default:
        return <HomeScreen navigation={{ navigate: setScreen }} />;
        // TODO: rename screens to components.. fuck that screen stuff. ITS COMPONENTS! make FetchAllComponent.js
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={{flex: 0.15, backgroundColor: '#06bcee', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Measurement App</Text>
      </View>
      {renderScreen()}
      <View style={{flex: 0.15, backgroundColor: '#06bcee'}} />
    </View>
  );
};

export default App;