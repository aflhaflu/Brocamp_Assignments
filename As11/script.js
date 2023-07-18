
var count=0;
var arr1=[];


window.addEventListener("load",()=>{
    let limit=prompt("Enter Array limits")
    for(let i=0;i<limit;i++){
        arr1[i]=prompt(`Ente  ${i+1}th element`);
    }
    // Count even Numbers
    arr1.forEach((item)=>{
        console.log(item);
        if(item%2==0){
            count++;
        }
    })
    console.log(`Number of Even Numbers is ${count}`)

})
