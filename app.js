const firstName = document.getElementById("name-el");
const lastName = document.getElementById("lastname-el");
const email = document.getElementById("email-el");
const password = document.getElementById("password-el");
const errorMessage = document.getElementById("error-message");
const passwordMessage = document.getElementById("password-error");
const claimBtn = document.getElementById("claim-btn");
const emailErrorMessage = document.getElementById("email-error");
const nameErrorMessage = document.getElementById("nombre");
const lastNameErrorMessage = document.getElementById("apellido");
const form = document.getElementById("formulario"); // Añadido: Referencia al formulario

claimBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const infoValidated = missingInfo();
  const passwordValidated = passwordNeeded();
  const emailValidated = ValidateEmail(email);
  const firstNameValidated = validFirst(firstName);
  const lastNameValidated = validLast(lastName);
  if (everythingIsValidated(infoValidated, passwordValidated, emailValidated, firstNameValidated, lastNameValidated)) {
    form.submit(); // Enviar el formulario programáticamente
  }
});


function missingInfo() {
  if (firstName.value.trim() === "") {
    errorMessage.style.display = "block";
    return false;
  } else {
    errorMessage.style.display = "none";
    return true;
  }
}

function passwordNeeded() {
  const mayus = /[A-Z]/;
  const minus = /[a-z]/;
  const number = /[0-9]/;
  const signo = /[!@#$%^&*(),.?":{}|<>]/;
  if (
    mayus.test(password.value) &&
    minus.test(password.value) &&
    number.test(password.value) &&
    signo.test(password.value)
  ) {
    passwordMessage.style.display = "none";
    return true;
  } else {
    passwordMessage.style.display = "block";
    return false;
  }
}

function ValidateEmail(input) {
  const validRegex = /[@]/;

  if (validRegex.test(input.value)) {
    emailErrorMessage.style.display = "none";
    return true;
  } else {
    emailErrorMessage.style.display = "block";
    return false;
  }
}

function validFirst(input) {
  const validRegex = /[0-9]/;
  if (validRegex.test(input.value)) {
    nameErrorMessage.style.display = "block";
    return false;
  } else {
    nameErrorMessage.style.display = "none";
    return true;
  }
}
function validLast(input) {
  const validRegex = /[0-9]/;
  if (validRegex.test(input.value)) {
    lastNameErrorMessage.style.display = "block";
    return false;
  } else {
    lastNameErrorMessage.style.display = "none";
    return true;
  }
}
function everythingIsValidated(
  infoValidated,
  passwordValidated,
  emailValidated,
  firstNameValidated,
  lastNameValidated
) {
  if (
    infoValidated &&
    passwordValidated &&
    emailValidated &&
    firstNameValidated &&
    lastNameValidated
  ) {
   alert("you have been subscribed")
    return true;
  } else {
    return false;
  }
}
