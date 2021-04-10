import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3asTZBPso794G5IqaA7fClK5dA3l2qPY",
  authDomain: "crown-db-d0e91.firebaseapp.com",
  projectId: "crown-db-d0e91",
  storageBucket: "crown-db-d0e91.appspot.com",
  messagingSenderId: "437937522600",
  appId: "1:437937522600:web:87965082e8e9d3e8bd7f9d",
  measurementId: "G-82QWL2MCBM",
};

firebase.initializeApp(config); 

export const auth = firebase.auth();  
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;