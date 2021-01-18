let num1 = Number(prompt("enter the first number"));
let num2 = Number(prompt("enter the second number"));
let num3 = Number(prompt("enter the third number"));
let num4 = Number(prompt("enter the forth number"));
let num5 = Number(prompt("enter the fifth number"));
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    alert("the biggest number is " + num1);
}
if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    alert("the biggest number is " + num2);
}
if (num3 > num1 && num3 > num2 && num3 > num4 && num3 >num5){
    alert("the biggest number is " + num3);
}
if (num4 > num1 && num4 > num2 && num4 > num3 && num4 >num5){
    alert("the biggest number is " + num4);
}
if (num5 > num2 && num5 > num3 && num5 > num4 && num5 >num1){
    alert("the biggest number is " + num5);
}