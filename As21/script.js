let limit = prompt("Enter Limit of Array");
var a = [];
var newArr = [];
for (let i = 0; i < limit; i++) {
    a[i]=prompt(`Enter ${i+1} value of Array`);
}

a.forEach((it)=>{
    console.log(it);
})
for(let i=0;i<limit;i++){
    for(let j=i+1;j<limit;j++){
        let result=a[i]*a[j];
        newArr[i]=result;
        i++;
    }
}
console.log("new Array :")
newArr.forEach((ans)=>{
    console.log(ans);
})