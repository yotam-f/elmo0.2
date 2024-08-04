document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () =>{
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent
        .replace(/\s+/g, " ")
        .trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("הועתק!")


    });
    });
});