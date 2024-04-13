const inputs = document.querySelectorAll("input");
inputs.forEach((input) => input.addEventListener('blur', (e) => {
    if (e.target.checkValidity()) {
        e.target.nextElementSibling.textContent = "";
    } else if (e.target.validity.typeMismatch && e.target.getAttribute('id') == "email") {
        e.target.nextElementSibling.textContent = "Please input an email address.";
    } else if (e.target.matches(':invalid') && e.target.getAttribute('id') == "phone") {
        e.target.nextElementSibling.textContent = "Please input a phone number.";
    } else if (e.target.value != document.querySelector('#password').value && e.target.getAttribute('id') == "confirm_password") {
        e.target.nextElementSibling.textContent = "Passwords do not match.";
    } else if (e.target.validity.tooShort) {
        e.target.nextElementSibling.textContent = "Password must be at least 8 characters long.";
    }
}));
