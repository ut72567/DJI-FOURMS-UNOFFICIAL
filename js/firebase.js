import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7-pk30LeE0TICao-rfn-LBvaWXpEr3eA",
  authDomain: "dji-community-unofficial-dd90e.firebaseapp.com",
  projectId: "dji-community-unofficial-dd90e",
  storageBucket: "dji-community-unofficial-dd90e.firebasestorage.app",
  messagingSenderId: "1361004119",
  appId: "1:1361004119:web:ec247e69da587bbd168512"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);