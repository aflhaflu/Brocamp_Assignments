let Std_name = document.querySelector("#name").value;
let Written = document.querySelector("#written").value;
let lab = document.querySelector("#lab").value;
let Assignment = document.querySelector("#assignment").value;
let btn = document.querySelector("#find");
let output = document.getElementById("output");
Written = Number(Written);
lab = Number(lab);
Assignment = Number(Assignment);
btn.addEventListener("click", () => {
  let result =
    (Written * 70) / 100 + (lab * 20) / 100 + (Assignment * 10) / 100;
    console.log(result);
    output.textContent=`${Std_name}'s Overall Grade is ${result}`;
});
document.getElementById("retry").addEventListener("click",()=>{
    location.reload();
    location.reload()
})