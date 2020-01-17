// import React, { Component } from "react";
// import firebase from "firebase";

// class Fire extends Component {
//   constructor() {
//     // this.init();
//   }

//   // export const firebaseConfig = {
//   //     apiKey: "AIzaSyAmZW31LXG4IaSt0tQylAq7pXsA70akEbI",
//   //     authDomain: "bike-angel-path.firebaseapp.com",
//   //     databaseURL: "https://bike-angel-path.firebaseio.com",
//   //     projectId: "bike-angel-path",
//   //     storageBucket: "bike-angel-path.appspot.com",
//   //     messagingSenderId: "900765489821",
//   //     appId: "1:900765489821:web:f411a4c7a2a54dfb361274",
//   //     measurementId: "G-TBYSRGG8E6"
//   //   };

//   init = () => {
//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         apiKey: "AIzaSyAmZW31LXG4IaSt0tQylAq7pXsA70akEbI",
//         authDomain: "bike-angel-path.firebaseapp.com",
//         databaseURL: "https://bike-angel-path.firebaseio.com",
//         projectId: "bike-angel-path",
//         storageBucket: "bike-angel-path.appspot.com",
//         messagingSenderId: "900765489821",
//         appId: "1:900765489821:web:f411a4c7a2a54dfb361274",
//         measurementId: "G-TBYSRGG8E6"
//       });
//     }
//   };

//   get db() {
//     return firebase.database().ref("docks");
//   }
// }

// export default new Fire();
