// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfjZ2p2Hx2AiD4b2bN0U_y_NaBJGREWNc",
  authDomain: "auth-moha-milon-6aa46.firebaseapp.com",
  projectId: "auth-moha-milon-6aa46",
  storageBucket: "auth-moha-milon-6aa46.appspot.com",
  messagingSenderId: "549508023911",
  appId: "1:549508023911:web:b421bd37f443ff8f0e36c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth