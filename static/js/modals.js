import { getCurrentUserProfile, resetPassword } from "./firebaseSetup.js"

document.querySelector("#profileIconButton").addEventListener("click", (evt) => {
    fillProfileModal()
})

document.querySelector("#resetPasswordButton").addEventListener("click", () => {
    resetPassword()
})

function fillProfileModal() {
    getCurrentUserProfile().then((response) => {
        document.querySelector("#profileModalTitle").innerHTML = `Hello ${response.displayName}`
        document.querySelector("#profileDisplayName").innerHTML = response.displayName
        document.querySelector("#profileEmail").innerHTML = response.email
        document.querySelector("#profileAddress").innerHTML = response.address
    })
}