import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCKWZS4Gy66YtItS8ANRcCfDYXNiknOd3o",
  authDomain: "tfg-redesneuronalesbd.firebaseapp.com",
  projectId: "tfg-redesneuronalesbd",
  storageBucket: "tfg-redesneuronalesbd.firebasestorage.app",
  messagingSenderId: "538109319299",
  appId: "1:538109319299:web:820b9212c96dba79b4e3b6",
  measurementId: "G-4J5GPX1WWV"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Configura Firestore y Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
