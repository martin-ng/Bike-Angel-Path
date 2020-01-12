import React from "react";
import { View, Text, StyleSheet } from "react-native";

class HeaderComp extends React.Component {
  render() {
    return <View style={StyleSheet.header}>{/* <DrawerTrigger /> */}</View>;
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: "whitesmoke"
  }
});

export default HeaderComp;
