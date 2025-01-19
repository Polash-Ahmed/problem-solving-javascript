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

// thother


const sentance ="It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
  content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
  as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
  have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

const matches = sentance.match(/is/gi)
const occurances = matches ? matches.length : 0;
console.log(occurances);
let position = sentance.search(/iss/i);

position = position >=0 ? position : "not found!"
console.log(position);

// input: linearSearch(['a','b','c','d'],'c'))
// output 2 or 'not found'
// problem: linearSearch function ti incriment kore thekhan?

function linearSearch(arr,val){
  const length = arr.length
  for(let i =0; i<length; i++){
    if(arr[i]=== val){
      return i;
    }
  }
  return 'not found'
}
console.log(linearSearch(['a','b','c','d'],'c'));

//  কোন  array থেকে কি ভাবে সব থেকে বড় string খুঁজে বের করবেন এবং তার index নাম্বার দেখাবেন?

function longString(names){
let longestWord = ''
for(name of names){
if(name.length > longestWord.length){
  longestWord = name
}
}
return [longestWord,names.indexOf(longestWord)]
}
console.log(longString(["polash ahmed","polash ahmudg","polash khan","poran mia","sojib islam"]));

// ১ থেকে ১০০ পর্যন্ত কন সংখা গুলো ৩,৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য  তা বের করুন ।

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(100)
