function separateStudents(students) {
   const boys = [];
   const girls = [];
 
   for (const student of students) {
     if (student.endsWith("а")) {
       girls.push(student);
     } else {
       boys.push(student);
     }
   }
 
   return [boys, girls];
 }
 
 const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
 const [boys, girls] = separateStudents(students);
 console.log("Хлопці:", boys);
 console.log("Дівчата:", girls);
 
 function matchStudentsWithThemes(students, themes) {
   const pairs = [];
   const minCount = Math.min(students.length, themes.length);
 
   for (let i = 0; i < minCount; i++) {
     const pair = `${students[i]} і ${themes[i]}`;
     pairs.push(pair);
   }
 
   return pairs;
 }
 

 const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
 const pairs = matchStudentsWithThemes(students, themes);
 console.log(pairs);
 