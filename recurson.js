// function sumOffArray(arr){
//   if(arr.length === 0) return 0
//   let rest = arr.slice(1)
//   return arr[0] + sumOffArray(rest)
// }
// console.log(sumOffArray([2,3,5]));

function sumOfArray(arr) {
  return helperSum(arr, 0);
}

function helperSum(arr, index) {
  if (arr.length === index) return 0;

  return arr[index] + helperSum(arr, index + 1);
}

console.log(sumOfArray([2, 3, 5]));


// odd number solving

function findOddNumber(arr) {
  let result = [];
  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);
  return result;
}
console.log(findOddNumber([2, 3, 5, 7, 3, 4, 12, 32, 55, 75]));
