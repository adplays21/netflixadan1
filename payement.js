import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQGKOs9ltFxCZUhVJZNPX-YqosMwnzeh8",
    authDomain: "my-project-f42d9.firebaseapp.com",
    databaseURL: "https://my-project-f42d9-default-rtdb.firebaseio.com",
    projectId: "my-project-f42d9",
    storageBucket: "my-project-f42d9.appspot.com",
    messagingSenderId: "1019060299228",
    appId: "1:1019060299228:web:25282e4ab5442f6c87db19",
    measurementId: "G-WM69PW9QJ6"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

document.querySelector('.btn-xl').addEventListener('click', function() {
	signInWithGoogle();
})

export default firebase;