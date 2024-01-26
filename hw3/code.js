// let getMaxDigit = (num) => {
//    for (let i = 0; i < num.lenth; i++) {
//       num = num[i].Math.max()
//    }
// }
// let a = getMaxDigit(1243);
// console.log(a);
// 1 . Знайти максимальну цифру серед числа .
function getMaxDigit(number) {
   if (number < 0) {
      number *= -1; // Робимо число додатнім, якщо воно від'ємне
   }

   let maxDigit = 0;
   while (number > 0) {
      const digit = number % 10;
      if (digit > maxDigit) {
         maxDigit = digit;
      }
      number = Math.floor(number / 10);
   }

   return maxDigit;
}

const number1 = 1236;
const number2 = 987;
const number3 = 385;
const number4 = 15;
console.log(`Найбільша цифра в числі ${number1} - ${getMaxDigit(number1)}`);
console.log(`Найбільша цифра в числі ${number2} - ${getMaxDigit(number2)}`);
console.log(`Найбільша цифра в числі ${number3} - ${getMaxDigit(number3)}`);
console.log(`Найбільша цифра в числі ${number4} - ${getMaxDigit(number4)}`);


// Створення функції яка визначае ступіть числа.
function raiseToDegree(num, degree) {
   if (degree === 0) {
      return 1; // Будь-яке число, піднесене до 0-ї ступені, дорівнює 1.
   }

   let result = 1;

   for (let i = 0; i < Math.abs(degree); i++) {
      result *= num;
   }

   if (degree < 0) {
      result = 1 / result; // Якщо ступінь від'ємний, то потрібно обернути результат
   }

   return result;
}

const num = 45;
const degree = 3;

const result = raiseToDegree(num, degree);
console.log(`${num} ^ ${degree} = ${result}`);

// . Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function formatName(name) {
   // Першу букву робимо великою, решту букв - малими
   const firstLetter = name.charAt(0).toUpperCase();
   const restOfName = name.slice(1).toLowerCase();

   // З'єднуємо першу букву та решту імені
   const formattedName = firstLetter + restOfName;

   return formattedName;
}

const name1 = "vlad";
const name2 = "vLAD";
const name3 = "AndrEw";

const formatted1 = formatName(name1);
const formatted2 = formatName(name2);
const formatted3 = formatName(name3);

console.log(formatted1);
console.log(formatted2);
console.log(formatted3);

//  Створити функцію, яка вираховує суму, що залишається після
// оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function calculateNetSalary(grossSalary) {
   const taxRate = 19.5; // Податок у відсотках
   const tax = (grossSalary / 100) * taxRate; // Розрахунок податку
   const netSalary = grossSalary - tax; // Розрахунок суми після оплати податку

   return netSalary;
}

const grossSalary = 1000;
const netSalary = calculateNetSalary(grossSalary);
console.log(`Після оплати податку сума становить ${netSalary}`);

/* 5. Створити функцію, яка повертає випадкове ціле число в
діапазоні від N до M.
Приклад: getRandomNumber(1, 10) -> 5
*/

function getRandomNumber(n, m) {
   // Генеруємо випадкове число у діапазоні від N до M
   const randomNum = Math.floor(Math.random() * (m - n + 1)) + n;

   return randomNum;
}

const min = 1; // Мінімальне значення N
const max = 10; // Максимальне значення M

const randomNum = getRandomNumber(min, max);
console.log(`Випадкове число у діапазоні від ${min} до ${max}: ${randomNum}`);


/*
6. Створити функцію, яка рахує скільки разів певна буква
повторюється в слові.
Приклад: countLetter("а", "Асталавіста") -> 4
*/
{
   function countLetter(letter, word) {
      // Ініціалізуємо лічильник
      let count = 0;

      // Перетворюємо слово і букву в однаковий регістр (наприклад, в нижній)
      const lowercaseWord = word.toLowerCase();
      const lowercaseLetter = letter.toLowerCase();

      // Проходимося по кожному символу у слові
      for (let i = 0; i < lowercaseWord.length; i++) {
         // Якщо поточний символ у слові дорівнює букві, то збільшуємо лічильник
         if (lowercaseWord.charAt(i) === lowercaseLetter) {
            count++;
         }
      }

      return count;
   }

   const letterToCount = "а";
   const wordToSearch = "Асталавіста";

   const result = countLetter(letterToCount, wordToSearch);
   console.log(`Буква "${letterToCount}" повторюється в слові "${wordToSearch}" ${result} разів`);
}

/*
7. Створіть функцію, яка конвертує долари в гривні та навпаки в
залежності від наявності символа $ або UAH в рядку.
Приклад: convertCurrency("100$") -> 2500 грн. або
convertCurrency("2500UAH") -> 100$
8. Врахуйте, інші валюти не конвертуються, потрібно виводити
помилку, і також регістр uah не має значення
*/
{
   function convertCurrency(currencyString) {
      const dollarSymbol = "$";
      const uahSymbol = "UAH";
      const exchangeRate = 38; // Курс обміну: 1 долар = 25 гривень

      // Перевіряємо, чи містить рядок символ "$" у нижньому регістрі
      if (currencyString.toLowerCase().includes(dollarSymbol)) {
         // Видаляємо символ "$" і перетворюємо решту рядку в число
         const dollars = parseFloat(currencyString.replace(dollarSymbol, ""));

         // Розраховуємо гривні та повертаємо результат
         const uah = dollars * exchangeRate;
         return `${dollars}${dollarSymbol} = ${uah} грн`;
      } else if (currencyString.toLowerCase().includes(uahSymbol)) {
         // Видаляємо символ "UAH" і перетворюємо решту рядку в число
         const uah = parseFloat(currencyString.replace(uahSymbol, ""));

         // Розраховуємо долари та повертаємо результат
         const dollars = uah / exchangeRate;
         return `${uah}${uahSymbol} = ${dollars}$`;
      } else {
         return "Помилка: Невідома валюта або регістр 'uah' не має значення";
      }
   }

   const currency1 = "1007$";
   const currency2 = "2500UAH";
   const currency3 = "50EUR"; // Приклад з іншою валютою
   const currency4 = "100uah"; // Приклад з регістром "uah"

   const result1 = convertCurrency(currency1);
   const result2 = convertCurrency(currency2);
   const result3 = convertCurrency(currency3);
   const result4 = convertCurrency(currency4);

   console.log(result1);
   console.log(result2);
   console.log(result3);
   console.log(result4);

}

