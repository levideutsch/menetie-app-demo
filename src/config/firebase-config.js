import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDnhkSyvoN0p_z5Phl4aoU0WX0ZQaUep_8",
  authDomain: "menitie-app-demo.firebaseapp.com",
  projectId: "menitie-app-demo",
  storageBucket: "menitie-app-demo.firebasestorage.app",
  messagingSenderId: "346495983388",
  appId: "1:346495983388:web:0cf1b86ffc60a35b48e4d9",
  measurementId: "G-GZZ6Q7Q00X"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
// const analytics = getAnalytics(app);