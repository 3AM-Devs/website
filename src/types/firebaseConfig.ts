// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  projectId: process.env.projectId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
