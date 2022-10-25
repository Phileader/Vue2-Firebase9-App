import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, query, onSnapshot, deleteDoc, updateDoc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "****",
  authDomain: "****",
  databaseURL: "****",
  projectId: "****",
  storageBucket: "****",
  messagingSenderId: "****",
  appId: "****",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, doc, getDocs, query, onSnapshot, deleteDoc, updateDoc, getDoc, setDoc, addDoc };
