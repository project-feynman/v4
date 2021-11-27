import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",
  authDomain: "feynman-mvp.firebaseapp.com",
  databaseURL: "https://feynman-mvp.firebaseio.com",
  projectId: "feynman-mvp",
  storageBucket: "feynman-mvp.appspot.com",
  messagingSenderId: "148720897081",
  appId: "1:148720897081:web:fdf5c605dcc74b56",
  measurementId: "G-DR4M7QGV7Z"
});

// firebase.analytics();
// firebase.analytics().logEvent("Opened website");
const db = getFirestore()
console.log('db =', db)

export { db }