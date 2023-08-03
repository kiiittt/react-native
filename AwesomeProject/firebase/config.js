// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlNk9KtsVV9SQ5f7WmDbmRYKOB2aW4X04",
  authDomain: "react-native-2b9a2.firebaseapp.com",
  projectId: "react-native-2b9a2",
  storageBucket: "react-native-2b9a2.appspot.com",
  messagingSenderId: "1039163270262",
  appId: "1:1039163270262:web:3d3a61a071a94c772f2b57",
  measurementId: "G-4PM7T9MSLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
