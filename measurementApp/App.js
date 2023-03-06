import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeMenuComponent from './components/HomeMenuComponent';
import GeolocationComponent from './components/GeolocationComponent';
// Unit components
import UnitMenuComponent from './components/unitComponents/UnitMenuComponent';
import FetchUnitsComponent from './components/unitComponents/FetchUnitsComponent';
import CreateUnitComponent from './components/unitComponents/CreateUnitComponent';
import EditUnitComponent from './components/unitComponents/EditUnitComponent';
import DeleteUnitComponent from './components/unitComponents/DeleteUnitComponent';
// Measurement components
import MeasurementMenuComponent from './components/measurementComponents/MeasurementMenuComponent';
import FetchMeasurementsComponent from './components/measurementComponents/FetchMeasurementsComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const App = () => {
  const [component, setComponent] = useState('HomeMenu');
  const apiUrl = 'http://192.168.1.54:8000';
  
  const renderComponent = () => {
    switch(component) {
      case 'HomeMenu':
        return <HomeMenuComponent navigation={{ navigate: setComponent }} />;
      case 'UnitMenu':
        return <UnitMenuComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('HomeMenu'), // Gå tilbage til hovedmenu
        }} />;
      case 'Geolocation':
        return <GeolocationComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('HomeMenu'), // Gå tilbage til hovedmenu
        }} />;
      case 'UnitList':
        return <FetchUnitsComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('UnitMenu'), // Gå tilbage til enhedsmenu
          fetchUrl: apiUrl + '/api/hardwareUnit'
        }} />;
      case 'UnitCreate':
        return <CreateUnitComponent navigation={{
          navigate: setComponent, 
          goBack: () => setComponent('UnitMenu'), // Gå tilbage til enhedsmenu
          postUrl: apiUrl + '/api/hardwareUnit'
        }} />;
      case 'UnitEdit':
        return <EditUnitComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('UnitMenu'), // Gå tilbage til enhedsmenu
          postUrl: apiUrl + '/api/hardwareUnit/',
          unitId: 12
        }} />;
      case 'UnitDelete':
        return <DeleteUnitComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('UnitMenu'), // Gå tilbage til enhedsmenu
          deleteUrl: apiUrl + '/api/hardwareUnit/',
          unitId: 3
        }} />;
      case 'MeasurementMenu':
        return <MeasurementMenuComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('HomeMenu'), // Gå tilbage til hovedmenu
        }} />;
      case 'MeasurementsUnitOne':
        return <FetchMeasurementsComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('MeasurementMenu'), // Gå tilbage til målingsmenu
          fetchUrl: apiUrl + '/api/measurement/',
          measurementId : 1
        }} />;
      case 'MeasurementsUnitTwo':
        return <FetchMeasurementsComponent navigation={{ 
          navigate: setComponent, 
          goBack: () => setComponent('MeasurementMenu'), // Gå tilbage til målingsmenu
          fetchUrl: apiUrl + '/api/measurement/',
          measurementId : 2
        }} />;
      default:
        return <HomeMenuComponent navigation={{ navigate: setComponent }} />;
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={{flex: 0.15, backgroundColor: '#06bcee', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Measurement App</Text>
      </View>
      {renderComponent()}
      <View style={{flex: 0.15, backgroundColor: '#06bcee'}} />
    </View>
  );
};

export default App;