let number = document.querySelector("#n1").value;
let factor = document.querySelector("#n2").value;
let btn=document.querySelector(".btn");
var table=`<table border="1" id="mtable">`;

number=Number(number);
factor=Number(factor);
btn.addEventListener("click",()=>{
    for(let i=1;i<=number;i++){
        table+=`<tr><td> ${i} * ${factor} = ${i*factor} </td></tr>`
    }
    table+=`</table>`
    document.getElementById("lst").innerHTML=table;
})

