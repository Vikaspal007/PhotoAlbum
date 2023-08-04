// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_IPxril9XrEN8raueXvDkRjX4PME1ciY",
  authDomain: "blogging-app-ea023.firebaseapp.com",
  projectId: "blogging-app-ea023",
  storageBucket: "blogging-app-ea023.appspot.com",
  messagingSenderId: "562199265127",
  appId: "1:562199265127:web:5c43d7ba920aa1da5379c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);