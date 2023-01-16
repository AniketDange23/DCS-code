let n= 5;
let s =""
for (let i =5; i>=1; i--)
{
    let stars = i;
    let spaces = n-i;
    while(spaces != 0){
        s += " ";
        spaces --;

    }
    
        while(stars != 0){
            s += "*";
            stars --;
        }
        s += "\n";
    
}    console.log(s);

//   output:
//   *****
//    ****
//     ***
//      **
//       *