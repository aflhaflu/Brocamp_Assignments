let output = document.querySelector("#output");
let limit = document.querySelector("#n1").value;
let sum=0
function find() {
    limit = Number(limit);
  for (let i = 0; i <= limit; i++) {
    if(i%2==1){
        sum=sum+i;
    }
  }
  output.textContent=sum;

}
