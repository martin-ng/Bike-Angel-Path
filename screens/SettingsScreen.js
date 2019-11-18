// import React from 'react';
// import { ExpoConfigView } from '@expo/samples';

// export default function SettingsScreen() {
//   /**
//    * Go ahead and delete ExpoConfigView and replace it with your content;
//    * we just wanted to give you a quick view of your config.
//    */
//   return <ExpoConfigView />;
// }

// SettingsScreen.navigationOptions = {
//   title: 'app.json',
// };

import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import MapView, { Marker } from "react-native-maps";

import * as Permissions from "expo-permissions";

import { MonoText } from "../components/StyledText";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
      // currentOption: allDocks,
      latitude: null,
      longitude: null
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, () =>
          console.log("State:", this.state)
        ),
      error => console.log("Error: ", error)
    );

    fetch("https://layer.bicyclesharing.net/map/v1/nyc/stations")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson.features
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  render() {
    const { latitude, longitude } = this.state;

    if (!this.state.loading) {
      const { dataSource } = this.state;

      let allDocks = dataSource.map(dock => (
        <MapView.Marker
          key={dock.geometry.coordinates}
          coordinate={{
            longitude: dock.geometry.coordinates[0],
            latitude: dock.geometry.coordinates[1]
          }}
          title={"title"}
          description={"description"}
        />
      ));

      let takeDocks = dataSource
        .filter(dock => dock.properties.bike_angels_action === "take")
        .map(dock => (
          <MapView.Marker
            key={dock.geometry.coordinates}
            coordinate={{
              longitude: dock.geometry.coordinates[0],
              latitude: dock.geometry.coordinates[1]
            }}
            title={"title"}
            description={"description"}
          />
        ));

      let giveDocks = dataSource
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
            <View style={styles.marker}>
              <Text style={styles.text}>{dock.properties.bike_angels_points}</Text>
            </View>
          </Marker>
        ));

      // title={`${dock.properties.bike_angels_action}`}
      // description={`${dock.properties.bike_angels_points} Pts`}

      return (
        // <Button>test</Button>
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
          {/* {allDocks} */}
          {/* {takeDocks} */}
          {giveDocks}
        </MapView>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading Map!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  marker: {
    backgroundColor: "#F17B0B",
    padding: 2,
    borderRadius: 5
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  example: {
    fontSize: 20,
    marginTop: 25
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
