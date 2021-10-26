"use strict"

import { signUpUser, signInUser, signOutUser, getCurrentUserProfile } from "./firebaseSetup.js"

document.querySelector("#signUpButton").addEventListener("click", (evt) => {
    evt.preventDefault();

    const firstName = document.querySelector("#signupFirstName").value;
    const lastName = document.querySelector("#signupLastName").value;
    const email = document.querySelector("#signupEmail").value;
    const password = document.querySelector("#signupPassword").value;
    const address = document.querySelector("#signupAddress").value;

    signUpUser(firstName, lastName, email, password, address)
})

document.querySelector("#loginButton").addEventListener("click", (evt) => {
    evt.preventDefault();

    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;

    signInUser(email, password)
})

export function successfulSignIn() {
    document.querySelectorAll(".navAction").forEach((button) => {
        button.classList.toggle("d-none");
    })

    document.querySelector(".btn-close").click();
}

export function successfulSignOut() {
    document.querySelector("#navLoginButton").classList.remove("d-none");
    document.querySelector("#bagIconButton").classList.add("d-none");
    document.querySelector("#navDonateButton").classList.add("d-none");
    document.querySelector("#profileIconButton").classList.add("d-none");

    document.querySelector("#closeModalButton").click();

}

document.querySelector("#signOutButton").addEventListener("click", (evt) => {
    signOutUser();
})

document.querySelector("#profileIconButton").addEventListener("click", (evt) => {
    fillProfileModal()    
})

function fillProfileModal() {
    const currentUser = getCurrentUserProfile()

    document.querySelector("#profileModalTitle").innerHTML = `Hello ${currentUser.displayName}`
    document.querySelector("#profileDisplayName").innerHTML = currentUser.displayName
    document.querySelector("#profileEmail").innerHTML = currentUser.email
}