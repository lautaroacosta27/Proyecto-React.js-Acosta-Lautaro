import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBk5rWoTLChAt4g48FVKOD51SfHY-ZTxoQ",
  authDomain: "react-49940.firebaseapp.com",
  projectId: "react-49940",
  storageBucket: "react-49940.appspot.com",
  messagingSenderId: "750332286158",
  appId: "1:750332286158:web:ccd5ae34336902560dec9f"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db