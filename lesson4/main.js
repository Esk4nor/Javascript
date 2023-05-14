// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s(a,b) {
    let resul=a*b;
    return resul;

}

console.log(s(7, 10))
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function rad(pi, r){
    return pi*r**2;
}

console.log(rad(3.14,10));
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function rad1(h,r){
    let result= 2*3.14*h*r;
    return result;
}

console.log(rad1(10,12));
// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(array){
    for (const arrayElement of array) {
        console.log(arrayElement)
        
    }

}
let user= ['Vasy','Igor','Denis']
arr(user)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text (p){
    document.write(`<p>${p}</p>`)
}
text('Hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul (litxt){
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {

        document.write(`<li>${litxt}</li>`)
    }
    document.write(`</ul>`)
}
ul('li');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul1 (litxt, numli){
    document.write(`<ul>`);
    for (let i = 0; i < numli; i++) {
        document.write(`<li>${litxt}</li>`)
    }
    document.write(`</ul>`)
}
ul1('li2',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arr2 (arr){document.write(`<ul>`);
    for (const numElement of arr) {
        document.write(`<li>${numElement}</li>`)
    }
    document.write(`</ul>`)

}
let xxx=[1,'Hello', false]
arr2(xxx)
    // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function obj(array){
    for (const userdata of array) {
        document.write(`<div>${userdata.name} - ${userdata.age} - ${userdata.id}</div>`)
    }
}
let userobj= [{
    name: 'Vasya',
    age: 31,
    id : 44433
},{
    name: 'Igor',
    age: 22,
    id : 5112
},
    {
        name: 'Lera',
        age: 20,
        id : 1110
    }]
obj(userobj);
// - створити функцію яка повертає найменьше число з масиву
function calc(arguments){
    let argument = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (argument>arguments[i]){
            argument = arguments[i];

}
    }
    return argument;
}

let num =[11,22,44,12,67,21, -10]
console.log(calc(num))
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum (arr){
    let firstnum=0;
    for (const sum of arr) {
        firstnum +=sum

    }
    return firstnum;

}


console.log(sum([1,2,10,100]));
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){

        let firstItem= arr[index1];
        let twotItem =arr[index2];
        arr[index1]=twotItem;
        arr[index2]=firstItem;
        
    return arr;
}

swap([11,22,33,44],0,1)
console.log(swap([11,22,33,44],0,1))
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency){
    for (const item of currencyValues) {
        if (exchangeCurrency === item.currency){
            return sumUAH/item.value
    }


    }

}


console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))