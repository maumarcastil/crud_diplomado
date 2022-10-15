// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9z7mOz0b6HjsCgjn8kmDmtHkvmkIfLpo',
  authDomain: 'crud-55398.firebaseapp.com',
  projectId: 'crud-55398',
  storageBucket: 'crud-55398.appspot.com',
  messagingSenderId: '918246853977',
  appId: '1:918246853977:web:a028ba22009943f7d2d048',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
