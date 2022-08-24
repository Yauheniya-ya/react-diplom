// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAThJwFgrYTAfA55xDc_IBwZ_435fpEKr8",
  authDomain: "yuauheniya.firebaseapp.com",
  projectId: "yuauheniya",
  storageBucket: "yuauheniya.appspot.com",
  messagingSenderId: "439971586440",
  appId: "1:439971586440:web:f32b61e92d0b632f571a3d",
  measurementId: "G-3862N0S1VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);