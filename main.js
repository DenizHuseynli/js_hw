// var sentence='Mən Turing Academydə Programing tədrisi alıram';
// let letters=0;
// for (var i=0; i<sentence.length; i++){
//     if (sentence[i]!== ' '){
//         letters=letters+1;
//     }
// }
// console.log("Bu cümlədə", letters, 'sayda hərf var.')

let students=[
    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
]
// 100 OR 95 GRADE TASK
for (var i=0; i<students.length; i++){
    if (students[i].grade===100  || students[i].grade===95) {
        console.log(students[i].name , 'scored', students[i].grade ,'in the exam.');
    }
}

//LESS OR EQUAL TO 5 TASK
let less_than_five=0
for (var i=0; i<students.length; i++){
    if (students[i].name.length<=5){
        less_than_five+=1;
    }
}
console.log('There are', less_than_five, ' students whose names\' lengths are less than or equal to 5')

//ID EQUALS TO 8 - NAME AND SURNAME
for (var i=0; i<students.length; i++){
    if (students[i].id===8){
        console.log(students[i].name , students[i].surname,'has an id equals to 8.')
    }
}