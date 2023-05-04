// Масиви та об'єкти:




// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr=[10,11,12,13,14,15,16,17,'one','two']
console.log(arr)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj1={
    title: 'book of chaos',
    pageCaunt: 273,
    genre: 'fantastic'
}
let obj2={
    title: 'book of soon',
    pageCaunt: 341,
    genre: 'fantastic'
}
let obj3={
    title: 'book of love',
    pageCaunt: 120,
    genre: 'comedy'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let obj5= {
    title: 'book of chaos',
    pageCaunt: 273,
    genre: 'fantastic',
    authors:[name='Igor', age=31]
}
let obj6= {
    title: 'book of chaos',
    pageCaunt: 273,
    genre: 'fantastic',
    authors:[name='Valeria', age=20]
}
let obj7= {
    title: 'book of chaos',
    pageCaunt: 273,
    genre: 'fantastic',
    authors:[name='Vasya', age=27]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let user=[
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'},
    {naame:'Valeria',username:'lerkatop',password:'112233'}
]
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)
console.log(user[9].password)

// //Логічні розгалуження:



//  - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

 let x=10
 if (x === 0){
     console.log('Вірно')
 }
 else {
     console.log('Невірно')
}


 let a = 1
if (a === 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

a = 0

if (a === 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

a = 3

if (a === 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 44

if (time<15){
    console.log('First quartet')
}
else if (15<=time && time<30){
    console.log('Two quartet')
}
else if (30<=time && time<45){
    console.log('third quartet')
}
else if (45<=time && time<=59){
    console.log('four quartet')
}
else {
    console.log('Wrong number')
}

/// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=16
if (day<=10){
    console.log('first decade')
}
else if(day<=20){
    console.log('two decade')
}
else if(day<=31){
    console.log('third decade')
}

//  - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('enter the number of the day of the week')
switch (week){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Enter number from 1-7')
}
//  - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.

let firtNumber = 10
let twoNeber= 10

if (firtNumber>twoNeber){
    console.log('Перше число більше')
}
else if(twoNeber>firtNumber){
    console.log('Друге число більше')
}
else if(twoNeber===firtNumber){
    console.log('Ці цифри рівні')
}
else {
    console.log("Потрібно ввести числове значення")
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let enny = false
if ( enny === NaN || enny === undefined || enny === null || enny  === false ){
    enny = 'default';
    console.log(enny)
}
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер')
}