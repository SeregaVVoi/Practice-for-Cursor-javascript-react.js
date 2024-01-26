let water = 15.678;
let milk = 123.965;
let eggs = 90.2345;
console.log(water)
console.log(milk)
console.log(eggs)

let arr = [];
arr.push(water, milk, eggs)
console.log(Math.min(...arr))
console.log(Math.max(...arr))

let result
function sum(a, b, c) {
   result = a + b + c;
   console.log(parseInt(result));
}
sum(...arr);
console.log(Math.ceil(result));
let sotny = Math.max(...arr)
console.log(Math.round(sotny, "100"))
console.log(Boolean(result % 2 === 0));
let rest = 500 - result;
console.log(Math.round(rest))
// Обчислення середнього значення
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
   sum1 += arr[i];
}
let average = sum1 / arr.length;
console.log(average.toFixed(2));
console.log(`Середнє значення масиву: ${average.toFixed(2)}`);

let action = Math.random();
console.log(action.toFixed(2));
let price = 100;
let sumClear = price / 2;
let sumR = (price / 2) * action;
console.log(sumR.toFixed(2))
console.log(sumClear.toFixed(2) - sumR.toFixed(2))