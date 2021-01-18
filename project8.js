let count = 0;
let sum = 0;
let num = 1;
let num2 = 1;
let myList = "";
while(count < 5) {
    for (let i = 0; i < 8; i++) {
        if( num < 100){
        let asharot = Math.floor(num / 10);
        let ahadot = num % 10;
        sum = Math.pow(ahadot, 2) + Math.pow(asharot, 2);
        console.log(sum);
        }
        else{
            let meot = Math.floor(num / 100);
            let asharot = Math.floor((num - meot * 100) / 10);
            let ahadot = num % 10;
            sum = Math.pow(ahadot, 2) + Math.pow(asharot, 2) + Math.pow(meot, 2);
            console.log(sum);
        }
        if (sum === 1){
            count++
            myList += num2 + " ";
            break;
        }
        else{
            num = sum;
            sum = 0;
        }
    }
num = num2;
num ++;
num2 ++;
}
console.log(myList);
