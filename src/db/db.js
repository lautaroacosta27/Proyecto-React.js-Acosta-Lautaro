import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAhkbu8OTHcYqEtrc54vh0IpuEpnEIvvTo",
  authDomain: "lautaro-acosta-ecommerce-79a9e.firebaseapp.com",
  projectId: "lautaro-acosta-ecommerce-79a9e",
  storageBucket: "lautaro-acosta-ecommerce-79a9e.appspot.com",
  messagingSenderId: "845759042660",
  appId: "1:845759042660:web:3e11221488e9ac90a4fb71"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db