function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);
    if(currentIndex === -1){
      return false
    }
    arr2.splice(currentIndex, 1)
    console.log(arr2);
  }
  return true
}
same([2, 3, 6], [9, 4, 36]);


// Better Version (no mutation)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let arr2Copy = [...arr2];

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2Copy.indexOf(arr1[i] ** 2);
    if (index === -1) return false;
    arr2Copy.splice(index, 1);
  }

  return true;
}

// time complexicity

function same(arr1,arr2){
if(arr1.length !== arr2.length){
  return false
}
let sequenceCounter1 = {}
let sequenceCounter2 = {}
for(let val of arr1){
sequenceCounter1[val] = sequenceCounter1[val]+1 || 1
}
for(let val of arr2){
  sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1
}
for(let key in sequenceCounter1){
  // console.log(key);
  if(!(key ** 2) in sequenceCounter2){
    console.log(key, sequenceCounter2[key] ** 2);
    return false
  }
  if(sequenceCounter2[key ** 2] !== sequenceCounter1[key]){
    return false
  }
}
return true

}
console.log(same([2,3,6],[36,9,4]));
