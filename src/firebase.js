import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBtBAouj6eNxLQPOrPrJdSqOw16SpvaEGY",
    authDomain: "fir-messaging-1da67.firebaseapp.com",
    databaseURL: "https://fir-messaging-1da67.firebaseio.com",
    projectId: "fir-messaging-1da67",
    storageBucket: "fir-messaging-1da67.appspot.com",
    messagingSenderId: "882371787690",
    appId: "1:882371787690:web:f17f1026700f80263dc9d3"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;