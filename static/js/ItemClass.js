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
    womensClothing: [],
    kidsClothing: [],
    electronics: [],
    furniture: []
}

function getFeatured(category) {
    queryFeatured(category).then((items) => {
        items.forEach((doc) => {
            const { itemName, itemDescription, itemCategory, itemAddress, imageURL, userID } = doc.data();
            const newItem = new Item(itemName, itemDescription, itemCategory, itemAddress, imageURL, userID)
            Items[itemCategory].push(newItem)

            let temp = `
            <div class="card" style="width: 20rem; border-radius: 20px;">
                        <img src="${imageURL}" class="card-img-top itemImage" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${itemName}</h5>
                            <p class="card-text">${itemDescription}</p>
                            <a href="#" class="btn btn-success">Add to cart</a>
                        </div>
                    </div>
            `

            document.querySelector(`#${category}`).innerHTML += temp

        });

    })
}

//getFeatured("mensClothing");
//getFeatured("womensClothing");
