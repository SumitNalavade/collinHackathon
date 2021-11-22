import { getCategoryPageItems } from "./firebaseSetup.js"
import { createItemCards, Items } from "./app.js"
import { Item } from "./ItemClass.js"

window.addEventListener("DOMContentLoaded", () => {
    getCategoryPageItems(category).then((items) => {
        items.forEach((doc) => {
            const { itemName, itemDescription, itemCategory, imageURL, userID } = doc.data();

            document.querySelector(".categoryCards").appendChild(createItemCards(imageURL, itemDescription, itemName, doc.id));
        })
    });
})
