"use strict"

import { signUpUser, signInUser } from "./firebaseSetup.js"

document.querySelector("#signUpButton").addEventListener("click", (evt) => {
    evt.preventDefault();

    const firstName = document.querySelector("#signupFirstName").value;
    const lastName = document.querySelector("#signupLastName").value;
    const email = document.querySelector("#signupEmail").value;
    const password = document.querySelector("#signupPassword").value;
    const address = document.querySelector("#signupAddress").value;

    signUpUser(firstName, lastName, email, password, address).then((status) => {
        if (status != 0) { return } 

        successfulSignIn();
    })
})

document.querySelector("#loginButton").addEventListener("click", (evt) => {
    evt.preventDefault();

    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;

    signInUser(email, password).then((status) => {
        if(status != 0) { return } 

        successfulSignIn();
    })
})

function successfulSignIn() {
    document.querySelectorAll(".navAction").forEach((button) => {
        button.classList.toggle("d-none");
    })

    document.querySelector(".btn-close").click();
    document.querySelector(".bi-person").classList.toggle("d-none");
}