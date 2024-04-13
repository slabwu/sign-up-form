const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

inputs.forEach((input) => input.addEventListener('blur', (e) => {
    if (e.target.checkValidity()) {
        e.target.nextElementSibling.textContent = "";
    } else if (e.target.validity.typeMismatch && e.target.getAttribute('id') == "email") {
        e.target.nextElementSibling.textContent = "Please input a valid email address";
    } else if (e.target.matches(':invalid') && e.target.getAttribute('id') == "phone") {
        e.target.nextElementSibling.textContent = "Please input a 10 digit phone number";
    } else if (e.target.value != document.querySelector('#password').value && e.target.getAttribute('id') == "confirm_password") {
        e.target.nextElementSibling.textContent = "Passwords do not match";
    } else if (e.target.validity.tooShort) {
        e.target.nextElementSibling.textContent = "Password must be at least 8 characters long";
    }
}));

button.addEventListener('click', (e) => {
    if (form.checkValidity()) {
        let empty = false;
        inputs.forEach((input) => {
            if (input.value == "") empty = true;
        })
        empty? alert('Please complete the entire form! 😾') : alert('Purrfect! You have successfully registered for an account 🐾');
   } else {
        e.preventDefault();
   }
});