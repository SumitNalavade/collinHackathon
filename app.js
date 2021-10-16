import { createItem, GetItems } from "./firebaseSetup.js";

let currentItems = []

document.querySelector("#addItemButton").addEventListener("click", (evt) => {
    let itemName = document.querySelector("#itemName")
    let itemDescription = document.querySelector("#itemDescription")
    let itemAddress = document.querySelector("#itemAddress")
    let userName = document.querySelector("#userName")
    let imageURL = document.querySelector("#imageURL")
    let phoneNumber = document.querySelector("#phoneNumber")

    createItem(itemName.value, itemDescription.value, itemAddress.value, userName.value, imageURL.value, phoneNumber.value)
    createCards()

    itemName.value = ""
    itemDescription.value = ""
    itemAddress.value = ""
    userName.value = ""
    imageURL .value = ""
    phoneNumber.value = ""
    document.querySelector("#closeButton").click();
})

function createCards() {
    GetItems().then((items) => {
        for (let item of items) {
            console.log(item)
            if (!currentItems.includes(item.itemID)) {
                let newItem = document.createElement("div")
                newItem.classList.add("card")
                newItem.style.width = "18rem"

                let newImage = document.createElement("img")
                newImage.classList.add("item-image", "itemImage")
                newImage.setAttribute("src", item.imageURL)
                newItem.appendChild(newImage)

                let newCardBody = document.createElement("div")
                newCardBody.classList.add("card-body")
                let newCardTitle = document.createElement("h5")
                newCardTitle.innerHTML = item.name
                newCardBody.appendChild(newCardTitle)
                let newCardText = document.createElement("p")
                newCardText.innerHTML = item.description
                newCardBody.appendChild(newCardText)
                let newCardLink = document.createElement("a")
                newCardLink.classList.add("btn", "btn-primary")
                newCardLink.innerHTML = "Show Details"
                newCardLink.setAttribute("type", "button")
                newCardLink.classList.add("btn", "btn-primary")
                newCardLink.setAttribute("data-bs-toggle", "modal")
                newCardLink.setAttribute("data-bs-target", "#detailsModal")
                newCardLink.addEventListener("click", () => {
                    document.querySelector("#exampleModalLabel").innerHTML = item.name
                    document.querySelector("#donorName").innerHTML = item.userName
                    document.querySelector("#donorDescription").innerHTML = item.description
                    document.querySelector("#donorAddress").innerHTML = item.itemAddress
                })
                newCardBody.appendChild(newCardLink)

                newItem.appendChild(newCardBody)

                document.querySelector(".items-container").appendChild(newItem)

                currentItems.push(item.itemID)
            }

        }
    })
}

createCards()
