var isPalindrome = function(str) {
  var reversedString = str
    .split('')
    .reverse()
    .join('');

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("racecar"));

var isPalindrome = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("101"));