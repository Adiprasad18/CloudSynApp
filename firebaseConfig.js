import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // For storing files if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWhIfu1TFE34H_aYJTPe_JmNaN0csCSSc",
  authDomain: "cloudsyncapp-a2a59.firebaseapp.com",
  projectId: "cloudsyncapp-a2a59",
  storageBucket: "cloudsyncapp-a2a59.appspot.com", // ✅ Fixed this
  messagingSenderId: "393398692124",
  appId: "1:393398692124:web:f034a967c6ab17038772d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app); // For file storage (optional)

export default app;
