class Vehicle{
    name;
    milege;
    max_speed;
    constructor(name,milege,max_speed){
        this.name=name;
        this.milege=milege;
        this.max_speed=max_speed;
    }
}
let newObj1=new Vehicle("LandCruise",10,250);
let newObj2=new Vehicle("Patrol",18,200);
console.log(` name : ${newObj1.name}
 mileg : ${newObj1.milege}
 max_speed : ${newObj1.max_speed}`);
 console.log("car2")
 console.log(` name : ${newObj2.name}
 mileg : ${newObj2.milege}
 max_speed : ${newObj2.max_speed}`);
