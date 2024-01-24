// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7sGBgz70e3BY-u6PtZemvUqeWdKldgzg",
  authDomain: "nexus-connect-3c581.firebaseapp.com",
  projectId: "nexus-connect-3c581",
  storageBucket: "nexus-connect-3c581.appspot.com",
  messagingSenderId: "722221540651",
  appId: "1:722221540651:web:20e11062f4332f1e50516e",
  measurementId: "G-QT17FE1SPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
export default db