{
   function convertCurrency(currencyString) {
      const dollarSymbol = "$";
      const uahSymbol = "UAH";
      const exchangeRate = 25; // Курс обміну: 1 долар = 25 гривень

      // Перевіряємо, чи містить рядок символ "$"
      if (currencyString.includes(dollarSymbol)) {
         // Видаляємо символ "$" і перетворюємо решту рядку в число
         const dollars = parseFloat(currencyString.replace(dollarSymbol, ""));

         // Розраховуємо гривні та повертаємо результат
         const uah = dollars * exchangeRate;
         return `${dollars}${dollarSymbol} = ${uah} грн`;
      } else if (currencyString.includes(uahSymbol)) {
         // Видаляємо символ "UAH" і перетворюємо решту рядку в число
         const uah = parseFloat(currencyString.replace(uahSymbol, ""));

         // Розраховуємо долари та повертаємо результат
         const dollars = uah / exchangeRate;
         return `${uah}${uahSymbol} = ${dollars}$`;
      } else {
         return "Невідома валюта";
      }
   }

   const currency1 = "100$";
   const currency2 = "2500UAH";
   const currency3 = "50EUR"; // Приклад з невідомою валютою

   const result1 = convertCurrency(currency1);
   const result2 = convertCurrency(currency2);
   const result3 = convertCurrency(currency3);

   console.log(result1);
   console.log(result2);
   console.log(result3);

}

{
   /*   Створіть функцію генерації випадкового паролю (тільки числа),
   довжина встановлюється користувачем або по замовчуванню = 8
   символам.
   Приклад: getRandomPassword(4) -> 1875, getRandomPassword() ->
   87240124
   */
   function getRandomPassword(length = 8) {
      const minDigit = 0;
      const maxDigit = 9;
      let password = '';

      for (let i = 0; i < length; i++) {
         const randomDigit = Math.floor(Math.random() * (maxDigit - minDigit + 1)) + minDigit;
         password += randomDigit;
      }

      return password;
   }

   const password1 = getRandomPassword(4);
   const password2 = getRandomPassword();

   console.log(`Згенерований пароль 1: ${password1}`);
   console.log(`Згенерований пароль 2: ${password2}`);

}
{
   /*
   Створіть функцію, яка видаляє всі букви з речення.
 Приклад: deleteLetters('a', "blablabla") -> "blblbl";
   */
   function deleteLetters(letterToDelete, sentence) {
      // Використовуємо метод replace() і регулярний вираз для видалення букви
      const regex = new RegExp(letterToDelete, 'g');
      const result = sentence.replace(regex, '');

      return result;
   }

   const letter = 'a'; // Літера для видалення
   const sentence = 'blablabla';

   const modifiedSentence = deleteLetters(letter, sentence);
   console.log(`Результат: ${modifiedSentence}`);

}
{
   /*
   Створіть функцію, яка перевіряє, чи є слово паліндромом.
      Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
         isPalyndrom("Я несу гусеня") -> true 
   */
   function isPalindrome(word) {
      // Видаляємо всі символи, крім літер та переводимо рядок в нижній регістр
      const cleanedWord = word.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '').toLowerCase();

      // Перевертаємо слово
      const reversedWord = cleanedWord.split('').reverse().join('');

      // Порівнюємо перевернуте слово з оригінальним
      return cleanedWord === reversedWord;
   }

   const word1 = "мадам";
   const word2 = "кокос";
   const word3 = "Я несу гусеня";

   console.log(`Слово "${word1}" є паліндромом: ${isPalindrome(word1)}`);
   console.log(`Слово "${word2}" є паліндромом: ${isPalindrome(word2)}`);
   console.log(`Слово "${word3}" є паліндромом: ${isPalindrome(word3)}`);
}


{
   /*
    Створіть функцію, яка видалить з речення букви, які
   зустрічаються більше 1 разу.
   Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
   "сктдеим"
   */
   function deleteDuplicateLetter(sentence) {
      const letterCounts = {};
      let result = '';

      // Проходимося по кожній букві у реченні та рахуємо кількість входжень
      for (const letter of sentence) {
         const lowercaseLetter = letter.toLowerCase();
         if (/[a-zа-яё]/i.test(lowercaseLetter)) {
            letterCounts[lowercaseLetter] = (letterCounts[lowercaseLetter] || 0) + 1;
         }
      }

      // Фільтруємо букви, які зустрічаються більше 1 разу
      for (const letter of sentence) {
         const lowercaseLetter = letter.toLowerCase();
         if (/[a-zа-яё]/i.test(lowercaseLetter) && letterCounts[lowercaseLetter] === 1) {
            result += letter;
         }
      }

      return result;
   }

   const sentence = "Бісквіт був дуже ніжним";
   const modifiedSentence = deleteDuplicateLetter(sentence);
   console.log(`Результат: ${modifiedSentence}`);

}