window.addEventListener("load",()=>{
    let limit=prompt("Enter Limit of Array");
    var a=[];
    var b;
    for(let i=0;i<limit;i++){
        a[i]=prompt(`Enter ${i} value of Array`);
    }
    console.log("reversed :");
    console.log(...a.sort().reverse());

})