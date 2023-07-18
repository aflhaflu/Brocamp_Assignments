let button = document.querySelector(".btn");
let num1 = document.querySelector("#n1");
let num2 = document.querySelector("#n2");
let output = document.querySelector(".output");
let err = document.querySelector(".err");
button.addEventListener("click", () => {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
  if (isNaN(n1) || isNaN(n2)) {
    err.style.display = "flex";
    setTimeout(() => {
      err.style.display = "none";
      num1.value = "";
      num2.value = "";
    }, 2000);
    return;
  }
  output.textContent = n1 + n2;
  num1.value = "";
  num2.value = "";
});
