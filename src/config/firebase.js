import firebase from 'firebase';



let firebaseConfig = {
    apiKey: xxxxxxxxxxxx,
    authDomain: xxxxxxxxxxxx,
    databaseURL: xxxxxxxxxxx,
    projectId: xxxxxxxxxxx,
    storageBucket: xxxxxxxxxxxx,
    messagingSenderId: xxxxxxxxxxxxx,
    appId: xxxxxxxxxxxx,
    measurementId: xxxxxxxxxxxxxx
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;

