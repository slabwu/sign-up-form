const inputs = document.querySelectorAll("input");
inputs.forEach((input) => input.addEventListener('blur', (e) => {
    if (e.target.checkValidity()) {
        e.target.nextElementSibling.textContent = "";
    } else {
        e.target.nextElementSibling.textContent = "Error!";
    }
}));
