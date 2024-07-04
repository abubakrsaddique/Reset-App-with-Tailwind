import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAy80vrg6c-ZXmdmp8x0Z6uG-ob3wSLoeU",
  authDomain: "resetappnew.firebaseapp.com",
  projectId: "resetappnew",
  storageBucket: "resetappnew.appspot.com",
  messagingSenderId: "960376977066",
  appId: "1:960376977066:web:0808a6ca781ff1fd7682d3",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storageRef = firebase.storage().ref();

export { firebase, auth, firestore, storageRef };
