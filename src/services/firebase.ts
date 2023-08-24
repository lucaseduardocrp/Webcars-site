import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqagO6tSXQ-m1hZobU_hgAjAHEbd1n1jA",
  authDomain: "webcars-eb504.firebaseapp.com",
  projectId: "webcars-eb504",
  storageBucket: "webcars-eb504.appspot.com",
  messagingSenderId: "441565908730",
  appId: "1:441565908730:web:b71a9d615e212f497d0343",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
