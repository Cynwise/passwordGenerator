// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  var password = " "; 
  var chosenCharacters = " ";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numberCharacters = "0123456789";
  var specialCharacters = "@%+/!^?~#$";

  if(document.getElementById("lowercase").checked){
    chosenCharacters += lowercaseCharacters;
  }

  if(document.getElementById("uppercase").checked){
    chosenCharacters += uppercaseCharacters;
  }

  if(document.getElementById("numeric").checked){
    chosenCharacters += numberCharacters;
  }

  if(document.getElementById("specialCharacter").checked){
    chosenCharacters += specialCharacters;
  }


  for (var i = 0; i < document.getElementById("characters").value; i++){

    var char = Math.floor(Math.random() * chosenCharacters.length + 1);

    password += chosenCharacters.charAt(char);

  }

  return password;
}