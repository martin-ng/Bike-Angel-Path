// App.js

import React, { Component } from "react";
import * as Permissions from "expo-permissions";

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Button
} from "react-native";

import {
  DrawerItems,
  createAppContainer,
  front,
  back,
  slide
} from "react-navigation";

import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";

import { Container, Content, Header, Body, Icon } from "native-base";

import Loading from "./components/Loading";
import Index from "./components/Index";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
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
    if (this.state.loading) {
      return <Loading />;
    } else {
      return <Index data={this.state.dataSource} />;
    }
  }
}
