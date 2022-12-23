// import firebase from "firebase";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC245NwcDB68gjlSum_pE9BbfqtdJkn5Dk",
    authDomain: "heyyy-kir-tu-zendegi.firebaseapp.com",
    projectId: "heyyy-kir-tu-zendegi",
    storageBucket: "heyyy-kir-tu-zendegi.appspot.com",
    messagingSenderId: "688149718926",
    appId: "1:688149718926:web:c338dd18dbd74a7b8ce6df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
