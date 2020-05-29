/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MapView, { Marker, AnimatedRegion } from 'react-native-maps';

class AnimatedMarkers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinate: new AnimatedRegion({
        latitude: 3.5876726,
        longitude: 98.6856444,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You Open Map at Home</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 3.5896309,
            longitude: 98.6892803,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  map: {
    height: 400,
    width: 400,
    // ...StyleSheet.absoluteFillObject,
  }
});

export default AnimatedMarkers;
