import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAY92B0-ZCzSBfeHKXJzUwWuvOmF2qbwUU",
  authDomain: "project-363311.firebaseapp.com",
  projectId: "youtube-project-363311",
  storageBucket: "youtube-project-363311.appspot.com",
  messagingSenderId: "847064464357",
  appId: "1:847064464357:web:f1e3ed9c4f6a387d1f4d0c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;