// Assignment Code
var generateBtn = document.querySelector("#generate");
// Generate prompt messages and alerts
function generatePassword() {
    var Length = window.prompt ("How long would you like your password? It has to be between 8 to 128 characters long");
    
    if (!Length) {
        return;
    }

    else if (Length > 128 || Length < 8) {
        window.alert ("Password length has to be between 8 to 128 characters long");
    }

    else {
        var uppercase = window.confirm ("Click ok to include atleast one uppercase character");
    }

    var lowercase = window.confirm ("Click ok to include atleast one lowercase character");

    var numeric = window.confirm ("Click ok to include atleast one numeric character");

    var special = window.confirm ("Click ok to include atleast one special character");

    var validate = window.confirm ("Click Ok to confirm your selections");

    return RandomGenerator;
}

// Code generator

var RandomGenerator = {
    Upper: RandomUppercase(),
    Lower: RandomLowercase(),
    Numeric: +RandomNumeric(),
    Special: RandomSpecial()
    
};

for (var i = 0; i < 128; i++) {
    let randomNumber = Math.floor(Math.random() * RandomGenerator.length);

    console.log (randomNumber);
}

// Math floor to make it a whole number and pick at random from the 26 letters in the alphabeth. 97 from Charset lowercase
function RandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function RandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function RandomNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Creates a string of symbols and selects randomly from that string
function RandomSpecial() {
    var special = "*@!£$%&^()_+{}[];'>.,?/|§"
    return special[Math.floor(Math.random() * special.length)];
}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

