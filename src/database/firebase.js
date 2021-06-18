
import firebase from "firebase";
const FirebaseConfig = {
  apiKey: "AIzaSyCx9RlRuqYrEDJCMENdDXVJgBAz3_Fp2Vg",
  authDomain: "my-app-f9e19.firebaseapp.com",
  projectId: "my-app-f9e19",
  storageBucket: "my-app-f9e19.appspot.com",
  messagingSenderId: "1765656494",
  appId: "1:1765656494:web:b0fbe425a2ad11c4f1ea3f",
};

let FireDb = firebase.initializeApp(FirebaseConfig);

export default FireDb.database().ref();

// import firebase from "firebase"
// const firebaseConfig = {
//     apiKey: "AIzaSyCzRUkmetmwFrEqvL-HMZNuWRFq3rUMs-4",
//     authDomain: "hello-c7e7a.firebaseapp.com",
//     databaseURL: "https://hello-c7e7a.firebaseio.com",
//     projectId: "hello-c7e7a",
//     storageBucket: "hello-c7e7a.appspot.com",
//     messagingSenderId: "1022778008563",
//     appId: "1:1022778008563:web:791884b13e82f5a64de886",
//     measurementId: "G-QDLR4PBRFR"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics()
// export default firebase;