let my_hieght = prompt("Enter Your Height");
my_hieght = Number(my_hieght);
function main(){
    try {
        if (isNaN(my_hieght)) {
          throw "notANumberError";
          return;
        }
        if (my_hieght >= 70) {
          throw "HugeHeightError";
          return;
        }
        if (my_hieght <= 2) {
          throw "tinyHeightError";
          return;
        }
        console.log(my_hieght);
      } catch (err) {
        console.log(err);
      }
}

main()