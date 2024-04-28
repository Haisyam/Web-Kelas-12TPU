// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyChU3ZPv6l_Rjl2wlbm_Kfgd6oau0GlBfY",
  authDomain: "kelas-1-276e3.firebaseapp.com",
  projectId: "kelas-1-276e3",
  storageBucket: "kelas-1-276e3.appspot.com",
  messagingSenderId: "503716756251",
  appId: "1:503716756251:web:58696e0ffa0e8fe712b1be",
  measurementId: "G-YFGL0W3FCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();