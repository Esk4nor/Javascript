// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum=(a,b,c)=>{
    if (a<b && a<c){
        return a;

    }
    else if (b<a && b<c){
        return b;
    }
    else {
        return c;
    }
}
minNum(10,2,3);
console.log(minNum(10,-2,0))
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum=(a,b,c)=>{
    if (a>b && a>c){
        return a;

    }
    else if (b>a && b>c){
        return b;
    }
    else {
        return c;
    }
}
maxNum(10,2,3);
console.log(maxNum(10,-2,0))
// - створити функцію яка повертає найбільше число з масиву
let maxNumforarr=(arr)=>{
    let max=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}
maxNumforarr([11,12,66,12,2222])
console.log(maxNumforarr([110,12,66,12,22]));
// Дано натуральное число n. Выведите все числа от 1 до n.
let number=(n)=>{
    for (let i = 1; i <= n; i++) {
        console.log([i])
    }
   }
number(5)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let ab=(a,b)=>{
    if (a<b){
        for (let i = a; i <= b; i++) {
        console.log([i])}
    }
    else {
        for (let i = a; i >= b; i--) {
            console.log([i])
        }
    }
}
ab(15,20);

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let example=(arr,a)=> {
    let first = arr[a];
    let go=arr[a+1]
        arr[a]=go;
        arr[a+1]=first

    return arr;
}

console.log(example([9,8,0,4],2))