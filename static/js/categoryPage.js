import { getCategoryPageItems } from "./firebaseSetup.js"

window.addEventListener("DOMContentLoaded", () => {
    getCategoryPageItems(category).then((items) => {
        items.forEach((doc) => {
            const { imageURL, itemCategory, itemDescription, itemName } = doc.data();

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

            document.querySelector(".categoryCards").innerHTML += temp;
        })
    });
})
