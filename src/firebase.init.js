// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA66mxGACt8dTuI2ZKqPVlTEpR_v6-o89Y",
  authDomain: "blogy-83e04.firebaseapp.com",
  projectId: "blogy-83e04",
  storageBucket: "blogy-83e04.appspot.com",
  messagingSenderId: "206781483889",
  appId: "1:206781483889:web:c7d53de3f160f27e6844d0",
  measurementId: "G-N5S86J9N4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;