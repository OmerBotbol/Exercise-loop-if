let num1 = Number(prompt("enter the first number"));
let num2 = Number(prompt("enter the second number"));
let biggestDivisor = 0;
for (let i = 0; i <= num1; i++) {
    if(num1 % i === 0 && num2 % i === 0){
        biggestDivisor = i;
        console.log(biggestDivisor);
    }
}
alert("the biggest devisor is " + biggestDivisor);