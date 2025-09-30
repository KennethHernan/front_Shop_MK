// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVzLgqhjT6cZgkqxqKPRrUstxqpH8oj9E",
  authDomain: "mayikh.firebaseapp.com",
  databaseURL: "https://mayikh-default-rtdb.firebaseio.com",
  projectId: "mayikh",
  storageBucket: "mayikh.appspot.com",
  messagingSenderId: "1016749107959",
  appId: "1:1016749107959:web:e9be23185f9fac661b01f2",
  measurementId: "G-BQT8QYV1QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export const db = getDatabase(app);
export { app };
