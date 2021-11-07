"use strict"

import { signUpUser, signInUser, signOutUser, resetPassword, getCurrentUserProfile, addNewItem, getUserItems } from "./firebaseSetup.js"

export class Item {
    constructor(itemName, itemDescription, itemCategory, itemAddress, imageURL, userID) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemCategory = itemCategory;
        this.itemAddress = itemAddress;
        this.imageURL = imageURL;
        this.userID = userID;
    }
}

export const Items = {
    mensClothing: [],
    womensClothing: [],
    kidsClothing: [],
    electronics: [],
    furniture: []
}

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

    fillProfileModal();

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

function fillProfileModal() {
    getCurrentUserProfile().then((currentUser) => {
        document.querySelector("#profileModalTitle").innerHTML = `Hello ${currentUser.displayName}`
        document.querySelector("#profileDisplayName").innerHTML = currentUser.displayName
        document.querySelector("#profileEmail").innerHTML = currentUser.email
        document.querySelector("#profileAddress").innerHTML = currentUser.address
    })
}

document.querySelector("#resetPasswordButton").addEventListener("click", () => {
    resetPassword()
})

document.querySelector("#donateButton").addEventListener("click", (evt) => {
    evt.preventDefault();

    const itemName = document.querySelector("#itemName").value
    const itemDescription = document.querySelector("#itemDescription").value
    let itemCategory = "";
    const itemImage = document.querySelector('#imageInput').files[0];

    document.querySelectorAll(".form-check-input").forEach((button) => {
        if (button.checked) {
            itemCategory = button.value
        }
    })

    addNewItem(itemName, itemDescription, itemCategory, itemImage).then(() => {
        document.querySelector("#donateModalClose").click();
        document.querySelectorAll(".donateInput").forEach((input) => {
            input.checked = false;
        })
    })
})

export function fillUserItems(userID) {
    getUserItems(userID).then((items) => {
        items.forEach((doc) => {
            const { address, imageURL, itemCategory, itemDescription, itemName } = doc.data();

            console.log(imageURL);

            let temp = `
            <div class="card selfCard mb-3" style="max-width: 540px;">       
            <img src="${imageURL}" class="img-fluid rounded-start selfItemImage" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${itemName}</h5>
                        <p class="card-text">${itemDescription}</p>
                        <button class="btn btn-danger">Delete</button>
                    </div>
        </div>
            `

            document.querySelector("#selfItemAccordionBody").innerHTML += temp;

        })
    })
}


