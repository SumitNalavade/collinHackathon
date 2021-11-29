import { Item } from "./ItemClass.js";
import { getCategoryPageItems, paginateData } from "./firebaseSetup.js"
import { createItemCards } from "./app.js"

let Items = {
    mensClothing: [],
    womensClothing: [],
    kidsClothing: [],
    electronics: [],
    furniture: []
}

let last

getCategoryPageItems(category).then((items) => {
    last = items[1]
    items[0].forEach((doc) => {
        const { itemName, itemDescription, itemCategory, imageURL, userID } = doc.data();

        const newItem = new Item(itemName, itemDescription, itemCategory, imageURL, userID, doc.id);
        Items[itemCategory].push(newItem)
        
        document.querySelector(".categoryCards").appendChild(createItemCards(newItem));
    })
});

window.onscroll = infiniteScroll;

    // This variable is used to remember if the function was executed.
    var isExecuted = false;

    function infiniteScroll() {
        // Inside the "if" statement the "isExecuted" variable is negated to allow initial code execution.
        if (window.scrollY > (document.body.offsetHeight - window.outerHeight) && !isExecuted) {
            // Set "isExecuted" to "true" to prevent further execution
            isExecuted = true;

            // Your code goes here
            paginateData(last).then((data) => {
                last = data[1]
                data[0].forEach((doc) => {
                    console.log(doc);
                    const { itemName, itemDescription, itemCategory, imageURL, userID } = doc.data();
        
                    const newItem = new Item(itemName, itemDescription, itemCategory, imageURL, userID, doc.id);
                    Items[itemCategory].push(newItem)
                
                    document.querySelector(".categoryCards").appendChild(createItemCards(newItem));
                })
            })
            .catch((error) => {
                console.log(error);
            })

            // After 1 second the "isExecuted" will be set to "false" to allow the code inside the "if" statement to be executed again
            setTimeout(() => {
                isExecuted = false;
            }, 1000);
        }
    }
