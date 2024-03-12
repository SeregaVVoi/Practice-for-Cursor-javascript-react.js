const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1
// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
// Створіть 3 об'єкти, що описують країни:
// скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
// викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
   return this.tax * salary;
}
// Використовуючи call для виклику функції і передачі об'єкта країни як контексту
const ukraineTaxes = getMyTaxes.call(ukraine, 2000);
const latviaTaxes = getMyTaxes.call(latvia, 2000);
const litvaTaxes = getMyTaxes.call(litva, 2000);

console.log("Податки в Україні:", ukraineTaxes);
console.log("Податки в Латвії:", latviaTaxes);
console.log("Податки в Литві:", litvaTaxes);

//  2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
// скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
// middleSalary). Функція повинна викликатись через call та працювати з даними
// через this
function getMiddleTaxes() {
   return this.middleSalary * this.tax;
}
const ukraineMidTaxes = getMiddleTaxes.call(ukraine)
const latviaMidTaxes = getMiddleTaxes.call(latvia)
const litvaMidTaxes = getMiddleTaxes.call(litva)
console.log("Середній Податок в Україні:", Math.round(ukraineMidTaxes))
console.log("Середній Податок в Латвії:", Math.round(latviaMidTaxes))
console.log("Середній Податок в Литві:", Math.round(litvaMidTaxes))

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
// всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
// vacancies). Функція повинна викликатись через call та працювати з даними
// через this

function getTotalTaxes() {
   return (this.middleSalary * this.vacancies) * this.tax;
}

const ukraineAllTaxes = getTotalTaxes.call(ukraine)
const latviaAllTaxes = getTotalTaxes.call(latvia)
const litvaAllTaxes = getTotalTaxes.call(litva)
console.log("Скільки податків Платять в Україні:", Math.round(ukraineAllTaxes))
console.log("Скільки податків Платять в Латвії:", Math.round(latviaAllTaxes))
console.log("Скільки податків Платять в Литві:", Math.round(litvaAllTaxes))

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
// виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500 - 2000. taxes –
// розраховується в залежності від вибраної країни та значення salary.
//    profit = salary - taxes;
// для виводу в консоль кожні 10 секунд використайте setInterval

function getMySalary(country) {
   const getRandomSalary = () => Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
   const salary = getRandomSalary();
   const taxes = country.tax * salary;
   const profit = salary - taxes;

   const result = {
      salary: salary,
      taxes: taxes,
      profit: profit
   };

   console.log(result);
}

// Викликаємо функцію кожні 10 секунд
setInterval(() => getMySalary(ukraine), 10000);
