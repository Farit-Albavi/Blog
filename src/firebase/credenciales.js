import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDlzs3y5z19nFCK0D1EFFqTnTLSReL5-Go",
  authDomain: "my-blog-e80bd.firebaseapp.com",
  projectId: "my-blog-e80bd",
  storageBucket: "my-blog-e80bd.appspot.com",
  messagingSenderId: "1059373360371",
  appId: "1:1059373360371:web:99d43c7f56eb87b2894386",
  measurementId: "G-7M3NWQV3XX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export default firebaseApp;