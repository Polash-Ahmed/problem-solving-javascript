// foreach emplementation

function reuse(arr,logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i],i,arr);
  }
}
function log(value){
console.log(value);

}
function logic(value,index,arr) {
  console.log(value,index,arr);
}

reuse(["one", "two"],logic);
reuse([1,2],log)
