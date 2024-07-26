import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBtV-QDmuRr3HbExGlAFbt8pcd1_EdGHCM",
	authDomain: "talkwise-c6f44.firebaseapp.com",
	projectId: "talkwise-c6f44",
	storageBucket: "talkwise-c6f44.appspot.com",
	messagingSenderId: "439748242667",
	appId: "1:439748242667:web:30d19dbbaa582129e9e2ae"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();