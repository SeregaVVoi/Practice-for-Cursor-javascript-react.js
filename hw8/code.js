// Прототипи. ES6 класи

// 1.У стдентів повинні бути наступні властивості: university, course, fullName,
// У цьому завданні вам необхідно створити клас Student та розробляти методи
// всередині цього класу. вони передаються при створенні студента(в конструктор).


// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
// м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
// курс, учбовий заклад та імені студента.
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4,
//    4, 5]


class Student {
   constructor(fullName, university, course) {
      this.fullName = fullName;
      this.university = university;
      this.course = course;
   }
   getinfo() {
      console.log(`${this.fullName} вчиться у ${this.university} на ${this.course} курсі`);
   }
   get marksStud() {
      return [5, 4, 4, 5];
   }
};

let student = new Student("Остап Родоманський Бендер", "Вищії Школі Психотерапії м.Одеса", "1");
student.getinfo()
console.log(student.marksStud)