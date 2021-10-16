// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-storage.js";

import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, getDocs } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"

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

//Adds a new user to database
export async function createItem(itemName, itemDescription, itemAddress, userName, imageURL, phoneNumber) {
    const usersRef = collection(db, "items")

    await setDoc(doc(usersRef, itemName), {
        itemName: itemName,
        phoneNumber : phoneNumber,
        itemDescription: itemDescription,
        imageURL: imageURL,
        itemAddress: itemAddress,
        userName: userName,
        itemID: Math.random() * (1000000 - 0)
    })
        .then(() => {
            alert("Item added succesfully")
        })
}

export async function GetItems() {
    let items = []

    const querySnapshot = await getDocs(collection(db, "items"));
    await querySnapshot.forEach((doc) => {
        items.push({
            name: doc.data().itemName,
            phoneNumber : doc.data().phoneNumber,
            description: doc.data().itemDescription,
            imageURL: doc.data().imageURL,
            itemAddress: doc.data().itemAddress,
            userName: doc.data().userName,
            itemID: doc.data().itemID
        })
    })

    return items
}



