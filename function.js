//"функции"

let a = 5
let b = 3
function sum(a, b) {// тело функции
    const c = a + b
    console.log(c);
}
sum(a, b)//вызов функции
a = 8 //помеяли значение переменных
b = 12
sum(a, b)

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c//результат, должен быть в конце тела функции
}
myFn(10, 3)//вызов функции с аргументами. в консоле не покажет
console.log(myFn(10, 3))//14

const personOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person) {//функция мутирует внешний объект (не рекомендуется применять такие мутации)
    person.age += 3//изменяет age в const personOne
    return person
}
increasePersonAge(personOne)//вызываем фунцию с данными const (в этих данных применяется замена age на +3)
console.log(personOne.age)//24

//создание копии объекта и замена свойств не меняя оригинальный объект
const personTwo = {
    name: 'Alex',
    age: 37
}
function newObjectPersonAge(person) {
    const updatedPerson = Object.assign({}, person)//создаем новый объект внутри функции
    updatedPerson.age += 1
    return updatedPerson
}
const updatedPersonTwo = newObjectPersonAge(personTwo)//создаем копию оригинального объекта с изменениями которые были в функции
console.log(personTwo.age)//37
console.log(updatedPersonTwo.age)//38

//колбэк функции
function anotherFunction() {
}
function fnWithCallback(callbackFunction) {
    callbackFunction()
}
fnWithCallback(anotherFunction)

function printMyName() {
    console.log('Oleksandr')
}
console.log('Start')
setTimeout(printMyName, 3000)//setTimeout это встроенная функция в javascript