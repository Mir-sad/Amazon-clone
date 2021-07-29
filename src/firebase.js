import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    
    apiKey: "AIzaSyBbTtG5cNhk88hyOqX-UIUmY8EVfUGFwLQ",
    authDomain: "clone-de189.firebaseapp.com",
    projectId: "clone-de189",
    storageBucket: "clone-de189.appspot.com",
    messagingSenderId: "420688732235",
    appId: "1:420688732235:web:10f4f455230b3d0a392dce",
    measurementId: "G-Z9HHYK5SN5"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth };