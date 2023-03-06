import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeMenuScreen from './screens/HomeMenuScreen';
import GeolocationScreen from './screens/GeolocationScreen';
// Unit screens
import UnitMenuScreen from './screens/unitScreens/UnitMenuScreen';
import FetchUnitsScreen from './screens/unitScreens/FetchUnitsScreen';
import CreateUnitScreen from './screens/unitScreens/CreateUnitScreen';
import EditUnitScreen from './screens/unitScreens/EditUnitScreen';
import DeleteUnitScreen from './screens/unitScreens/DeleteUnitScreen';
// Measurement screens
import MeasurementMenuScreen from './screens/measurementScreens/MeasurementMenuScreen';
import FetchMeasurementsScreen from './screens/measurementScreens/FetchMeasurementsScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const App = () => {
  const [screen, setScreen] = useState('HomeMenu');
  const apiUrl = 'http://10.161.44.227:8000';
  
  const renderScreen = () => {
    switch(screen) {
      case 'HomeMenu':
        return <HomeMenuScreen navigation={{ navigate: setScreen }} />;
      case 'UnitMenu':
        return <UnitMenuScreen navigation={{ 
          navigate: setScreen,
          goBack: () => setScreen('HomeMenu'), // Gå tilbage til hovedmenu
        }} />;
      case 'Geolocation':
        return <GeolocationScreen navigation={{ 
          navigate: setScreen, 
          goBack: () => setScreen('HomeMenu'), // Gå tilbage til hovedmenu
        }} />;
      case 'UnitList':
        return <FetchUnitsScreen navigation={{ 
          navigate: setScreen, 
          goBack: () => setScreen('UnitMenu'), // Gå tilbage til enhedsmenu
          fetchUrl: apiUrl + '/api/hardwareUnit'
        }} />;
      case 'UnitCreate':
        return <CreateUnitScreen navigation={{
          navigate: setScreen, 
          goBack: () => setScreen('UnitMenu'), // Gå tilbage til enhedsmenu
          postUrl: apiUrl + '/api/hardwareUnit'
        }} />;
      case 'UnitEdit':
        return <EditUnitScreen navigation={{ 
          navigate: setScreen, 
          goBack: () => setScreen('UnitMenu'), // Gå tilbage til enhedsmenu
          postUrl: apiUrl + '/api/hardwareUnit/',
          unitId: 12
        }} />;
      case 'UnitDelete':
        return <DeleteUnitScreen navigation={{ 
          navigate: setScreen, 
          goBack: () => setScreen('UnitMenu'), // Gå tilbage til enhedsmenu
          deleteUrl: apiUrl + '/api/hardwareUnit/',
          unitId: 3
        }} />;
      case 'MeasurementMenu':
        return <MeasurementMenuScreen navigation={{ 
          navigate: setScreen, 
          goBack: () => setScreen('HomeMenu'), // Gå tilbage til hovedmenu
        }} />;
      case 'MeasurementsUnitOne':
        return <FetchMeasurementsScreen navigation={{ 
          navigate: setScreen, 
          goBack: () => setScreen('MeasurementMenu'), // Gå tilbage til målingsmenu
          fetchUrl: apiUrl + '/api/measurement/',
          measurementId : 1
        }} />;
      case 'MeasurementsUnitTwo':
        return <FetchMeasurementsScreen navigation={{ 
          navigate: setScreen, 
          goBack: () => setScreen('MeasurementMenu'), // Gå tilbage til målingsmenu
          fetchUrl: apiUrl + '/api/measurement/',
          measurementId : 2
        }} />;
      default:
        return <HomeMenuScreen navigation={{ navigate: setScreen }} />;
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