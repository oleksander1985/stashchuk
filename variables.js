//"обьявления переменных"

//let можно присваивать другие новые значения
//const нужно сразу присвоить значение, которое нельзя поменять
//var почти не используется

let a
a = true
const c = 10 //обьявление и присваивание

let myName
console.log(myName)//undefined
myName = 'Oleksandr'//Oleksandr
console.log(myName)

const myName1 = 'Oleksandr'//Oleksandr
console.log(myName1)

//"типы переменных"

const number = 10 //число
const string = 'abc' //строка

/*
примитивные типы:
string-строка
boolean-логический (true, false)
number-число
null (присваевается мной)
underfined (без присвоения)
symbol-символ
*/

//ссылочный тип - object обьект
let object = {
    first: 10,
    second: true
}
console.log(object)//{ first: 10, second: true }
    
let object1 = [1, 2, 3]
console.log(object1)//[ 1, 2, 3 ]

//можно присвоить ссылочный тип множиством переменных

const objectA = {
    a: 10,
    b: true
}
const copyOfA = objectA
copyOfA.a = 20 //можно поменять значения в обеих переменных
console.log(objectA)//{ a: 20, b: true }
copyOfA.c = 'abc' //можно добавить значения
copyOfA.d = null
console.log(objectA)//{ a: 20, b: true, c: 'abc', d: null }

//"динамическая типизация"

let w
w = 'abc' // если переменную объявить string
w = 10    // а потом объявить number, то тип значения меняется автоматически
console.log(w)//10

function v() {
    console.log('hey');
}
v() //вызываем функцю а в консоли
v = 10 //поменяли значение а на number
v() //после перемены выдаёт ошибку,т.к. уже v не является функцией
// чтоб такого не было, нужно использовать const

const z = () => {
    console.log('hey2');
}
z()
z = 10 //выдает ошибку, т.к. нельзя менять значение в const
z()