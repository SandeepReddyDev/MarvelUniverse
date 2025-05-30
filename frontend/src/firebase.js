// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQbr-jgKf_sbGIA4oMUE-I01QMvi3Pb1I",
  authDomain: "marvel-33ce6.firebaseapp.com",
  projectId: "marvel-33ce6",
  storageBucket: "marvel-33ce6.appspot.com",
  messagingSenderId: "139195079358",
  appId: "1:139195079358:web:20dd033a892b5bdecadcef",
  measurementId: "G-YDD2Z7ZV9J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
