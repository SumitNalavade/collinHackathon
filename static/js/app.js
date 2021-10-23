"use strict"

import { signUpUser, signInUser, signOutUser } from "./firebaseSetup.js"

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
    document.querySelector("#profileIconButton").classList.toggle("d-none");
}

export function successfulSignOut() {
    document.querySelector("#navLoginButton").classList.remove("d-none");
    document.querySelector("#navDonateButton").classList.add("d-none");

    document.querySelector(".btn-close").click();
    document.querySelector("#profileIconButton").classList.add("d-none");
}

document.querySelector("#signOutButton").addEventListener("click", (evt) => {
    signOutUser();
})