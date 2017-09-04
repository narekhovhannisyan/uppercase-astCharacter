let string = 'so close no matter how far';
const uppercaseLastCharacter = string => {
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && string[i + 1] !== ' ') {
      newString[i] = string[i];
    } else if (string[i] == ' ') {
      let char = string[i - 1];
      newString[i - 1] = char.toUpperCase();
      newString[i] = ' ';
    }
  }
  return newString.join('');
};
console.log(uppercaseLastCharacter(string + ' '));
