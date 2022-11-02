// import firebase from "./firebase";
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: process.env.APP_KEY,
//   authDomain: "netflix-151df.firebaseapp.com",
//   projectId: "netflix-151df",
//   storageBucket: "netflix-151df.appspot.com",
//   messagingSenderId: "316700975498",
//   appId: "1:316700975498:web:15063159b205c1a349a873",
//   measurementId: "G-2ZGE63ES9F",
// };

const firebaseConfig = {
    apiKey: "AIzaSyDjOIa8oUmM09DBoBDVIVbjAvkfnZg1Dqc",
    authDomain: "bingeflix-d0695.firebaseapp.com",
    projectId: "bingeflix-d0695",
    storageBucket: "bingeflix-d0695.appspot.com",
    messagingSenderId: "995822321538",
    appId: "1:995822321538:web:558715b7a8deeda8f3599b",
    measurementId: "G-0WPZL3ZBD3"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
