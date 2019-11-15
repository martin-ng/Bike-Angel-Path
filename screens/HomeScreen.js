import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView from 'react-native-maps';

import * as Permissions from 'expo-permissions'

import { MonoText } from '../components/StyledText';


export default class HomeScreen extends Component {
  state = {
    latitude: null,
    longitude: null
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude} }) =>  this.setState({ latitude, longitude }),
      (error) => console.log('Error: ', error)
    )
  }

  render() {
    return (
      // <View style={styles.container}>
        // <MapView style={{ flex: 1}} initialRegion={{ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}></MapView>


        <MapView style={styles.map}
          initialRegion={{latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}></MapView>
        // <View style={styles.container}>
        //   <Text>testing</Text>
        // </View>

        //   <ScrollView
        //   style={styles.container}
        //   contentContainerStyle={styles.contentContainer}>
        //   <View style={styles.welcomeContainer}>
        //     <Image
        //       source={
        //         __DEV__
        //           ? require('../assets/images/robot-dev.png')
        //           : require('../assets/images/robot-prod.png')
        //       }
        //       style={styles.welcomeImage}
        //     />
        //   </View>
  
        //   <View style={styles.getStartedContainer}>
        //     <DevelopmentModeNotice />
  
        //     <Text style={styles.getStartedText}>Get started by opening</Text>
  
        //     <View
        //       style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        //       <MonoText>screens/HomeScreen.js</MonoText>
        //     </View>
  
        //     <Text style={styles.getStartedText}>
        //       Change this text and your app will automatically reload.
        //     </Text>
        //   </View>
  
        //   <View style={styles.helpContainer}>
        //     <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
        //       <Text style={styles.helpLinkText}>
        //         Help, it didn’t automatically reload!
        //       </Text>
        //     </TouchableOpacity>
        //   </View>
        // </ScrollView>
  
        // <View style={styles.tabBarInfoContainer}>
        //   <Text style={styles.tabBarInfoText}>
        //     This is a tab bar. You can edit it in:
        //   </Text>
  
        //   <View
        //     style={[styles.codeHighlightContainer, styles.navigationFilename]}>
        //     <MonoText style={styles.codeHighlightText}>
        //       navigation/MainTabNavigator.js
        //     </MonoText>
        //  </View>
        //   </View>
    );
  }
}

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
      /* <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change this text and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View> */
//     <Text>
//       HI JOON~!~!~!~

//     </Text>
//     </View>
//   );
// }

// HomeScreen.navigationOptions = {
//   header: null,
// };

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  example: {
    fontSize: 20,
    marginTop: 25
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
