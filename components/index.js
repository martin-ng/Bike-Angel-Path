import React, { Component } from "react";
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

import AllDocks from "./AllDocks";
import Example from "./Example";

class Index extends Component {
  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);
    return <AppNavigator />;
  }
}

const CustomDrawerContentComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../assets/no-image.png")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      ></Image>
    </View>
    <ScrollView>
      <DrawerNavigatorItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    "All Docks": AllDocks,
    Example: Example
  },
  {
    contentComponent: CustomDrawerContentComponent
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});

export default Index;
