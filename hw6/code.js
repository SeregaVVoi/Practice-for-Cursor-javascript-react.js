const students = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}];


// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
// science"] - яка повертає список предметів
// 1.
// для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
// замінити на пробіл

// 1. 
// const getSubjects = (arr) => {
//    const subject = arr.shift()
//    //   console.log(subject)
//    for (keys in subject.subjects) {
//       console.log(keys.charAt(0).toUpperCase() + keys.replace("_", " ").slice(1))
//    }
// }
// getSubjects(students);
``
// function getSubjects(student) {
//    // Перевірка на наявність предметів у студента
//    if (!student || !student.subjects) {
//       return [];
//    }

//    // Отримання ключів (предметів) з об'єкта subjects та форматування їх
//    const subjects = Object.keys(student.subjects).map(subject => {
//       // Заміна _ на пробіл та першої літери на велику
//       return subject.replace('_', ' ').charAt(0).toUpperCase() + subject.replace('_', ' ').slice(1);
//    });

//    return subjects;
// }

// // Приклад використання:
// const tanyaSubjects = getSubjects(students[0]);
// console.log(tanyaSubjects);  // Виведе ["Math", "Algorithms", "Data science"]




//  2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
// середню оцінку по усім предметам для переданого студента НЕ МАСИВА
// СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
// попередніх домашніх завданнях :)


const getAverageMark = function (arr) {
   const flattredArray = Object.values(arr)
   const flat1 = flattredArray.flat()
   const flat2 = flat1.reduce((a, b) => a + b, 0)
   return ((flat2 / flat1.length).toFixed(2));

}
console.log(getAverageMark(students[0].subjects));


// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
// "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
// переданому студенту (вам знадобиться функція з попереднього завдання).
// Повинна бути виведена інформація: курс, ім'я, середня оцінка.
// 
// const getStudentInfo = function (stud, mark) {
//    const student = Object.create(stud);
//    const getAverageMark = Object.values(mark);
//    const filtreadMark = getAverageMark.flat()
//    const averageMark = filtreadMark.reduce((a, b) => a + b, 0)
//    const studentShow = console.log(`Student name: ${student.name}  Course: ${student.course}  AverageMark: ${(averageMark / filtreadMark.length).toFixed(2)}`);
//    return studentShow
// }
// getStudentInfo(students[0], students[0].subjects)

const getStudentInfo = function (stud) {
   const student = stud
   const studenShow = getAverageMark(student.subjects)
   return `Student name: ${student.name} Course: ${student.course} AverageMark: ${studenShow}`
}
console.log(getStudentInfo(students[0]))

// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// – яка повертає імена студентів у алфавітному порядку.


const getStudentsNames = function (arr) {
   const filtreadStud = [];
   for (let letter of arr) {
      filtreadStud.push(letter.name)
   }
   return filtreadStud.sort();
}
console.log(getStudentsNames(students))



// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
// кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = function (arr) {
   const filtreadSubject = arr.map((el, i) => {
      el.getAverage = getAverageMark(arr[i].subjects);
      return el
   });

   const result = filtreadSubject.filter((filtreadSubject) => filtreadSubject.getAverage > 4)
   return result
}
console.log(getBestStudent(students));

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// повторень


// const calculateWordLetters = function (obj) {
//    // for (const [key, value] of Object.entries(obj)) {
//    //     console.log(`${key}: ${value}`);
//    // }
//    const result = obj.split("").sort()
   
//    return result
// }
// console.log(calculateWordLetters("тест"));
// Функція для розрахунку кількості букв у слові
function calculateWordLetters(word) {
   // Ініціалізуємо об'єкт, де будемо зберігати кількість повторень кожної букви
   const letterCount = {};

   // Перебираємо кожну букву у слові
   for (const letter of word) {
       // Перевіряємо, чи буква вже є у нашому об'єкті
       if (letterCount[letter]) {
           // Якщо так, збільшуємо лічильник
           letterCount[letter]++;
       } else {
           // Якщо ні, ініціалізуємо лічильник для цієї букви зі значенням 1
           letterCount[letter] = 1;
       }
   }

   // Повертаємо об'єкт з результатами
   return letterCount;
}

// Приклад використання функції
const result = calculateWordLetters("арбуз");
console.log(result); // Очікуваний результат: { "т": 2, "е": 1, "с": 1 }
