
var li,temp;
var arr1=[],arr2=[];
 
const create=()=>{
    
    
}
window.addEventListener("load",()=>{
    let limit=prompt("Enter Array limits")
    for(let i=0;i<limit;i++){
        arr1[i]=prompt(`Ente First Array ${i+1} element`);
    }
    for(let i=0;i<limit;i++){
        arr2[i]=prompt(`Enter Second Array ${i+1} element`)
    }
    console.log("Before Swapping Array 1");
    for(i=0;i<limit;i++){
        console.log(arr1[i]);
    }
    console.log("Before Swapping Array 2");
    for(i=0;i<limit;i++){
        console.log(arr2[i]);
    }
    // Swapping
    for(i=0;i<limit;i++){
        temp=arr1[i];
        arr1[i]=arr2[i];
        arr2[i]=temp;
    }
    console.log("After Swapping Array 1");
    for(i=0;i<limit;i++){
        console.log(arr1[i]);
    }
    console.log("After Swapping Array 2");
    for(i=0;i<limit;i++){
        console.log(arr2[i]);
    }

})