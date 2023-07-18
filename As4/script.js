let MarkInp = document.querySelector("#n1").value;
let button=document.querySelector(".btn");
let res=document.getElementById("res")
let mark=Number(MarkInp);
MarkInp=parseInt(MarkInp)
button.addEventListener("click",()=>{
    console.log(MarkInp)
    if(isNaN(MarkInp)){
        console.log('reached');
        alert("Only Entering Numbers")
        return;
    }
    if(MarkInp>50){
        res.textContent="Passed";
        res.classList.add("success")
        
    }else{
        res.textContent="Failed";
        
    }
    setTimeout(()=>{
        location.reload();
    },3000)
})