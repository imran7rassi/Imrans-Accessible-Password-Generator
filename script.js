// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("How long do you want your password to be?")

  var passordLenght = parseInt(userInput)

  if (isNaN(passordLenght)) {
    window.alert("That's not a number!")
    return
  }

  if (passordLenght < 8 || passordLenght > 128) {
    window.alert("Password lenght must be between 8 and 128 characters")
    return
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
