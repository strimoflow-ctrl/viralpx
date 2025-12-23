// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { 
    getDatabase, ref, set, push, onValue, remove, update 
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { 
    getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzqgS3yJfKIOCu7QxFIoNce1J7miF-2tc",
  authDomain: "viralpx-f50e8.firebaseapp.com",
  databaseURL: "https://viralpx-f50e8-default-rtdb.firebaseio.com",
  projectId: "viralpx-f50e8",
  storageBucket: "viralpx-f50e8.firebasestorage.app",
  messagingSenderId: "655981871742",
  appId: "1:655981871742:web:7161576f814eae3856ce2f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, ref, set, push, onValue, remove, update, auth, signInWithEmailAndPassword, signOut, onAuthStateChanged };
