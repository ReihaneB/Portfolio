import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_KEY_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_SOME_KEY_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_SOME_KEY_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_SOME_KEY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SOME_KEY_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_SOME_KEY_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_SOME_KEY_FIREBASE_MEASUREMENTID,
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);