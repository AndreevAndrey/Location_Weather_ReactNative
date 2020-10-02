import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ViewLocation = ({ lat, long, onRegionChange, region, onMapPress, address }) => (
  <View style={{ flex: 3 }}>
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        followUserLocation={true}
        onRegionChange={onRegionChange}
        onPress={onMapPress}>
        <Marker
          coordinate={{
            latitude: lat || -36.82339,
            longitude: long || -73.03569,
          }}>
        </Marker>
      </MapView>
    </View>
    <View style={{
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: 10
    }}>
      <Text style={{ color: '#537791' }}>Address: {address}</Text>
      <Text style={{ color: '#000' }}>
        Coordinates: {lat} / {long}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default ViewLocation;
