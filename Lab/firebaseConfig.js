// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATeKVh0NHTeFNV9CBNPr0kQ6jHToUQoq4",
  authDomain: "labassignment2-050.firebaseapp.com",
  projectId: "labassignment2-050",
  storageBucket: "labassignment2-050.appspot.com",
  messagingSenderId: "926994504176",
  appId: "1:926994504176:web:5d7333a0cf3c186c1e2535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export {db};