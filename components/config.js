import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getDatabase} from"firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBtbt86NZAGdha9EibXs5N2UXdtRCJ25EA",
    authDomain: "tudiendict.firebaseapp.com",
    databaseURL: "https://tudiendict-default-rtdb.firebaseio.com",
    projectId: "tudiendict",
    storageBucket: "tudiendict.appspot.com",
    messagingSenderId: "344257519816",
    appId: "1:344257519816:web:a60248af82e0b1448585fd",
    measurementId: "G-QHEVM1KB3J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db=getDatabase(app);