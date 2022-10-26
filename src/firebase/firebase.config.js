// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIoJumtlSgGVx8__U02gWyCedAOc9L7AY",
  authDomain: "train-language.firebaseapp.com",
  projectId: "train-language",
  storageBucket: "train-language.appspot.com",
  messagingSenderId: "611414665330",
  appId: "1:611414665330:web:0f7cfdaf93b9a796e5baeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;