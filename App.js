
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      style={{ height: '100%' }}>

    </MapView>

  );
}

