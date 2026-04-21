let temperature = [-2, 4, 45, 23, -4, 'error', -6, -8, 34, 43];

function getHigherAndLower(arr) {
  let heigher = arr[0];
  let lower = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') continue
    if (heigher < arr[i]) {
      heigher = arr[i];
    }
    if (lower > arr[i]) {
      lower = arr[i];
    }
    console.log(typeof arr[i]);
  }
  console.log(lower, heigher);
}
getHigherAndLower(temperature);
