import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUqEeoWCS06l_o1NQ9EFmR5BSNXXSoe6g",
  authDomain: "rincon-de-luz-6ead7.firebaseapp.com",
  projectId: "rincon-de-luz-6ead7",
  storageBucket: "rincon-de-luz-6ead7.appspot.com",
  messagingSenderId: "670646967223",
  appId: "1:670646967223:web:e714fa74580b73e3b02632",
  measurementId: "G-31L2GYSCJG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;