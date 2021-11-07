"use strict"

import { signUpUser, signInUser, signOutUser, resetPassword, getCurrentUserProfile, addNewItem, getUserItems, deleteItem } from "./firebaseSetup.js"

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
            const itemID = doc.id;

            console.log(itemID);

            let newCard = document.createElement("div");
            newCard.classList.add("card", "selfCard", "mb-3")
            newCard.style.maxWidth = "540px"
            let newCardImage = document.createElement("img")
            newCardImage.setAttribute("src", imageURL)
            newCardImage.classList.add("img-fluid", "rounded-start", "selfItemImage")
            newCard.appendChild(newCardImage)
            let newCardBody = document.createElement("div");
            newCardBody.classList.add("card-body", "selfItemsCardBody")
            newCard.appendChild(newCardBody)
            let newCardTitle = document.createElement("h5")
            newCardTitle.classList.add("card-title")
            newCardTitle.innerHTML = itemName
            newCardBody.appendChild(newCardTitle)
            let newCardText = document.createElement("p")
            newCardText.classList.add("card-text")
            newCardText.innerHTML = itemDescription
            newCardBody.appendChild(newCardText)

            let newCardDelete = document.createElement("button")
            newCardDelete.classList.add("btn", "btn-danger")
            newCardDelete.innerHTML = "Delete"
            newCardDelete.addEventListener("click", () => {
                deleteItem(itemCategory, itemID, userID);
            })
            newCardBody.appendChild(newCardDelete)

            document.querySelector("#selfItemAccordionBody").appendChild(newCard)

        })
    })
}



