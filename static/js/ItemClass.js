import { queryFeatured } from "./firebaseSetup.js";
import { Items, createItemCards } from "./app.js"

export class Item {
    constructor(itemName, itemDescription, itemCategory, imageURL, userID, itemID) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemCategory = itemCategory;
        this.imageURL = imageURL;
        this.userID = userID;
        this.itemID = itemID
    }
}

function getFeatured(category) {
    queryFeatured(category).then((items) => {
        items.forEach((doc) => {
            const { itemName, itemDescription, itemCategory, imageURL, userID } = doc.data();
            const newItem = new Item(itemName, itemDescription, itemCategory, imageURL, userID, doc.id)
            Items[itemCategory].push(newItem)

            document.querySelector(`#${category}`).appendChild(createItemCards(imageURL, itemDescription, itemName, doc.id));
        });
    })
}

getFeatured("mensClothing");
getFeatured("womensClothing");
getFeatured("kidsClothing");
getFeatured("electronics");
getFeatured("furniture");
