// Assignment code here
var generateBtn = document.querySelector("#generate");

// return a random integer ranging from min to max //
function randomInt(min, max) {
 if (!max) {
  max = min
  min = 0
 }
 
 // interpolate random value //
 var rand = Math.random()
 return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
  }

function generatePassword() {

  var userInput = window.prompt("How long do you want your password to be?")

  var passwordLenght = parseInt(userInput)

  // use this if statement to show the password lenght is number or not //
  if (isNaN(passwordLenght)) {
    window.alert("That's not a number!")
    return
  }

  if (passwordLenght < 8 || passwordLenght > 128) {
    window.alert("Password lenght must be between 8 and 128 characters")
    return
  }
// add variable what user wants to show in the window //
  var userWantsNumbers = window.confirm("Would you like to include numbers to your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols to your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase to your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase to your password?")

// add variable of lists that user wants to choose their password //
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  // add variable optioncart to show the
  var optionsCart = []

  // this is used to change the lowercase to the uppercase //
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  // use if statements to push the list in the window //
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

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }

  // for adding a random character //
  var generatedPassword = ""

  // generate a random integer //
  for (var i = 0; i < passwordLenght; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
