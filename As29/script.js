let myArray = [1, 2, 3, 4, 5];
let sumArray = myFilter(myArray, callback);
console.log(sumArray);

function myFilter(myArr, callback) {
  let status = (myArr);
  let sum = myArr.reduce((a, b) => a + b);
  console.log(status);
  return sum;
}

function callback(myArr) {
  let sum = myArr.reduce((a, b) => a + b);
  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}