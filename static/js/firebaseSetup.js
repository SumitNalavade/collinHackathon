// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, getDocs } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { successfulSignIn, successfulSignOut } from "./app.js";

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
const storage = getStorage();
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in")
        const uid = user.uid;
        successfulSignIn();
    } else {
        console.log("User is signed out")
        successfulSignOut();
    }
});

export function signUpUser(firstName, lastName, email, password, address) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user; //Signed in user
            updateProfile(user, {
                displayName: `${firstName} ${lastName}`
            }).then(() => createUsersDoc(firstName, lastName, address, String(user.uid)))
                .then(() => {
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
            }
        })
}
async function createUsersDoc(firstName, lastName, address, uid) {
    const usersRef = collection(db, "users");

    await setDoc(doc(usersRef, uid), {
        displayName: `${firstName} ${lastName}`,
        address: address,
        uid: uid
    })
}

export function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user //Signed in user
        }).catch((error) => {
            console.log(`Error Code: ${error.code}` + `Error Message: ${error.message}`);
            alert("Sign in unsuccessful")
        })
}

export function signOutUser() {
    signOut(auth).then(() => {
    }).catch(() => {
        alert("Error signing out")
    })
}

export async function getCurrentUserProfile() {
    const user = auth.currentUser;

    if (!user) { return }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    return {
        displayName: user.displayName,
        email: user.email,
        address: docSnap.data().address
    }
}

export function resetPassword() {
    const user = auth.currentUser

    sendPasswordResetEmail(auth, user.email)
        .then(() => {
            alert("Password reset email has been sent")
        })
        .catch((error) => {
            alert("Error sending password reset email")
        });
}

export async function addNewItem(itemName, itemDescription, category, file) {
    const usersRef = collection(db, "users", auth.currentUser.uid, "items");
    const itemsRef = collection(db, "items", category, "items   ");

    const address = (await getCurrentUserProfile()).address

    await setDoc(doc(usersRef, itemName), {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: category,
        address: address
    })
    await setDoc(doc(itemsRef, itemName), {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: category,
        address: address,
        userID: String(auth.currentUser.uid)
    })
    .then(() => {
        addImage(file)
    })
        .then(() => {
            alert("New item added")
        })
        .catch((error) => alert("Error adding item"))
}
