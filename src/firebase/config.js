import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMA8NnagzDohkTlCTLgX5nq3D29JUMAfE",
  authDomain: "livechatroom-3eb47.firebaseapp.com",
  projectId: "livechatroom-3eb47",
  storageBucket: "livechatroom-3eb47.appspot.com",
  messagingSenderId: "595064321642",
  appId: "1:595064321642:web:5e3fe40f053ed2861c7c13",
  measurementId: "G-HH9FPMTS84",
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timeStamp };
