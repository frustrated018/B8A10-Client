// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxpqTj_jbnFsnCC8kDXg4cHivO3Ed8dg4",
  authDomain: "clothing-cove.firebaseapp.com",
  projectId: "clothing-cove",
  storageBucket: "clothing-cove.appspot.com",
  messagingSenderId: "479588518515",
  appId: "1:479588518515:web:e814efd495678f0a457806"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);