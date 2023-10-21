import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD3_ti6uE8TvwotS8i1VQwcujg1UbpJP2Y",
  authDomain: "cursoreact-8a41d.firebaseapp.com",
  projectId: "cursoreact-8a41d",
  storageBucket: "cursoreact-8a41d.appspot.com",
  messagingSenderId: "176332325394",
  appId: "1:176332325394:web:3eadb2617a342ea7cc8ecb",
  measurementId: "G-54NX3CDGP0"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };