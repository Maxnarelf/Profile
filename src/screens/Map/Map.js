import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import MapView, {
  Callout, Circle, Marker, Polygon
} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Map = () => {
  const styles = StyleSheet.create({
    body: {
      flex: 1,

      marginTop: 0

    },
    text: {
      fontSize: 40,
      margin: 10,
    },
    map: {
      width: '100%',
      height: '100%'
    },
    search: {
      flex: 0,
      position: 'absolute',
      width: '100%',
      zIndex: 1
    },
    list: {
      backgroundColor: 'white'
    }
  });

  const [mark, setMark] = useState({
    latitude: 50.44958351289179,
    longitude: 30.474308627014764,
  });
  const [region, setRegion] = useState({
    latitude: 50.46116756944076,
    longitude: 30.48364849121379,
    // latitude: 50.44958351289179,
    // longitude: 30.474308627014764,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [poly] = useState([
    { name: '1', latitude: 50.45790374769252, longitude: 30.39597019632003 },
    { name: '2', latitude: 50.48641914653826, longitude: 30.39597019632003 },
    { name: '3', latitude: 50.47746213850097, longitude: 30.413307995988095 },
    { name: '4', latitude: 50.47658819317168, longitude: 30.42927250459334 },
    { name: '5', latitude: 50.486200703285654, longitude: 30.43540939917483 },
    { name: '6', latitude: 50.48150392578362, longitude: 30.475234839347635 },
    { name: '7', latitude: 50.47243673251052, longitude: 30.49497589837563 },
    { name: '8', latitude: 50.46839417019958, longitude: 30.502872321986825 },
    { name: '9', latitude: 50.45937910416574, longitude: 30.519180152646936 },
    { name: '10', latitude: 50.45746659649633, longitude: 30.52741989860501 },
    { name: '11', latitude: 50.45238441472344, longitude: 30.527677390679287 },
    { name: '12', latitude: 50.43948524460585, longitude: 30.516776892868183 },
    { name: '13', latitude: 50.438665263174016, longitude: 30.49394592931459 },
    { name: '14', latitude: 50.44708306263936, longitude: 30.481929632910173 },
    { name: '15', latitude: 50.44653649773572, longitude: 30.467080923293466 },
    { name: '16', latitude: 50.451018143612295, longitude: 30.466737600961338 },
    { name: '17', latitude: 50.4589966088483, longitude: 30.41901573766991 },
  ]);
  return (
    <View style={styles.body}>

      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails
        GooglePlacesSearchQuery={{
          rankby: 'distance'
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: 'AIzaSyDYnjegLhuYHNATdkRMVB9aBcj3WvjwMh0',
          language: 'en',
          components: 'country: us',
          types: 'establishment',
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`
        }}
        styles={{
          container: {
            flex: 0,
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            backgroundColor: 'white'
          },
          // listView: {
          //   backgroundColor: 'white'
          // }
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 50.44958351289179,
          longitude: 30.474308627014764,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{
          latitude: region.latitude,
          longitude: region.longitude,

        }}
        >
          <Callout>
            <Text>Metro</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 50.44958351289179,
            longitude: 30.474308627014764,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          draggable
          onDragStart={(e) => {
            console.log('Drag start', e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setMark({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
          pinColor="blue"
        >
          <Callout>
            <Text>I`m here</Text>
          </Callout>
        </Marker>
        <Circle
          center={mark}
          radius={100}
        />
        <Polygon
          coordinates={poly}
          fillColor="rgba(130, 200, 220, 0.3)"
          strokeWidth={2}
          strokeColor="gray"
        />

      </MapView>

    </View>
  );
};

export default Map;
