window.addEventListener("load", function () {
  let output = document.querySelector("#lb");
  let choice = prompt(`Select Your Choice 
    1. Addition
    2. Substraction
    3. Multiplication
    4. Division `);
  let Number1 = prompt("Enter First Number");
  let Number2 = prompt("Enter Second Number");
  Number1 = Number(Number1);
  Number2 = Number(Number2);
  class Addition {
    Adding(a1, a2) {
      return a1 + a2;
    }
  }
  class Substraction {
    substracting(s1, s2) {
      return s1 - s2;
    }
  }
  class Multiplication {
    Multiplying(m1, m2) {
      return m1 * m2;
    }
  }
  class Division {
    Dividing(d1, d2) {
      return d1 / d2;
    }
  }
  if (choice == 1) {
    let adObj = new Addition();
    let result = adObj.Adding(Number1, Number2);
    output.textContent = result;
  } else if (choice == 2) {
    let subObj = new Substraction();
    let result = subObj.substracting(Number1, Number2);
    output.textContent = result;
  } else if (choice == 3) {
    let mulObj = new Multiplication();
    let result = mulObj.Multiplying(Number1, Number2);
    output.textContent = result;
  } else if (choice == 4) {
    let DivObj = new Division();
    let result = DivObj.Dividing(Number1, Number2);
    output.textContent = result;
  }
});
document.getElementById("reload").addEventListener("click",()=>{
    location.reload()
})