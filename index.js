import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCotsHWQ48x4qkqB6uAv-r4yktuhz5LgPU",
    authDomain: "fir-authentication-ca637.firebaseapp.com",
    projectId: "fir-authentication-ca637",
    databaseURL: "https://fir-authentication-ca637-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "fir-authentication-ca637.appspot.com",
    messagingSenderId: "591229707599",
    appId: "1:591229707599:web:bd9bcc7f98eb87621b913a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Inputs
const btn = document.getElementById("submit");

btn.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    const number = document.getElementById("number").value;
    const errorMessageElement = document.getElementById("error-message");

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed up 
            const user = userCredential.user;

            // Store additional user information in Realtime Database
            return set(ref(db, 'users/' + user.uid), {
                username: username,
                email: email,
                number: number
            });
        })
        .then(() => {
            alert("Account created successfully!");
            window.location.href = "homepage.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            errorMessageElement.textContent = "Error: " + errorMessage;
            errorMessageElement.style.color = "red";
        });
});
