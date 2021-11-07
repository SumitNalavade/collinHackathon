// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, query, limit, addDoc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-storage.js"
import { successfulSignIn, successfulSignOut, fillUserItems } from "./app.js";

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
        fillUserItems(auth.currentUser.uid)
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

async function addItemsToUser(itemName, itemDescription, itemCategory, itemAddress, imageURL, itemID) {
    const usersRef = collection(db, "users", auth.currentUser.uid, "items");

    await setDoc(doc(usersRef, itemID), {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        address: itemAddress,
        imageURL: imageURL
    })
}

async function addItemsCollection(itemName, itemDescription, itemCategory, itemAddress, imageURL) {
    const docRef = await addDoc(collection(db, "items", itemCategory, "items"), {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        address: itemAddress,
        userID: String(auth.currentUser.uid),
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
    const address = (await getCurrentUserProfile()).address;

    addItemImage(itemImage, itemName).then((imageURL) => {
        imageURL = imageURL;

        addItemsCollection(itemName, itemDescription, itemCategory, address, imageURL).then((itemID) => {
            addItemsToUser(itemName, itemDescription, itemCategory, address, imageURL, itemID)
                .then(() => {
                    alert("Item added successfully");
                })
                .catch((error) => {
                    alert("Error adding item");
                    console.log(error);
                })
        })
    })
}

export async function queryFeatured(category) {
    const itemsRef = collection(db, "items", category, "items");

    const q = query(itemsRef, limit(4));

    const querySnapshot = await getDocs(q);

    return querySnapshot
}

export async function getUserItems(userID) {
    const itemsRef = collection(db, "users", userID, "items");

    const q = query(itemsRef);

    const querySnapshot = await getDocs(q);


    return querySnapshot
}

