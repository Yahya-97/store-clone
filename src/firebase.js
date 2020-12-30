import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu1sWQCeqyl_wqsKviROu1zpLgqsqnvdM",
  authDomain: "clone-293e6.firebaseapp.com",
  databaseURL: "https://clone-293e6.firebaseio.com",
  projectId: "clone-293e6",
  storageBucket: "clone-293e6.appspot.com",
  messagingSenderId: "884133472455",
  appId: "1:884133472455:web:0ecef6057137cb003776e2",
  measurementId: "G-SV28SCVQLY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { db, auth };
