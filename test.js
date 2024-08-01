const password = document.getElementById("password-el");
const claimBtn = document.getElementById("claim-btn");

claimBtn.addEventListener("click", function () {
  passwordNeeded();
});

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
  } else if (password.trim() === "" ){
    passwordMessage.style.display = "block";
    return false
  }
}
