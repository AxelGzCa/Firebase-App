import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let fireConfig = {
  apiKey: "AIzaSyBEXEHI6NqQSnSbuEStYOqgKT86genCb1U",
  authDomain: "mercado-libre-5845f.firebaseapp.com",
  projectId: "mercado-libre-5845f",
  storageBucket: "mercado-libre-5845f.appspot.com",
  messagingSenderId: "299851710842",
  appId: "1:299851710842:web:128cf3f52c8a19feec16c3",
  measurementId: "G-ZY6099BCKB",
};

firebase.initializeApp(fireConfig);

export const db = firebase.firestore();
