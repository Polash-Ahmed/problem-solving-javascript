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
