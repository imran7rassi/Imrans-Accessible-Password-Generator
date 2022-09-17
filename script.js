// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("How long do you want your password to be?")

  var passwordLenght = parseInt(userInput)

  if (isNaN(passwordLenght)) {
    window.alert("That's not a number!")
    return
  }

  if (passwordLenght < 8 || passwordLenght > 128) {
    window.alert("Password lenght must be between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers to your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols to your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase to your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase to your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }

  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
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
