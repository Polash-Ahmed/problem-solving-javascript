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
