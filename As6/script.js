let input = document.querySelector("#n1");
let btn = document.querySelector(".btn");
let output = document.querySelector("#res");
let value = Number(input.value);
btn.addEventListener("click", () => {
  switch (value) {
    case 1:
      output.textContent = "Sunday";
      break;
    case 2:
      output.textContent = "Monday";
      break;
    case 3:
      output.textContent = "Tuesday";
      break;
    case 4:
      output.textContent = "Wednesday";
      break;
    case 5:
      output.textContent = "Thursday";
      break;
    case 6:
      output.textContent = "Friday";
      break;
    case 7:
      output.textContent = "Satuarday";
      break;
    default:
      output.textContent = "Invalid Input";
  }
});
