var choice = prompt(`Select Your Choice
                   1.Area of a Circle
                   2.Area of a Square
                   3.Area of a Reacangle
                   4.Area of a Triangle`);
let output=document.querySelector("#output");                   

class Area {
  circle(radius) {
    return 3.14 * radius * radius;
  }
  square(lines) {
    return lines * lines;
  }
  rectange(len, wid) {
    return len * wid;
  }
  triangle(height, base) {
    return (height * base) / 2;
  }
}
class Myclass extends Area {
  circles() {
    let r = prompt("Enter Radius of Circle");
    let result = this.circle(r);
    console.log(result);
    output.textContent=`Area of Circle is: ${result}`
  }
  squares() {
    let l = prompt("Enter Line of Square");
    let result = this.square(l);
    console.log(result);
    output.textContent=result
  }
  rectangle() {
    let length = prompt("Enter Length of Rectangle");
    let width = prompt("Enter Width of Ractangle");
    let result = this.rectange(length, width);
    console.log(result);
    output.textContent=result
  }
  triangles() {
    let height = prompt("Ente Height of Triangle");
    let base = prompt("Enter Base of Triangle");
    let result = this.rectange(height, base);
    console.log(result);
    output.textContent=result
  }
}
function main() {
  if (choice == 1) {
    let MObj = new Myclass();
    MObj.circles();
  } else if (choice == 2) {
    let MObj = new Myclass();
    MObj.squares();
  } else if (choice == 3) {
    let MObj = new Myclass();
    MObj.rectangle();
  } else if (choice == 4) {
    let MObj = new Myclass();
    MObj.triangles();
  }else{
    output.textContent=`Your Entered Choice is ${choice} It is not Available`
  }
}
main();
document.querySelector("#retry").addEventListener("click",()=>{
    location.reload();
})