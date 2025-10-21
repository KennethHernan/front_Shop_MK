import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVzLgqhjT6cZgkqxqKPRrUstxqpH8oj9E",
  authDomain: "mayikh.firebaseapp.com",
  databaseURL: "https://mayikh-default-rtdb.firebaseio.com",
  projectId: "mayikh",
  storageBucket: "mayikh.appspot.com",
  messagingSenderId: "1016749107959",
  appId: "1:1016749107959:web:e9be23185f9fac661b01f2",
  measurementId: "G-BQT8QYV1QG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//export const db = getDatabase(app);
export { app, auth };
