import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyCLvaBaxvwuALnNVQ-IoBntNo5ptCBRvvo",
    authDomain: "fir-10c74.firebaseapp.com",
    databaseURL: "https://fir-10c74.firebaseio.com",
    projectId: "fir-10c74",
    storageBucket: "fir-10c74.appspot.com",
    messagingSenderId: "344045535043",
    appId: "1:344045535043:web:ac3fa10d5a25ede4b4b9f6",
    measurementId: "G-7EWSNPPPST"
  }
);
  // Initialize Firebase
 


  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
 

