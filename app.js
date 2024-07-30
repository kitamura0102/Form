const firstName = document.getElementById("name-el")
const lastName = document.getElementById("lastname-el")
const email = document.getElementById("email-el")
const password = document.getElementById("password-el")
const errorMessage = document.getElementById('error-message');
const passwordMessage = document.getElementById("password-error")
const claimBtn = document.getElementById("claim-btn")


claimBtn.addEventListener("click", function(){
    missingInfo()
    passwordNeeded()
})

function missingInfo(){
    if(firstName.value.trim() === ""){
        errorMessage.style.display = 'block';
    }else if(lastName.value.trim() === ""){
        return "Something is missing to be filled"
    }else if(email.value.trim() === ""){
        return "Something is missing to be filled"
    }
    else if(password.value.trim() === ""){
        return "Something is missing to be filled"
    }
}

function passwordNeeded(){
    if(password.value.trim() === '' || password.value.trim() === '' ){
        passwordMessage.style.display = 'block'
    }
}