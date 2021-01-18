let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0){
        sum1 += i;
    }
    if (i % 5 === 0){
        sum1 += i;
    }
    if (i % 15 === 0){
        sum2 += i;
    }
}
sum3 = sum1 - sum2;
console.log (sum3)