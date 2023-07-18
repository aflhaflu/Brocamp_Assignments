let Mark = document.getElementById("n1").value;
let button = document.querySelector(".btn");
let result = document.querySelector("#res");
Mark = parseInt(Mark);

button.addEventListener("click", function () {
  if (Mark > 90) {
    result.textContent = "A";
    result.style.color = "green";
  } else if (Mark < 89 && Mark > 80) {
    result.textContent = "B";
    result.style.color = "green";
    Mark = "";
  } else if (Mark < 79 && Mark > 70) {
    result.textContent = "C";
    result.style.color = "yellow";
  } else if (Mark < 69 && Mark > 60) {
    result.textContent = "D";
    result.style.color = "orange";
  } else if (Mark < 59 && Mark > 50) {
    result.textContent = "E";
    result.style.color = "orange";
  } else if (Mark < 50) {
    result.textContent = "Failed";
    result.style.color = "red";
  }
});
