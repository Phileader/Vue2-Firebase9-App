import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, query, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBj2JSJH6uez7QeLkM8RdXwUs6tWZ7dpsw",
  authDomain: "tnode-915cd.firebaseapp.com",
  databaseURL: "https://tnode-915cd-default-rtdb.firebaseio.com",
  projectId: "tnode-915cd",
  storageBucket: "tnode-915cd.appspot.com",
  messagingSenderId: "385832865416",
  appId: "1:385832865416:web:34b9b079b7f973c660593d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, doc, getDocs, query, onSnapshot, deleteDoc, updateDoc };
