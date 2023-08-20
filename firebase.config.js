// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQGKOs9ltFxCZUhVJZNPX-YqosMwnzeh8",
  authDomain: "my-project-f42d9.firebaseapp.com",
  databaseURL: "https://my-project-f42d9-default-rtdb.firebaseio.com",
  projectId: "my-project-f42d9",
  storageBucket: "my-project-f42d9.appspot.com",
  messagingSenderId: "1019060299228",
  appId: "1:1019060299228:web:b34c9b966685cf9987db19",
  measurementId: "G-5Z61NQVD57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;