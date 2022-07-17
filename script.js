// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var userchoice = window.prompt ("How long would you like your password? It has to be between 8 to 13 characters long");
    
    if (!userchoice) {
        return;
    }

    else if (userchoice > 13 || userchoice < 8) {
        window.alert ("Password length has to be between 8 to 13 characters long");
    }

    else {
        var uppercase = window.confirm ("Click ok to include atleast one uppercase character");
    }

    var lowercase = window.confirm ("Click ok to include atleast one lowercase character");

    var numeric = window.confirm ("Click ok to include atleast one numeric character");

    var special = window.confirm ("Click ok to include atleast one special character");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
