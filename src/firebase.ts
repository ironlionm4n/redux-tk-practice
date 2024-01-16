// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUgEoWlmnhIdc2sEc3OeZOQoePMktstd4",
  authDomain: "unity-school-ece24.firebaseapp.com",
  projectId: "unity-school-ece24",
  storageBucket: "unity-school-ece24.appspot.com",
  messagingSenderId: "402463125284",
  appId: "1:402463125284:web:f6bf9f13244a1d17360db1",
  measurementId: "G-CMLYJVV4F0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export { app };
