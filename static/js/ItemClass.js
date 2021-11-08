import { queryFeatured } from "./firebaseSetup.js";
import { Item, Items } from "./app.js"

function getFeatured(category) {
    queryFeatured(category).then((items) => {
        items.forEach((doc) => {
            const { itemName, itemDescription, itemCategory, itemAddress, imageURL, userID } = doc.data();
            const newItem = new Item(itemName, itemDescription, itemCategory, itemAddress, imageURL, userID)
            Items[itemCategory].push(newItem)

            let temp = `
            <div class="card" style="width: 20rem; border-radius: 20px;">
            <div>
            <img src="${imageURL}" class="card-img-top itemImage" alt="...">
            </div>
                        <div class="card-body">
                            <h5 class="card-title">${itemName}</h5>
                            <p class="card-text">${itemDescription}</p>
                        </div>
                        <a href="#" class="btn btn-success">Add to cart</a>

                    </div>
            `

            document.querySelector(`#${category}`).innerHTML += temp

        });

    })
}

getFeatured("mensClothing");
getFeatured("womensClothing");
