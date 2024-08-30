import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCotsHWQ48x4qkqB6uAv-r4yktuhz5LgPU",
    authDomain: "fir-authentication-ca637.firebaseapp.com",
    projectId: "fir-authentication-ca637",
    storageBucket: "fir-authentication-ca637.appspot.com",
    messagingSenderId: "591229707599",
    appId: "1:591229707599:web:bd9bcc7f98eb87621b913a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


//inputs
const btn = document.getElementById("submit");

btn.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("creating account");
            window.location.href = "homepage.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
})