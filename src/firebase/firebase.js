import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
// 	apiKey: "AIzaSyB9R_2hZ8eHxtscX0ejfNzIlZbCsXJIIBg",
// 	authDomain: "login-with-17831.firebaseapp.com",
// 	projectId: "login-with-17831",
// 	storageBucket: "login-with-17831.appspot.com",
// 	messagingSenderId: "734916142370",
// 	appId: "1:734916142370:web:2f484e1e9b70b4510d317b",
// };

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