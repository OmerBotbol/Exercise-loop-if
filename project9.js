let num = Number(prompt("enter a 3 digit number"))
let meot = Math.floor(num / 100);
let asharot = Math.floor((num - meot * 100) / 10);
let ahadot = num % 10;
let sum = Math.pow(meot, 3) + Math.pow(asharot, 3) + Math.pow(ahadot, 3);
if (sum === num){
    alert("it's an armstrong number!");
}
else{
    alert("it isn't an armstrong number");
}