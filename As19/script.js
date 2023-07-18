
let find =prompt("Enter Your Annual Income")
let btn=document.querySelector("#findBtn")
let output=document.querySelector("#output")
console.log(find);
find=Number(find);

    console.log(find);
    if(find <= 250000){
        console.log("reached 1");
        output.textContent="No Tax"
    }else if(find>250000 && find<=500000){
        let result=(5/100)*find;
        console.log("reached 2");
        console.log(result);
        output.textContent=result;
    }else if(find>500000 && find<=1000000){
        let result=(20/100)*find;
        console.log("reached 3");
        output.textContent=result;
    }else if(find>1000000 && find<=5000000){
        let result=(30/100)*find;
        console.log("reached 4");
        output.textContent=result;
    }
document.getElementById("retry").addEventListener("click",()=>{
    location.reload()
})