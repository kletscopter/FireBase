// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQpqiE2VZnv-vDpFbXcPRzOe3HcywNbMI",
  authDomain: "fir-f8e85.firebaseapp.com",
  projectId: "fir-f8e85",
  storageBucket: "fir-f8e85.appspot.com",
  messagingSenderId: "614300070618",
  appId: "1:614300070618:web:a3b55f3d6c75977addebe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //deze 2 lijnen zijn specifiek voor google toe te laten als authenticator
export const provider = new GoogleAuthProvider
export const db = getFirestore(app) //tell our app that we'll be using firestore, which will be used to get our data to the database