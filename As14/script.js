function addArrays(arr1, arr2) {
  const rows = arr1.length;
  const cols = arr1[0].length;

  const sumArray = [];
  for (let i = 0; i < rows; i++) {
    sumArray[i] = [];
    for (let j = 0; j < cols; j++) {
      sumArray[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return sumArray;
}

let limit = prompt("Enter LImit of Array");
const array1 = [[], []];
const array2 = [[], []];
for (let i = 0; i < limit; i++) {
  for (let j = 0; j < limit; j++) {
    array1[([i], [j])] = prompt(
      `Enter value of First Array ${i} & ${j} position`
    );
  }
}
for (let i = 0; i < limit; i++) {
  for (let j = 0; j < limit; j++) {
    array2[([i], [j])] = prompt(
      `Enter value of Second Array ${i} & ${j} position`
    );
  }
}

const sumArray = addArrays(array1, array2);
console.log(sumArray);
