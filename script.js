const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function getPasswordOptions(){
    //convert to string
    var passwordLength = parseInt(prompt("How long would you like your password to be?"));
    if (isNaN(passwordLength) === true) {
      alert("Must be a number");
     return
    }
    if (passwordLength < 8 || passLength > 128) {
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
      passLength: passLength,
      hasSpecialChar: hasSpecialChar,
      hasNumericChar: hasNumericChar,
      hasLowerChar: hasLowerChar,
      hasUpperChar: hasUpperChar
    };
      return passwordOptions;
  };
  
  