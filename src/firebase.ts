import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSPVJfxQO8kIHoA-4oLu0PLPejAhmxkm8",
  authDomain: "aplikasi-dlh-1f503.firebaseapp.com",
  projectId: "aplikasi-dlh-1f503",
  storageBucket: "aplikasi-dlh-1f503.firebasestorage.app",
  messagingSenderId: "820302905580",
  appId: "1:820302905580:web:bef5ef0afaaec41edc65c9",
  measurementId: "G-06Q6PVLE9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentication functions
export const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export { auth };
