let firstNum = Number(prompt("enter the first number"));
let secondNum = Number(prompt("enter the second number"));
let thirdNum = Number(prompt("enter the third number"));
if (firstNum > secondNum){
    if(firstNum > thirdNum){
        if (secondNum > thirdNum){
            alert(firstNum + ", " + secondNum + ", " + thirdNum);
        }
        else{
            alert(firstNum + ", " + thirdNum + ", " + secondNum);
        }
    }
    else{
        alert(thirdNum + ", " + firstNum + ", " + secondNum);
    }
}
else if(secondNum > thirdNum){
    if (firstNum > thirdNum){
        alert(secondNum + ", " + firstNum + ", " + thirdNum);
    }
    else{
        alert(secondNum + ", " + thirdNum + ", " + firstNum);
    }
}
else{
    alert(thirdNum + ", " + secondNum + ", " + firstNum);
}