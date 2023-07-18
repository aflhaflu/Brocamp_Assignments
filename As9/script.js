let i,j,string="";

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        string=string+` ${j}`;
    }
    string=string+"\n";
}
console.log(string)