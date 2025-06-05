// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVJbW6rdpZQ7HFV9RnXRQKyIjjYNWthT0",
  authDomain: "am-devs-testing.firebaseapp.com",
  projectId: "am-devs-testing",
  storageBucket: "am-devs-testing.firebasestorage.app",
  messagingSenderId: "900247965169",
  appId: "1:900247965169:web:520aa2d04ad43b4d044850",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
