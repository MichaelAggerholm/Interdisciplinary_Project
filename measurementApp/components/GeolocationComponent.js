import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

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

const GeolocationComponent = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getLocationAsync = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        const userLocation = await getCurrentPositionAsync({accuracy: 6});
        setLocation(userLocation);
      } catch (error) {
        setErrorMsg(error.message);
      }
    };
    getLocationAsync();
  }, []);

  return (
    <View style={styles.container}>
      {errorMsg ? <Text>{errorMsg}</Text> :
      location ? (
        <View>
          <Text style={styles.title}>Current Location:</Text>
          <Text style={styles.item}>Latitude: {location.coords.latitude}</Text>
          <Text style={styles.item}>Longitude: {location.coords.longitude}</Text>
        </View>
      ) : (
        <Text style={styles.title}>Waiting..</Text>
      )}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{marginTop: 20}}>Tilbage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GeolocationComponent;