import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOzEXGlonbvx5gDEbxFDrpxnbU2L3PUDE",
  authDomain: "theshirtcastelli.firebaseapp.com",
  projectId: "theshirtcastelli",
  storageBucket: "theshirtcastelli.appspot.com",
  messagingSenderId: "789599940830",
  appId: "1:789599940830:web:9e16cc2976ea17ed4b924f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
 
)
