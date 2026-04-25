function linerSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) return i;
  }
  return -1;
}

console.log(linerSearch([2, 3, 5, 6], 60));

 
