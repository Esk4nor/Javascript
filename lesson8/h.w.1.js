// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(name,id,surname,email,phone) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.email = email;
    this.phone = phone;
}

let usarray=[
    new User('igor','22','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','11','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','13','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','14','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','17','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','44','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','33','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','55','Petrov','igorpetrov@gmail.com',+38050722211),
    new User('igor','70','Petrov','igorpetrov@gmail.com',+38050722211)
];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(usarray.filter(value => {
    if (value.id % 2 == 0) {
        return usarray;
    }
}));
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(usarray.sort((a, b) => a.id - b.id));
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order='Товар: '+order;

    }
}
let clarray=[
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Sugar','Water'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Milk','Beer','Sugar'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Milk','Beer'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Milk','Beer','Sugar','Water'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Milk','Beer'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Milk'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Water'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Milk','Beer','Sugar'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Milk'] ),
    new Client(11,'vasya','ivanov', 'vasyaivanov@gmail.com', +3805511224451,['Beer','Sugar','Water'] ),
]



    //- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clarray.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year,maxspeed, v){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxspeed=maxspeed;
    this.v=v;
    this.drive= function (){
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
    };
    this.info=function (){
        console.log(
            `
             Модель машини - ${model}
             Виробник - ${manufacturer}
             Рік випуска - ${year}
             Максимальна Швидкість - ${maxspeed}
             Об'эм двигуна - ${v}`)
    }
    this.increaseMaxSpeed= function (newSpeed){
        console.log(`New maxSeed - ${newSpeed}`);
    };
    this.changeYear =function (newValue){
        console.log(`Рік випуску - ${newValue}`);
    }


}
function addDriver(model, manufacturer, year,maxspeed, v,driver){
    Car.apply(this, arguments);
    this.driver=driver;
}
let carstore= new Car('Mercedes','Germany',2010,270,300);

carstore.drive();
carstore.increaseMaxSpeed(310);
carstore.info();
carstore.changeYear(2015);
addDriver('Mercedes','Germany',2010,270,300,{name:'vasya',age:20});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carclass{
    constructor(model, manufacturer, year, maxspeed, v) {
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxspeed=maxspeed;
        this.v=v;
        this.drive= function (){
            console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
        };
        this.info=function (){
            console.log(
                `
             Модель машини - ${model}
             Виробник - ${manufacturer}
             Рік випуска - ${year}
             Максимальна Швидкість - ${maxspeed}
             Об'эм двигуна - ${v}`)
        }
        this.increaseMaxSpeed= function (newSpeed){
            console.log(`New maxSeed - ${newSpeed}`);
        };
        this.changeYear =function (newValue){
            console.log(`Рік випуску - ${newValue}`);
        }
    }
}
class addDriver2 extends Carclass{
    constructor(model, manufacturer, year, maxspeed, v, driver) {
        super(model, manufacturer, year, maxspeed, v);
        this.driver=driver;
    }
}

new addDriver2('Mercedes', 'Germany', 2010, 270, 300, {name: 'vasya', age: 20});

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Wife(name, age, footSize){
    this.name=name;
    this.age=age;
    this.footSize=footSize;
}
let cinderella=[
    new Wife('Ira',21,36.5),
    new Wife('Ira',21,34.5),
    new Wife('Ira',21,38.5),
    new Wife('Valeria',21,38),
    new Wife('Ira',21,39),
    new Wife('Ira',21,36),
    new Wife('Ira',21,35),
    new Wife('Ira',21,35.5),
    new Wife('Ira',21,34),
    new Wife('Ira',21,33),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, foundAShoe) {
        this.name=name;
        this.age=age;
        this.foundAShoe=foundAShoe;
    }

}
let prince= new Prince('Denys',22,38);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const wife of cinderella) {
    if (wife.footSize===prince.foundAShoe){
        console.log(`Попелюшка ${wife.name} знайшла свого принца`);
        console.log(wife);
        break;
    }

}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderella.find(value => value.footSize === prince.foundAShoe));