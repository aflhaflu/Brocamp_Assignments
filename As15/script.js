function main(){
    var arr=[];
    getArray([...arr])
    
    
}
function getArray(array){
    let limit=prompt("Enter Limit of Array");
    for(let i=0;i<limit;i++){
        array[i]=prompt(`Enter ${i+1} value in array`)
    }
    displayArr(array)
}
function displayArr(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}
main();