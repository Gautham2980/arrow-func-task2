
var a=prompt("enter a n1 number");
var b=prompt("enter a n2 number");

document.write("Before swapping :n1="+a+" "+"n2="+b+" ")


let swap=(a,b)=>{
  temp=a;
  a=b;
  b=temp;
  document.write("After swapping:"+"n1="+a+" "+"n2="+b);
}
swap(a,b)

// var res=swap(a,b);
// console.log(res);










// let swap=(a,b)=>{
//   temp=a;
//   a=b;
//   b=temp;
// console.log(a,b);
  
// }

// swap(3,4)
