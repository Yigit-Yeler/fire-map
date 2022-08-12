
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import axios from 'axios';
export default function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events').then((res) => {
      setData(res.data.events)
      setLoading(false)
    })
  }, [])


  return (
    <View>
      {
        loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Yükleniyor...</Text>
          </View>
          :
          <MapView
            initialRegion={{
              latitude: 52.5,
              longitude: 19.2,
              latitudeDelta: 8.5,
              longitudeDelta: 8.5,
            }}
            style={{ height: '100%' }}>

            {
              data.slice(0, 200).map((item, index) => {
                return (

                  <Marker
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    coordinate={{
                      latitude: item.geometries[0].coordinates[1],
                      longitude: item.geometries[0].coordinates[0]
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 20 }}>🔥</Text>
                    </View>
                  </Marker>
                )
              })
            }

          </MapView>
      }

    </View>

  );
}

