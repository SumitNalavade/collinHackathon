// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, getDocs } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCIgPynr-QZ7nHqZaVXMRYl-7EHAwarGE",
    authDomain: "fir-demo-5c6da.firebaseapp.com",
    databaseURL: "https://fir-demo-5c6da-default-rtdb.firebaseio.com",
    projectId: "fir-demo-5c6da",
    storageBucket: "fir-demo-5c6da.appspot.com",
    messagingSenderId: "44640068654",
    appId: "1:44640068654:web:469b73ac5023acfc6aebbf",
    measurementId: "G-0CTTSJ540Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export async function signUpUser(firstName, lastName, email, password, address) {
    let status;
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user; //Signed in user
            status = 0;
            updateProfile(user, {
                displayName: `${firstName} ${lastName}`,
                firstName: firstName,
                lastName: lastName,
                address: address
            }).then(() => {
                sendEmailVerification(user)
            }).then(() => {
                alert("New user created");
            })
        }).catch((error) => {
            console.log(`Error Code: ${error.code}` + `Error Message: ${error.message}`);
            if (error.code === "auth/email-already-in-use") {
                alert("Error: User already exists");
            } else {
                alert("Error creating user");
                status = -1;
            }
        })
    return status
}

export async function signInUser(email, password) {
    let status;
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user //Signed in user
            alert("Sign in successful");
            status = 0;
        }).catch((error) => {
            console.log(`Error Code: ${error.code}` + `Error Message: ${error.message}`);
            alert("Sign in unsuccessful")
            status = -1
        })
    return status
}
