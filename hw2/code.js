let n = Math.round(parseInt(prompt("N number")));
let m = Math.round(parseInt(prompt("M number")));
console.log(n)
console.log(m)
let bol = window.confirm(" Yes or not");
function getSum(n, m, bol) {
   let sum = 0;
   
   for (let i = n; i < m; i++) {
     if (!bol|| i % 2 !== 0) {
      sum += i;
     }
   }
 
   return sum;
 }
 
 const res = getSum(n, m, bol);
 
 console.log(`Сума чисел від ${n} до ${m} з урахуванням ПропускатиПарні=${bol} дорівнює ${res}`);
 