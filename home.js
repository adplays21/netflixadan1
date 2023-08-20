// import { doc } from "@firebase/firestore";
// import {signInWithGoogle} from "payement";
// import firebase from "./payement";
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

const firebasebtn = document.getElementsByClassName('firebase-btn');
function selectItem(e) {
	removeBorder();
	removeShow();
	
	this.classList.add('tab-border');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}


function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}


tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

firebasebtn.addEventListener('click',()=>{
	console.log('Hi');
}
)
//   import firebase from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//    import  "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
//   const firebaseConfig = {
//     apiKey: "AIzaSyBQGKOs9ltFxCZUhVJZNPX-YqosMwnzeh8",
//     authDomain: "my-project-f42d9.firebaseapp.com",
//     databaseURL: "https://my-project-f42d9-default-rtdb.firebaseio.com",
//     projectId: "my-project-f42d9",
//     storageBucket: "my-project-f42d9.appspot.com",
//     messagingSenderId: "1019060299228",
//     appId: "1:1019060299228:web:b34c9b966685cf9987db19",
//     measurementId: "G-5Z61NQVD57"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  
//   const googleProvider = new firebase.auth.GoogleAuthProvider();

// // Handle Google sign-in button click
// const signInWithGoogle = () => {
//   firebase.auth().signInWithPopup(googleProvider)
//     .then((result) => {
//       const user = result.user;
//       console.log("Logged in user:", user);
//     })
//     .catch((error) => {
//       console.error("Google sign-in error:", error);
//     });
// };

// // Attach click event to your Google sign-in button
// const googleSignInButton = document.getElementById("googleSignInButton");
// googleSignInButton.addEventListener("click", signInWithGoogle);

import './firebase/auth';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
