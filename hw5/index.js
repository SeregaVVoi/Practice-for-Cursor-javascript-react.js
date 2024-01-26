//  1 задача. 
// Створіть функцію getRandomArray(length, min, max) – яка
// повертає масив випадкових цілих чисел. У функції є параметри: length -
// довжина масиву, min – мінімальне значення цілого числа, max – максимальне
// значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3,
// 2]

const getRandomArray = (lenth, min, max) => {
    const arr = [];
    for (let i = 0; i < lenth; i++) {
        const item = Math.floor(Math.random() * (max - min) + min)
        arr.length = arr.push([item]);
    }
    console.log(arr)
}
getRandomArray(10, 15, 30)


// 2 задача 

// Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
    // Створюємо об'єкт для відстеження кількості зустрічень кожного числа
    let occurrences = {};

    // Проходимося по усіх числах і підраховуємо кількість зустрічей
    for (let num of numbers) {
        // Якщо число є ключем у об'єкті occurrences, збільшуємо його значення на 1, інакше створюємо ключ зі значенням 1
        occurrences[num] = (occurrences[num] || 0) + 1;
    }

    let maxCount = 0;
    let moda = [];

    // Знаходимо числа з максимальною кількістю зустрічей
    for (let num in occurrences) {
        if (occurrences[num] > maxCount) {
            maxCount = occurrences[num];
            moda = [num];
        } else if (occurrences[num] === maxCount) {
            moda.push(num);
        }
    }

    return moda.map(Number); // Перетворюємо з строки на число (якщо числа були у формі рядка)
}

// Приклад використання:
const result = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(result); // Виведе [2]


// 3 задача 
// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
// всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4


const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

const getAvarage = (numbers) => {
    const filtreadArr = numbers.filter(Number.isInteger)
    let sum = 0;
    filtreadArr.forEach(el => {
        sum += el;
    });
    const avar = sum / filtreadArr.length
    console.log(Math.ceil(avar))
}
getAvarage(numbers);


// 4 
// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = (num) => {
    const count = [];
    const arrayHalf = Math.ceil(num.length / 2);
    for (let i = 0; i < arrayHalf; i++) {
        count.push(num[i])
    }
    const lastIndex = count[count.length - 1];
    console.log(lastIndex)
    // console.log(count[count.length - 1]);
}

getMedian(numbers);


// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
// передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]


function filterEvenNumbers(...numbers) {
    // Використовуємо метод filter для відфільтрування парних чисел
    const result = numbers.filter(num => num % 2 !== 0);
    return result;
}

// Приклад використання:
const filteredNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filteredNumbers); // Виведе [1, 3, 5]



// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
// чисел більших
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3


function countPositiveNumbers(...numbers) {
    // Використовуємо метод filter для відфільтрування чисел, які більші за нуль, і потім повертаємо довжину отриманого масиву
    const positiveNumbers = numbers.filter(num => num > 0);
    return positiveNumbers.length;
}

// Приклад використання:
const count = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(count); // Виведе 3


// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
// в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]


function getDividedByFive(...numbers) {
    // Використовуємо метод filter для відфільтрування чисел, які діляться націло на 5
    const dividedByFive = numbers.filter(num => num % 5 === 0);
    return dividedByFive;
}

// Приклад використання:
const result1 = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(result); // Виведе [55, 55]


// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
// замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
// розбити масив на слова за допомогою функції .split(" "), після чого масив
// необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
// можливість розширювати cписок цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
// kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"



function replaceBadWords(inputString) {
    // Список поганих слів
    const badWords = ['shit', 'fuck'];

    // Розбиваємо фразу на слова
    const words = inputString.split(" ");

    // Замінюємо погані слова на зірочки
    const censoredWords = words.map(word => {
        // Перевіряємо, чи слово є в списку поганих
        if (badWords.includes(word.toLowerCase())) {
            return '*'.repeat(word.length);
        } else {
            return word;
        }
    });

    // Знову з'єднуємо слова в речення
    const result = censoredWords.join(" ");

    return result;
}

// Приклад використання:
console.log(replaceBadWords("Are you fucking kidding?")); // Виведе "Are you ****ing kidding?"
console.log(replaceBadWords("Holy shit!")); // Виведе "Holy ***!"
console.log(replaceBadWords("It's bullshit!")); // Виведе "It's bull****!"


// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
// склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
// видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word) {
    // Приводимо рядок до нижнього регістру та видаляємо пробіли
    const cleanedWord = word.toLowerCase().replace(/\s/g, '');

    // Розбиваємо слово на склади по 3 букви
    const dividedWord = [];
    for (let i = 0; i < cleanedWord.length; i += 3) {
        dividedWord.push(cleanedWord.slice(i, i + 3));
    }

    return dividedWord;
}

// Приклад використання:
console.log(divideByThree("Commander")); // Виведе ["com", "man", "der"]
console.log(divideByThree("live")); // Виведе ["liv", "e"]


// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі
// перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте
// слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10
// буквами.
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam",
// "nma"]
// Приклад: generateCombinations("ol") -> ["ol", "lo"]


function generateCombinations(word) {
    // Обмеження на кількість букв у слові
    if (word.length > 10) {
        console.log("Слово не повинно містити більше 10 букв.");
        return;
    }

    // Функція для генерації перестановок
    function permute(arr, current = []) {
        // Базовий випадок: якщо масив порожній, додаємо поточну перестановку до результату
        if (arr.length === 0) {
            result.push(current.join(''));
            return;
        }

        // Рекурсивно генеруємо всі можливі перестановки
        for (let i = 0; i < arr.length; i++) {
            let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            permute(remaining, current.concat(arr[i]));
        }
    }

    // Результат буде зберігатися тут
    const result = [];

    // Викликаємо функцію для генерації перестановок
    permute(word.split(''));

    return result;
}

// Приклад використання:
console.log(generateCombinations("man")); // Виведе ["man", "mna", "amn", "anm", "nam", "nma"]
console.log(generateCombinations("ol"));  // Виведе ["ol", "lo"]
