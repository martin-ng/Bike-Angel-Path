import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

export default class AllDocks extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true,
    //   dataSource: [],
    //   latitude: null,
    //   longitude: null
    // };
  }

  render() {
    console.log("testing all docks: ", this.props.screenProps[0]);
    // console.log("testing all docks");
    return (
      <View style={styles.container}>
        <Text>HomePage Screen</Text>
      </View>
    );
  }
}

// export default AllDocks = props => {
//   let neutralDocks = props
//     .filter(dock => dock.properties.bike_angels_action === "neutral")
//     .map(dock => (
//       <Marker
//         key={dock.geometry.coordinates}
//         coordinate={{
//           longitude: dock.geometry.coordinates[0],
//           latitude: dock.geometry.coordinates[1]
//         }}
//         title={`${dock.properties.bike_angels_action}`}
//         description={`${dock.properties.bike_angels_points} Pts`}
//       >
//         <View style={styles.neutralMarker}>
//           <Text style={styles.text}>{dock.properties.bike_angels_points}</Text>
//         </View>
//       </Marker>
//     ));

//   let takeDocks = props
//     .filter(dock => dock.properties.bike_angels_action === "take")
//     .map(dock => (
//       <Marker
//         key={dock.geometry.coordinates}
//         coordinate={{
//           longitude: dock.geometry.coordinates[0],
//           latitude: dock.geometry.coordinates[1]
//         }}
//         title={`${dock.properties.bike_angels_action}`}
//         description={`${dock.properties.bike_angels_points} Pts`}
//       >
//         <View style={styles.marker}>
//           <Text style={styles.text}>{dock.properties.bike_angels_points}</Text>
//         </View>
//       </Marker>
//     ));

//   let giveDocks = props
//     .filter(dock => dock.properties.bike_angels_action === "give")
//     .map(dock => (
//       <Marker
//         key={dock.geometry.coordinates}
//         coordinate={{
//           longitude: dock.geometry.coordinates[0],
//           latitude: dock.geometry.coordinates[1]
//         }}
//         title={`${dock.properties.bike_angels_action}`}
//         description={`${dock.properties.bike_angels_points} Pts`}
//       >
//         <View style={styles.markerGive}>
//           <Text style={styles.text}>{dock.properties.bike_angels_points}</Text>
//         </View>
//       </Marker>
//     ));

//   return (
//     // <Button>test</Button>
//     <MapView
//       // showsUserLocation
//       style={{ flex: 1 }}
//       initialRegion={{
//         latitude: 40.691897,
//         longitude: -73.975474,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       }}
//     >
//       {/* {allDocks} */}
//       {neutralDocks}
//       {giveDocks}
//       {takeDocks}
//     </MapView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

// export default AllDocks;
