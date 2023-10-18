import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFhEBuubV4FAC_MHiGfnNVnAWolVW5hTo",
  authDomain: "dots-59d09.firebaseapp.com",
  projectId: "dots-59d09",
  storageBucket: "dots-59d09.appspot.com",
  messagingSenderId: "692784347693",
  appId: "1:692784347693:web:aa4ad6da105ec11236d6a4",
  measurementId: "G-18120QNLXN"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth(); 
export const dbService = firebase.firestore();
export const storageService = firebase.storage();