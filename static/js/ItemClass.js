import { queryFeatured } from "./firebaseSetup.js";
import { Items } from "./app.js"

export class Item {
    constructor(itemName, itemDescription, itemCategory, imageURL, userID) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemCategory = itemCategory;
        this.imageURL = imageURL;
        this.userID = userID;
    }
}

function getFeatured(category) {

    queryFeatured(category).then((items) => {
        items.forEach((doc) => {
            const { itemName, itemDescription, itemCategory, imageURL, userID } = doc.data();
            const newItem = new Item(itemName, itemDescription, itemCategory, imageURL, userID)
            Items[itemCategory].push(newItem)

            let temp = `
            <div class="card" style="width: 20rem; border-radius: 20px;">
            <img src="${imageURL}" class="card-img-top itemImage" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${itemName}</h5>
                            <p class="card-text">${itemDescription}</p>
                        </div>
                        <a href="#" class="btn btn-success">Contact Owner</a>

                    </div>
            `
            document.querySelector(`#${category}`).innerHTML += temp

        });

    })
}

getFeatured("mensClothing");
getFeatured("womensClothing");
getFeatured("kidsClothing");
