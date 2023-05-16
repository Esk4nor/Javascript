// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squer=(a,b)=>a*b;
console.log(squer(10,10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let scircl=(r)=>Math.PI*r**2;
console.log(scircl(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder=(h, r)=>2*Math.PI*r**2+2*Math.PI*r*h;
console.log(10, 10);
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr=(array)=>{
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
};
arr([10,20,30,'Hello']);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let ptxt=(text)=>{
    document.write(`<p>${text}</p>`);
};
ptxt('Cool');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let uli=(text)=>{
    document.write(`<ul>`)
    document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`)
    document.write(`</ul>`)
};
uli('li');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let uli1=(text)=>{
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {

        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}
uli1('li2');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr1=(arr)=>{
    document.write(`</ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);

    }
    document.write(`</ul>`);
}
arr1([1,'string',false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let obj=(arr)=>{
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.name} - ${arrElement.age} - ${arrElement.id}</div>`);
    }
}
obj([
    {name:'Vasya', age:30, id:12244},
    {name:'Igor', age:29, id:12244},
    {name:'Olya', age:31, id:12244},
]);
// - створити функцію яка повертає найменьше число з масиву
let calc=(arr)=>{
    let min= arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(calc([10,11,12,14,122,0]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let summ=(arr)=>{
    let min=0;
    for (const arrElement of arr) {
        min+=arrElement
    }
    return min;
}
console.log(summ([10,11,12,14,122,0]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arr,index1, index2)=>{
    let first=arr[index1];
    let two=arr[index2];
   arr[index1]=two;
   arr[index2]=first;
   return arr
}
console.log((swap([11,22,33,44],0,1)))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (const value of currencyValues) {
        if (value.currency===exchangeCurrency){
            return  sumUAH/value.value
        }

    }

}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))