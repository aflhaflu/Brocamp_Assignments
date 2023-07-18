
window.addEventListener("load",()=>{
    var output=document.querySelector("#lb");
    let flag=true,number=prompt("Enter Your Number");
    for(let i=2;i<number;i++){
        if(number%i==0)
        {
            flag=false;
            break;
        }
    }
    if(flag){

        output.textContent=`${number} :Your Entered Number is Prime`
    }else{
        output.textContent=`${number} :Your Entered Number Not Prime`
    }
})
function reloading(){
    let button=document.querySelector("#reload");
    button.addEventListener("click",()=>{
        location.reload();
    })
}
reloading()