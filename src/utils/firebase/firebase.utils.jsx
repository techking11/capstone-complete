import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

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

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createCustomUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("Error: " + error.message);
    }
  }
  
  return userDocRef;
};