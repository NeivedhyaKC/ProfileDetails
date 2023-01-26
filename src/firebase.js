// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBWiW0x6W9yBm6iKbDdgsEwKWCYtGjivA",
  authDomain: "profiledetails-1efd9.firebaseapp.com",
  projectId: "profiledetails-1efd9",
  storageBucket: "profiledetails-1efd9.appspot.com",
  messagingSenderId: "201010432783",
  appId: "1:201010432783:web:404c891b47a1c38eb08c7a",
  databaseURL: "https://profiledetails-1efd9-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);