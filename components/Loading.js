import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Button,
  ActivityIndicator
} from "react-native";

const Loading = () => {
  return (
    <View
      style={[styles.container, styles.horizontal, styles.activityIndicator]}
    >
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  activityIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Loading;
