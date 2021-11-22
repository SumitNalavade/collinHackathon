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

            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.style.width = "20rem";
            cardDiv.style.borderRadius = "20px";

            let image = document.createElement("img");
            image.classList.add("card-img-top", "itemImage");
            image.setAttribute("src", imageURL);
            cardDiv.appendChild(image);

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardDiv.appendChild(cardBody);

            let cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerHTML = itemName;
            cardBody.appendChild(cardTitle);

            let cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerHTML = itemDescription;
            cardBody.appendChild(cardText);

            let contactButton = document.createElement("button");
            contactButton.classList.add("btn", "btn-success");
            contactButton.innerHTML = "Details";

            contactButton.addEventListener("click", () => {
                contactOwner();
            })

            cardDiv.appendChild(contactButton)

            document.querySelector(`#${category}`).appendChild(cardDiv);
        });

    })
}

getFeatured("mensClothing");
getFeatured("womensClothing");
getFeatured("kidsClothing");
getFeatured("electronics");
getFeatured("furniture");
