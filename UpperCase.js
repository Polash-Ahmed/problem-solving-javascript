// frist letter upperCase problem solving

let userName = prompt("what is your name");
let useNameUpperCase = userName.toUpperCase();
let useNameLowerCase = userName.toLowerCase();

let fristLetter = useNameUpperCase.slice(0, 1);
let totalLength = userName.length;

alert("Hello " + fristLetter + useNameLowerCase.slice(1, totalLength));
