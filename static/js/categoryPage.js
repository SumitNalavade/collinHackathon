import { Item } from "./ItemClass.js";
import { getCategoryPageItems } from "./firebaseSetup.js"
import { createItemCards, Items } from "./app.js"

Items = {
    mensClothing: [],
    womensClothing: [],
    kidsClothing: [],
    electronics: [],
    furniture: []
}

getCategoryPageItems(category).then((items) => {
    items.forEach((doc) => {
        const { itemName, itemDescription, itemCategory, imageURL, userID } = doc.data();

        const newItem = new Item(itemName, itemDescription, itemCategory, imageURL, userID, doc.id);
        Items[itemCategory].push(newItem)
        
        document.querySelector(".categoryCards").appendChild(createItemCards(newItem));
    })

    console.log(Items);
});

