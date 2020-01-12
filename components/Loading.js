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

const Loading = () => {
  return (
    <View>
      <Text>LOADING!!!</Text>
    </View>
  );
};
// const Loading = () => (
//   <View>
//     <Text>LOADING!!!</Text>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Loading;
