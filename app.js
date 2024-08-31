
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase, ref , push , set} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAChMDDca_FhsZmuFMg-dnc3smh5UMIj4Q",
  authDomain: "ground-ad084.firebaseapp.com",
  databaseURL: "https://fir-authentication-ca637-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "ground-ad084",
  storageBucket: "ground-ad084.appspot.com",
  messagingSenderId: "207294284362",
  appId: "1:207294284362:web:5b32aab5dc46caff6f1cb3",

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let loginDB = ref(db, "loginForm");
document.getElementById("loginForm").addEventListener("submit",submitForm);


function submitForm(e){
  e.preventDefault();
  let name = getElementVal("username");
  let email = getElementVal("email");
  let password = getElementVal("password");
  let PHNO = getElementVal("number");
  console.log(name , email , password , PHNO);
  saveMessage(name, email , password , PHNO);


}

const saveMessage = (name, email, password, PHNO) => {
  let newContactForm = push(loginDB);  // Create a new child node with a unique key
  set(newContactForm, {
    name: name,
    emailid: email,
    password: password,
    phno: PHNO,
  }).then(() => {
    console.log('Data saved successfully');
  }).catch((error) => {
    console.error('Error saving data:', error);
  });
}



function getElementVal(id){
  return document.getElementById(id).value;
}