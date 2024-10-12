 import { initializeApp } from "firebase/app";

 const firebaseConfig = {
    apikey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
 };

 //Inicializa firebase
 const app = initializeApp(firebaseConfig);

 export default app;