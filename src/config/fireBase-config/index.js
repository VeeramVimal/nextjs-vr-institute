// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb6msfOACJOi12Oj_fZvwRl0o6dSGmLE0",
  authDomain: "ctinstitute-contact-form.firebaseapp.com",
  projectId: "ctinstitute-contact-form",
  storageBucket: "ctinstitute-contact-form.appspot.com",
  messagingSenderId: "1005057952349",
  appId: "1:1005057952349:web:59ad95eb510acd7ededbb4",
  measurementId: "G-HDHQG194Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);