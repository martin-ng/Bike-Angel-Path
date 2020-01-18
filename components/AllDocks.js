import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import MapView, { Marker } from "react-native-maps";
import HeaderComponent from "./navigation/HeaderComponent";
import { firebaseConfig } from "./firebase/config";
import * as firebase from "firebase";
// import Fire from "./components/Fire";

firebase.initializeApp(firebaseConfig);

export default class AllDocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docks: [],
      loading: true
    };
    this.findDock = this.findDock.bind(this);
    this.findBestDock = this.findBestDock.bind(this);
    // this.button =  this.button.bind(this);
  }

  // refactor to take a dock's id and search for it in the db
  findDock = () => {
    let dbFind = firebase
      .database()
      .ref("docks")
      .once("value")
      .then(snapshot => {
        let data = snapshot.val();
        let closestData = data[3232].closest;

        for (let dock in closestData) {
          let item = closestData[dock];
          this.setState({
            docks: [...this.state.docks, item]
          });
        }
      });
    console.log(this.state.docks);

    this.findBestDock();
  };

  findBestDock = () => {
    let max = 0;
    console.log("Checking best dock array: ", this.state.docks);
  };

  button = points => {
    Alert.alert(`This dock offers ${points} points`, `Select this dock?`, [
      {
        text: "NO",
        onPress: () => console.warn("No Pressed"),
        style: "cancel"
      },
      // { text: "YES", onPress: () => console.warn("YES Pressed") }
      // { text: "YES", onPress: () => this.findBestDock() }
      { text: "YES", onPress: this.findBestDock }
    ]);
  };

  render() {
    // console.log("testing all docks: ", this.props.screenProps[0]);
    let data = this.props.screenProps;

    let neutralDocks = data
      .filter(dock => dock.properties.bike_angels_action === "neutral")
      .map(dock => (
        <Marker
          key={dock.geometry.coordinates}
          coordinate={{
            longitude: dock.geometry.coordinates[0],
            latitude: dock.geometry.coordinates[1]
          }}
          onPress={() => {
            this.button(dock.properties.bike_angels_points);
          }}
          title={`${dock.properties.bike_angels_action}`}
          description={`${dock.properties.bike_angels_points} Pts`}
        >
          <View style={styles.neutralMarker}>
            <Text style={styles.text}>
              {dock.properties.bike_angels_points}
            </Text>
          </View>
        </Marker>
      ));

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

    let giveDocks = data
      .filter(dock => dock.properties.bike_angels_action === "give")
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
          <View style={styles.markerGive}>
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
          {neutralDocks}
          {giveDocks}
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

// export default AllDocks;
