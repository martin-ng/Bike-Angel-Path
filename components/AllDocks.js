import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

// class AllDocks extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HomePage Screen</Text>
//       </View>
//     );
//   }
// }

const AllDocks = props => {
  return (
    <View style={styles.container}>
      <Text>HomePage Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AllDocks;
