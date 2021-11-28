import { queryFeatured } from "./firebaseSetup.js";
import { Item } from "./ItemClass.js"
import { createItemCards } from "./app.js";

export let Items = {
    mensClothing: [],
    womensClothing: [],
    kidsClothing: [],
    electronics: [],
    furniture: []
}

function getFeatured(category) {
    queryFeatured(category).then((items) => {
        items.forEach((doc) => {
            const { itemName, itemDescription, itemCategory, imageURL, userID } = doc.data();
            const newItem = new Item(itemName, itemDescription, itemCategory, imageURL, userID, doc.id)
            Items[itemCategory].push(newItem)

            document.querySelector(`#${category}`).appendChild(createItemCards(newItem));
        });
    })
}

getFeatured("mensClothing");
getFeatured("womensClothing");
getFeatured("kidsClothing");
getFeatured("electronics");
getFeatured("furniture");