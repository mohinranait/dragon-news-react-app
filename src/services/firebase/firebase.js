import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATQxuay-TlTzHKbz_Qc4D0iwy0-7UK0r8",
  authDomain: "dragon-news-auth-47a60.firebaseapp.com",
  projectId: "dragon-news-auth-47a60",
  storageBucket: "dragon-news-auth-47a60.appspot.com",
  messagingSenderId: "1029762006733",
  appId: "1:1029762006733:web:8b246acc4d4d4c8cf0b384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;