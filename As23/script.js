function main() {
  let limit = prompt("Enter Limit of Array");
  var a = [];
  function getArray() {
    for (let i = 0; i < limit; i++) {
      a[i] = [];
      for (let j = 0; j < limit; j++) {
        a[i][j] = prompt(`Enter value of array ${i} & ${j} position`);
      }
    }
  }
  getArray();
  function displayArray(){
    for(let i=0;i<limit;i++){
        for(let j=0;j<limit;j++){
            console.log(`${a[i][j]}`);
        }
        
    }
  }
  displayArray();
}
main();
