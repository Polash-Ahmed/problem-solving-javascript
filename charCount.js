function charCount(str) {
  let charList = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z 0-9]/.test(char)) {
      if (charList[char] > 0) {
        charList[char]++;
      } else {
        charList[char] = 1;
      }
    }
  }
  return charList;
}

console.log(charCount('hello everyone !!'));
