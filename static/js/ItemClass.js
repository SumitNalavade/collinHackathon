import { queryFeatured } from "./firebaseSetup.js";

class Item {
    constructor(itemName, itemDescription, itemCategory, itemAddress, imageURL, userID) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemCategory = itemCategory;
        this.itemAddress = itemAddress;
        this.imageURL = imageURL;
        this.userID = userID;
    }
}

const Items = {
    mensClothing: [],
    womensColthing: [],
    kidsClothing: [],
    electronics: [],
    furniture: []
}

function getFeatured(category) {
    queryFeatured(category).then((items) => {
        items.forEach((doc) => {
            const { itemName, itemDescription, itemCategory, itemAddress, imageURL, userID } = doc.data();
            Items[itemCategory].push(new Item(itemName, itemDescription, itemCategory, itemAddress, imageURL, userID))
        });

        console.log(Items);
    })
}

getFeatured("mensClothing");
