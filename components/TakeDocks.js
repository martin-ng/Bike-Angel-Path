import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import MapView, { Marker } from "react-native-maps";
import HeaderComponent from "./navigation/HeaderComponent";

class TakeDocks extends Component {
  render() {
    let data = this.props.screenProps;

    let takeDocks = data
      .filter(dock => dock.properties.bike_angels_action === "take")
      .map(dock => (
        <Marker
          key={dock.geometry.coordinates}
          coordinate={{
            longitude: dock.geometry.coordinates[0],
            latitude: dock.geometry.coordinates[1]
          }}
          title={`${dock.properties.bike_angels_action}`}
          description={`${dock.properties.bike_angels_points} Pts`}
        >
          <View style={styles.marker}>
            <Text style={styles.text}>
              {dock.properties.bike_angels_points}
            </Text>
          </View>
        </Marker>
      ));

    return (
      <React.Fragment>
        <HeaderComponent />
        <MapView
          // showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 40.691897,
            longitude: -73.975474,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {takeDocks}
        </MapView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  marker: {
    backgroundColor: "#33B5FF",
    padding: 2,
    borderRadius: 5
  },
  markerGive: {
    backgroundColor: "#F17B0B",
    padding: 2,
    borderRadius: 5
  },
  neutralMarker: {
    backgroundColor: "black",
    padding: 2,
    borderRadius: 5
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "blue"
  },
  pinText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10
  }
});

export default TakeDocks;
