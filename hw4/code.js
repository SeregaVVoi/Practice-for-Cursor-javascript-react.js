

/*
1.
У вас повинен вийти вкладений масив з парами студентів:
[["Олександр", "Олена"], [..], [...]];
Назви змінних на латинській мові.
І поясни рішення та також  що тобі допогло для вирішення ціеї задачі(я маю на увазі може якийсь паттерт або ще щось). 
*/
// Розділимо студентів на хлопців і дівчат
const themes =
   ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const boys = [];
const girls = [];

for (const student of students) {
   if (student.endsWith("а")) {
      girls.push(student);
   } else {
      boys.push(student);
   }
}

// Створимо пустий масив для пар студентів
const pairs = [];

// Знайдемо мінімальну кількість студентів (хлопців або дівчат)
const minCount = Math.min(boys.length, girls.length);

// Утворюємо пари студентів (хлопець + дівчина)
for (let i = 0; i < minCount; i++) {
   const pair = [boys[i], girls[i]];
   pairs.push(pair);
}

console.log(pairs);

/*
2. Зіставте пари з попереднього завдання та теми проєктів, над
якими студенти будуть працювати.
Повинен вийти вкладений масив виду: [["Олександр і Олена",
"Теорія автоматів"], [...], [...]]
*/
const practice = [];
for (let i = 0; i < pairs.length; i++) {
   const them = [pairs[i], themes[i]]
   practice.push(them);
}
console.log(practice);
// const practice = [];

// for (let i = 0; i < pairs.length; i++) {
//    const them = [pairs[i], themes[i]]
//    practice.push(them);
// }
// console.log(practice);
const projectPairs = [];

for (let i = 0; i < pairs.length; i++) {
   const projectPair = [pairs[i].join(" і "), themes[i]];
   projectPairs.push(projectPair);
}

console.log(projectPairs);


// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...],
// [...]]
const marks = [4, 5, 5, 3, 4, 5];
const studentPoint = [];
for (let i = 0; i < students.length; i++) {
   const studentMarks = [students[i], marks[i]]
   studentPoint.push(studentMarks);
}
console.log(studentPoint)
