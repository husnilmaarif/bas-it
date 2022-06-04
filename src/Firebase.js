import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwjqse4cE8P9YQ7-xchlap-yaPv5z_vUU",
  authDomain: "bas-it-f7457.firebaseapp.com",
  projectId: "bas-it-f7457",
  storageBucket: "bas-it-f7457.appspot.com",
  messagingSenderId: "375989003603",
  appId: "1:375989003603:web:249fde0f1dea589d38ada6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
