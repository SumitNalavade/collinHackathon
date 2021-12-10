// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, query, limit, addDoc, deleteDoc, updateDoc, orderBy, startAfter } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-storage.js"
import { successfulSignIn, successfulSignOut, fillUserItems, fillProfileModal } from "./app.js";

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
let signedInUser
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        successfulSignIn();
        signedInUser = auth.currentUser
        fillUserItems(signedInUser.uid)
    } else {
        successfulSignOut();
    }
});

export function signUpUser(firstName, lastName, email, password, address) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user; //Signed in user
            updateProfile(user, {
                displayName: `${firstName} ${lastName}`
            }).then(() => createUsersDoc(firstName, lastName, address, String(user.uid), email))
                .then(() => {
                    fillProfileModal()
                    sendEmailVerification(user)
                }).then(() => {
                    document.querySelector(".loginLoadingSpinner").classList.add("d-none")
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
async function createUsersDoc(firstName, lastName, address, uid, email) {
    const usersRef = collection(db, "users");

    await setDoc(doc(usersRef, uid), {
        displayName: `${firstName} ${lastName}`,
        address: address,
        uid: uid,
        email: email
    })
}

export function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user //Signed in user
        }).catch((error) => {
            console.log(`Error Code: ${error.code}` + `Error Message: ${error.message}`);
            document.querySelector(".loginLoadingSpinner").classList.add("d-none")
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
    if (!auth.currentUser) { return }

    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    return {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        address: docSnap.data().address
    }
}

export async function getUser(userID) {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    return docSnap.data()
}

export function resetPassword() {
    sendPasswordResetEmail(auth, signedInUser.email)
        .then(() => {
            document.querySelector(".profileLoadingSpinner").classList.add("d-none")
            alert("Password reset email has been sent")
        })
        .catch((error) => {
            document.querySelector(".profileLoadingSpinner").classList.add("d-none")
            alert("Error sending password reset email")
        });
}

export async function resetEmail (newEmail) {
    const password = prompt("Please enter password");
    
    const credential = EmailAuthProvider.credential(signedInUser.email, password);

    await reauthenticateWithCredential(signedInUser, credential).catch((error) => {
        alert("Error reauthenticating");
        console.log(error);
      });


    updateEmail(auth.currentUser, newEmail).then(async () => {
        const docRef = doc(db, "users", signedInUser.uid);

        await updateDoc(docRef, {
            email: newEmail
        })
        .then(() => {
            document.querySelector(".profileLoadingSpinner").classList.add("d-none")
            alert("Email updated succesfully")
        })
    })
    .catch((error) => {
        alert("Error updating email");
        console.log(error);
    })

}

export async function resetAddress(newAddress) {
    await setDoc(doc(db, "users", signedInUser.uid), {
        address: newAddress
      }).then(() => {
        document.querySelector(".profileLoadingSpinner").classList.add("d-none")
          alert("Address Updated Successfully");
      })
      .catch((error) => {
          console.log(error);
      })
      
}

async function addItemsToUser(itemName, itemDescription, itemCategory, imageURL, itemID) {
    const usersRef = collection(db, "users", signedInUser.uid, "items");

    await setDoc(doc(usersRef, itemID), {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        imageURL: imageURL,
    })
}

async function addItemsCollection(itemName, itemDescription, itemCategory, imageURL) {
    const docRef = await addDoc(collection(db, "items", itemCategory, "items"), {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        userID: String(signedInUser.uid),
        imageURL: imageURL
    });

    return docRef.id

}

async function addItemImage(image, imageName) {
    let imageURL = "";

    const storageRef = ref(storage, imageName);

    await uploadBytes(storageRef, image)

    await getDownloadURL(ref(storage, imageName))
        .then((url) => imageURL = url)

    return imageURL

}

export async function addNewItem(itemName, itemDescription, itemCategory, itemImage) {
    let imageURL = await addItemImage(itemImage, itemName);
        let itemID = await addItemsCollection(itemName, itemDescription, itemCategory, imageURL);
            await addItemsToUser(itemName, itemDescription, itemCategory, imageURL, itemID);
                fillUserItems(signedInUser.uid);
}

export async function queryFeatured(category) {
    const itemsRef = collection(db, "items", category, "items");

    const q = query(itemsRef, limit(3));

    const querySnapshot = await getDocs(q);
    
    return querySnapshot
}

export async function getUserItems(userID) {
    const itemsRef = collection(db, "users", userID, "items");

    const q = query(itemsRef);

    const querySnapshot = await getDocs(q);


    return querySnapshot
}

export async function deleteItem(category, itemID, userID, imageURL) {
    await deleteDoc(doc(db, "items", category, "items", itemID));
    await deleteDoc(doc(db, "users", userID, "items", itemID));

    const imageRef = ref(storage, imageURL);

    deleteObject(imageRef);
}

export async function getCategoryPageItems(category) {
    const itemsRef = collection(db, "items", category, "items");

    const q = query(itemsRef, limit(6));

    const querySnapshot = await getDocs(q);

    const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];

    return [querySnapshot, lastVisible]
}

export async function paginateData(last) {
    const next = query(collection(db, "items", category, "items"),
    orderBy("userID"),
    startAfter(last),
    limit(6))
    
    const querySnapshot = await getDocs(next)

    const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];

    return [querySnapshot, lastVisible]
}