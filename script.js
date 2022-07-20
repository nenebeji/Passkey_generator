// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables for Characters   
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "1234567890";
var symbols = "!@£$%^&*()_+-=[]{}\';./,?><:|";

var possibleCharacters = "";

// Variables to store information from the prompt input
var CharacterLength = '';
var uppercaseprompt = '';
var lowercaseprompt = '';
var numbersprompt = '';
var symbolsprompt = '';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
 // windows prompt when generate password button is clicked
  var Length = + window.prompt ("How long would you like your password? It has to be between 8 to 128 characters long");
  
  if (!Length) {
      return;
  }

  else if (Length > 128 || Length < 8) {
      window.alert ("Password length has to be between 8 to 128 characters long");
      return;
  }

  else (CharacterLength = Length);
  
  var uppercaseprompt = confirm ("Click ok to include atleast one uppercase character");


  var lowercaseprompt = confirm ("Click ok to include atleast one lowercase character");



  var numbersprompt = confirm ("Click ok to include atleast one numeric character");

  

  var symbolsprompt = confirm ("Click ok to include atleast one special character");


  var validate = confirm ("Click Ok to confirm your selections");

  console.log(Length);

 // Declaring the values to include in possibleCharacters 

  if(uppercaseprompt) {
    possibleCharacters = possibleCharacters + uppercase;
    console.log(possibleCharacters);
  }

  if(lowercaseprompt) {
    possibleCharacters = possibleCharacters + lowercase;
    console.log (possibleCharacters);
  }

  if(numbersprompt) {
    possibleCharacters = possibleCharacters + numbers;
    console.log (possibleCharacters);
  }

  if(symbolsprompt) {
    possibleCharacters = possibleCharacters + symbols;
    console.log (possibleCharacters);
  }

  if(!validate) {
    return;
  }
 
  var password = '';
 
  for(var i= 0; i < CharacterLength; i++){
    var randomNum = Math.floor(Math.random() * possibleCharacters.length);
    console.log(randomNum)

    password += possibleCharacters[randomNum];
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
