// Import Firebase
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc 
} from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBXkkdhQavYhZl8Re0AdFB9ZXiRmTqvk-Q",
  authDomain: "munawar-netflix-clone.firebaseapp.com",
  projectId: "munawar-netflix-clone",
  storageBucket: "munawar-netflix-clone.appspot.com", // <-- fixed typo (.app → .appspot.com)
  messagingSenderId: "623449273648",
  appId: "1:623449273648:web:7bde3ccf6e3e49ac9784f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    alert("Signup successful!");
  } catch (error) {
    console.error("Signup error:", error.message);
    alert(error.message);
  }
};

// Login function
const login = async (email, password) => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
  } catch (error) {
    console.error("Login error:", error.message);
    alert(error.message);
  }
};

// Logout
const logout = () => signOut(auth);

export { auth, db, signup, login, logout };
