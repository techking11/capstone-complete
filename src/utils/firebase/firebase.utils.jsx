import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrOrlA-VfssPCCeFLNWfM6fo2XYJVpoRQ",
  authDomain: "crown-clothing-db-6f51e.firebaseapp.com",
  projectId: "crown-clothing-db-6f51e",
  storageBucket: "crown-clothing-db-6f51e.appspot.com",
  messagingSenderId: "574934185748",
  appId: "1:574934185748:web:c3754ec598deea1a32f401"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);