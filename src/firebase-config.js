import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXXmOCW6tMElom0GqR_4aqNwhrqFPBqAY",
  authDomain: "course-project-fccee.firebaseapp.com",
  projectId: "course-project-fccee",
  storageBucket: "course-project-fccee.appspot.com",
  messagingSenderId: "220973155938",
  appId: "1:220973155938:web:018bf46663c59a9ffc333b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
