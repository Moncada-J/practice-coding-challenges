// solution goes here:
function checkPalindrome(inputString) {
  let reversedString = inputString.split("").reverse().join("");
  for (let i = 0; i < reversedString.length; i++) {}
  if (inputString == reversedString) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkPalindrome("aabaa"));