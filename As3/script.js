let PrincipleAmt = document.querySelector("#n1").value;
let InterestRate = document.querySelector("#n2").value;
let NumberOfYears = document.querySelector("#n3").value;
let button = document.querySelector(".btn");
let output=document.getElementById("ans")
button.addEventListener("click", () => {
  let SI = (PrincipleAmt * InterestRate * NumberOfYears) / 100;
  output.textContent=SI;
});
