import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAvcQQWtfLovU44ETvK6rfJGKjeG8vdNA",
    authDomain: "my-chow.firebaseapp.com",
    databaseURL: "https://my-chow.firebaseio.com",
    projectId: "my-chow",
    storageBucket: "my-chow.appspot.com",
    messagingSenderId: "130005201003",
    appId: "1:130005201003:web:3416440d46dba5bc19812e",
    measurementId: "G-1T616356QZ"
  };

firebase.initializeApp(firebaseConfig);
export const auth  = firebase.auth();
export const firestore = firebase.firestore();