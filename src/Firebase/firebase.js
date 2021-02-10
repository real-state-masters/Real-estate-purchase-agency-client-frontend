
import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyAYIIcJv5fOxgxINnMIWAHd1PB7q270V6I",
    authDomain: "real-estate-agency-client-api.firebaseapp.com",
    projectId: "real-estate-agency-client-api",
    storageBucket: "real-estate-agency-client-api.appspot.com",
    messagingSenderId: "225351397540",
    appId: "1:225351397540:web:8aae696695fdfdd3493631",
    measurementId: "G-9ZSHE9N0EV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;