const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function getPasswordOptions(){
    //convert to string
    const passwordLength = parseInt(prompt("How long would you like your password to be?"));
    if (isNaN(passwordLength) === true) {
      alert("Must be a number");
     return
    }
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Must be between 8 and 128 characters");
      return
    }
  
    const hasSpecialChar = confirm("Do you want to use special characters?");
    const hasNumericChar = confirm("Do you want to use numeric characters?");
    const hasLowerChar = confirm("Do you want to use lower case letters?");
    const hasUpperChar = confirm("Do you want to use upper case letters?");
  
    if (
      hasSpecialChar === false &&
      hasNumericChar === false &&
      hasLowerChar === false &&
      hasUpperChar === false
      ) {
      alert('Must select at least one character type');
      return;
    }
  
     const passwordOptions = {
      passwordLength: passwordLength,
      hasSpecialChar: hasSpecialChar,
      hasNumericChar: hasNumericChar,
      hasLowerChar: hasLowerChar,
      hasUpperChar: hasUpperChar
    };
      return passwordOptions; 

      
  };

  function getRandomArrayEl(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomEl = arr[randomIndex];
    return randomEl
  };
  function generatePassword() {
    const options = getPasswordOptions()
    let result = [];
    
    let possibleCharacter = [];
    let guaranteedChar = [];
      if (options.hasSpecialChar) {
        possibleCharacter = possibleCharacter.concat(specialCharacters);
        guaranteedChar.push(getRandomArrayEl(specialCharacters))
      }
      if (options.hasNumericChar) {
        possibleCharacter = possibleCharacter.concat(numericCharacters);
        guaranteedChar.push(getRandomArrayEl(numericCharacters))
      }
      if (options.hasLowerChar) {
        possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
        guaranteedChar.push(getRandomArrayEl(lowerCasedCharacters))
      }
      if (options.hasUpperChar) {
        possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
        guaranteedChar.push(getRandomArrayEl(upperCasedCharacters))
      }
      for (let i = 0; i < options.passwordLength; i++) {
        let possibleCharacters = getRandomArrayEl(possibleCharacter);
        result.push(possibleCharacters);
        console.log(possibleCharacters)
      }

      return result.join('');
    };

  const generateBtn = document.querySelector("#generate");
  // Write password to the #password input
  function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
   
 
  

