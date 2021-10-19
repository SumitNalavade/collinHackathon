document.querySelectorAll(".authForm").forEach((form) => {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        alert("Form Submitted");
        document.querySelectorAll(".authInput").forEach((input) => {
            input.value = "";
        })
    })
})