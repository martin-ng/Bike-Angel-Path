import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Example Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Example;
