let firstNum = Number(prompt("enter the first number"));
let secondNum = Number(prompt("enter the second number"));
let thirdNum = Number(prompt("enter the third number"));
let multiNum = firstNum * secondNum * thirdNum;
if (multiNum > 0){
    alert("the sign is +");
} else { 
    if(multiNum < 0) {
        alert("the sign is -");
    } else{
        alert("there is no sign");
    }   
}