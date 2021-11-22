import { getCategoryPageItems } from "./firebaseSetup.js"

window.addEventListener("DOMContentLoaded", () => {
    getCategoryPageItems(category).then((items) => {
        items.forEach((doc) => {
            const { imageURL, itemDescription, itemName } = doc.data();

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

            cardDiv.appendChild(contactButton)

            document.querySelector(".categoryCards").appendChild(cardDiv);
        })
    });
})
