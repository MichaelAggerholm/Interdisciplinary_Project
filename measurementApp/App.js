import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import MeasurementsScreen from './components/MeasurementsScreen';
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
      default:
        return <HomeScreen navigation={{ navigate: setScreen }} />;
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