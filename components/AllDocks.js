import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
  }

  componentDidMount() {
    // let dbRef = firebase
    // .database()
    // .ref("docks")
    // .once("value")
    // .then(function(snapshot) {
    //   let data = snapshot.val();
    //   // this.setState({
    //   //   docks: [...docks, data]
    //   // });
    //   let closestData = data[3232].closest;
    //   // console.log("closest: ", closestData);
    //   for (let dock in closestData) {
    //     let item = closestData[dock];
    //     this.setState({
    //       docks: [...this.state.docks, item]
    //     });
    //     console.log("state: ", this.state.docks);
    //     // console.log("each dock: ", closestData[dock]);
    //   }
    // });
  }

  findDock = () => {
    let dbFind = firebase
      .database()
      .ref("docks")
      .once("value")
      .then(snapshot => {
        let data = snapshot.val();
        // let dataById = data[id]
        let closestData = data[3232].closest;

        for (let dock in closestData) {
          let item = closestData[dock];
          this.setState({
            docks: [...this.state.docks, item]
          });
          console.log("current state: ", this.state.docks);
        }
        // this.setState({
        //   docks: closestData
        // });
      });

    console.log(this.state.docks);
  };

  // fetch("https://layer.bicyclesharing.net/map/v1/nyc/stations")
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({
  //         loading: false,
  //         dataSource: responseJson.features
  //       });
  //     })
  //     .catch(error => console.log(error)); //to catch the errors if any

  // findDock() {
  //   let dbFind = firebase
  //     .database()
  //     .ref("docks")
  //     .once("value")
  //     .then(function(snapshot) {
  //       let data = snapshot.val();
  //       // let dataById = data[id]
  //       let closestData = data[3232].closest;
  //       console.log(closestData);
  //     });
  // }

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
          onPress={this.findDock}
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
