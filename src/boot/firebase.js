import { boot } from "quasar/wrappers"; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKI5MBW4k5xlCcc6mSF7ndjXscSpmMes0",
  authDomain: "panamericananorte770.firebaseapp.com",
  projectId: "panamericananorte770",
  storageBucket: "panamericananorte770.appspot.com",
  messagingSenderId: "303231894793",
  appId: "1:303231894793:web:23fbd952c69e149f733fd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
export { db, auth, storage };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
