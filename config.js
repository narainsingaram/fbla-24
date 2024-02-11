import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7sGBgz70e3BY-u6PtZemvUqeWdKldgzg",
  authDomain: "nexus-connect-3c581.firebaseapp.com",
  databaseURL: "https://nexus-connect-3c581-default-rtdb.firebaseio.com",
  projectId: "nexus-connect-3c581",
  storageBucket: "nexus-connect-3c581.appspot.com",
  messagingSenderId: "722221540651",
  appId: "1:722221540651:web:20e11062f4332f1e50516e",
  measurementId: "G-QT17FE1SPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app); // Initialize Firestore database

export { app,database, };    
