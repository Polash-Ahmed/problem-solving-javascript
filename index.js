// arrey হতে vowels নিরণয় করা

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}
console.log(countVowels("i love bangladesh"));

// কোন Arrey থেকে duplicate number কিভাবে বের করতে পারি

const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 3, 8, 6];

const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
console.log(duplicates);
