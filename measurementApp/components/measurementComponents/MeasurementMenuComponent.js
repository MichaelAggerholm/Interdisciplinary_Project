import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const UnitComponent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 20 }}>Enhedsmenu</Text>

        <TouchableOpacity onPress={() => navigation.navigate('MeasurementsUnitOne')}>
        <Text>Enhed 1 - Målinger</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MeasurementsUnitTwo')}>
        <Text>Enhed 2 - Målinger</Text>
      </TouchableOpacity>
        
        {/* Gå tilbage til hovedmenu */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{marginTop: 20}}>Tilbage til hovedmenu</Text>
          </TouchableOpacity>
    </View>
  );
};

export default UnitComponent;