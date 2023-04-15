// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuRJZJ6PYErhQZImsjYymT3EatUlDErQo",
  authDomain: "vue2-todo.firebaseapp.com",
  projectId: "vue2-todo",
  storageBucket: "vue2-todo.appspot.com",
  messagingSenderId: "481334917185",
  appId: "1:481334917185:web:d932bb7c9b516b46f4eec0",
  measurementId: "G-RG88TW7MJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;