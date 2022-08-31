//"обьявления переменных"+
/*
let - можно присваивать другие новые значения
const - нужно сразу присвоить значение, которое нельзя поменять
var - почти не используется

let a обьявление
a = true  присваивание
const c = 10 обьявление и присваивание

let myName
console.log(myName)
myName = 'Oleksandr'
console.log(myName)

const myName = 'Oleksandr'
console.log(myName)
*/



//"типы переменных"+
/*
const a = 10 - число
const b = 'abc' - строка

примитивные типы:
string строка
boolean логический (true, false)
number число
null (присваевается мной)
underfined (без присвоения)
symbol символ

ссылочный тип - object обьект
{
    a:10,
    b: true
}
[1,2,3]
можно присвоить ссылочный тип множиством переменных

const objectA = {
    a: 10,
    b: true
}
const copyOfA = objectA
copyOfA.a = 20 //можно поменять значения в обеих переменных
console.log(objectA);
copyOfA.c = 'abc' //можно добавить значения
copyOfA.d = null
console.log(objectA);*/



//"динамическая типизация"+
/*
a = 'abc' // string
          //тип значения меняется авто
a = 10    // number

function a() {
    console.log('hey');
}
a() //вызываем функцю а в консоли
a = 10 //поменяли значение а на number
a() //после перемены выдаёт ошибку,т.к. уже а не является функцией
// чтоб такого не было, нужно использовать const

const a = () => {
    console.log('hey2');
}
a()
a = 10 //выдает ошибку, т.к. нельзя менять значение в const
a ()*/


//"object объекты"
/*
const myCity = {
    city: 'dnipro', //порядок записания свойств без разници
    popular: true,
    country: 'Ukr'
}
console.log(myCity.city);
console.log(myCity.country);
myCity.city = 'oleksandriya' //поменяли city
console.log(myCity.city);
myCity.street = 'sobornui' //добавили street
console.log(myCity);

const myCity = {
    city: 'dnipro',
    popular: true,
    country: 'Ukr'
}
console.log(myCity);
delete myCity.popular //можно удалить одно из свойств объекта
console.log(myCity);
myCity['street'] = 'dementeva'//скобочная запись. вместо точечой записис, используется, кода названия переменных могут повторятся
console.log(myCity);

const myCity = {
    city: 'dnipro',
    info: {// вложенные свойства
        isPopular: true,
        contry: 'Ukr'
    }
}
console.log(myCity.info.isPopular);//вложенное свойство, точечная запись
delete myCity.info['isPopular']//вложенные свойства, скобочная запись
console.log(myCity);

const name = 'Oleksander'
const postsQty = 37;
const userProfile = {// использование переменных
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
}
const userProfile2 = {//сокращенная запись использования переменных
    name,
    postsQty,
    hasSignedAgreement: false
}
*/



//"глобальные объекты window(в браузере) global(node.js)"
/*
globalThis eунифицированный глобальный объект 
свойства гл.объектов:
console
window.consol.log
global.consol.log
*/


//"метод"
/*
const myCity = {
    city: 'Dnipro',
    cityGreeting: function () {//метод
        console.log('Greetings!');
    }
}
myCity.cityGreeting()//вызов метода

const myCity = {
    city: 'Dnipro',
    cityGreeting() {//сокращенная запись
        console.log('Greetings!');
    }
}
myCity.cityGreeting()
*/



//"JSON javascript object notation передача данных в интернете"
/*
JSON.parse()//конвертация с JSON в объект
JSON.stringify()//конвертация с объекта в JSON
*/



//"мутация в javascript"
/*
const person = {
    name: 'Bob',
    age: 21
}
person.age = 22//мутация объекта на который ссылается переменная person
person.isAdult = true
console.log(person.age);//покажет измененное значение
console.log(person.isAdult);

const person = {
    name: 'Bob',
    age: 25
}
const person2 = person
person2.age = 28//мутация копии так же влияет и на объект
person2.isAdult = true
console.log(person.age);//покажет измененное значение
console.log(person.isAdult);
//как избежать мутаций?
const person = {
    name: 'Bob',
    age: 25
}
const person2 = Object.assign({}, person)//избежать мутации создав отдельный объект по копии person только без вложенных объектов
person2.age = 28
console.log(person.age)
console.log(person2.age)

const person = {
    name: 'Bob',
    age: 25
}
const person2 = {...person}//разделение объекта на свойства, так же только без вложенных объектов
person2.name = 'Alice'
console.log(person.name)
console.log(person2.name)

const person = {
    name: 'Bob',
    age: 25
}
const person2 = JSON.parse(JSON.stringify(person))//с помощью конвертаций, так же только без вложенных объектов
person2.name = 'Alice'
console.log(person.name)
console.log(person2.name)
*/



//"функции"
/*
let a = 5
let b = 3
function sum(a, b) {// тело функции
    const c = a + b
    console.log(c);
}
sum(a, b)//вызов функции
a = 8 //помеяли значение переменных
b = 12
sum(a,b)

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c//результат, должен быть в конце тела функции
}
myFn(10, 3)//вызов функции с аргументами. в консоле не покажет

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
const personOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)//создаем новый объект внутри функции
    updatedPerson.age += 1
    return updatedPerson
}
const updatedPersonOne = increasePersonAge(personOne)//создаем копию оригинального объекта с изменениями которые были в функции
console.log(personOne.age)//21
console.log(updatedPersonOne.age)//22
//колбэк функции
function anotherFunction() {
}
function fnWithCallback(callbackFunktion) {
    callbackFunction()
}
fnWithCallback(anotherFunction)

function printMyName() {
    console.log('Oleksandr')
}
console.log('Start')
setTimeout(printMyName, 3000)//setTimeout это встроенная функция в javascript
*/



//"области видимости"
/*
let a//глобальная обл. видимости
let b//глобальная обл. видимости
function myFn() {//глобальная обл. видимости
    let b//локальная обл. видимости, область видимости функции
    a = true//локальная обл. видимости, область видимости функции
    b = 10//локальная обл. видимости, область видимости функции
    console.log(b)//локальная обл. видимости, область видимости функции, значение 10
} 
myFn()//глобальная обл. видимости
console.log(a)//глобальная обл. видимости, значение true
console.log(b)//глобальная обл. видимости, значение underfined

const a = 5//если значение объявленная в глоб.обл.вид.
function myFn() {
    function innerFn() {
        console.log(a)//5
    }
    innerFn()
}
myFn()
*/



//"операторы"
//арифметические + - * /
//сравнения === !== <= >=
//логические ! && || (не, и, или) && ищет первое ложное значение || ищет первое правдивое значение
//присваивания =
//текстовые typeof instanceof new delete
//унарные 'a++' '+a' 'delete obj.a' 'typeof a' 'new Object()'
//бинарные 'a=5' 'a+b' 'a+=5' 'a===b' 'a&&b'
/*
const button = {
    width: 200,
    text: 'Buy'
}
const redButton = {
    ...button,//оператор ... разделяет оператор на свойства
    color: 'red'//добавили свойство
}
console.table(redButton)//в виде таблици вывели на консоль

const buttonInfo = {
    text: 'Buy'
}
const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}
const button = {//объеденили все свойства в одну
    ...buttonInfo,
    ...buttonStyle
}
console.table(button)
*/
//конкатенация строк
/*
const hello = 'Hello'
const world = 'World'
const greeting = hello + ' ' + world
*/
//шаблонные строки
/*
const hello = 'Hello'
const world = 'World'
const greeting = `${hello} ${world}`//в обратных ковычках

const name = 'Oleksandr'
const city = 'Dnipro'
const greeting = `Hello my name ${name}, i live in ${city}`
console.log(greeting)
*/



//"функциональное выражение"
/*
const myFunction = function(a, b) {//анонимное функциональное выражение присвоенное к переменной
    let c
    a = a + 1
    c = a + b
    return c
}
myFunction(5, 3)
 
setTimeout(function () {//функц.выражение с вызовом другой функции
    console.log('отложенное сообщение')
}, 1000)
*/



//"стрелочные функции"
/*
(a, b) => { //анонимная стрелочная функция
    let c
    a = a + 1
    c = a + b
    return c
}

const myFunction = (a, b) => { //стрелочная функция c присвоением ей имени
    let c
    a = a + 1
    c = a + b
    return c
}
myFunction(5, 3)

setTimeout(() => {//стрелочная функция с вызовом другой функции
    console.log('отложенное сообщение')
}, 1000)

function multByFactor(value, multiplier = 1) {//значения параметров функции по умолчанию
    return value * multiplier
}
multByFactor(10, 2)//20
console.log(multByFactor(10, 2))
multByFactor(5)//5
console.log(multByFactor(5))

const newPost = (post, addedAt = Date()) => ({
    ...post,
   addedAt, 
})
const firstPost = {
    id: 1,
    author: 'Oleksandr'
}
newPost(firstPost)
console.log(newPost(firstPost))
*/



//"обработка ошибок"
/*
const fnWithError = () => {
    throw new Error('Some error')
}
fnWithError()
console.log('Continue...')

const fnWithError = () => {
    throw new Error('Some error')
}
try {
    fnWithError()//выполнение блока кода
} catch (error) {
    console.error(error)//этот блок выполняется в случае возникновения ошибок в блке try
    console.log(error.massage)
}
console.log('Continue...')//с try/catch продолжается выполнение кода,не смотря на ошибку
*/



//"инструкции" обычно всегда заканчивается с ;
/*
function myFn(a) {
    console.log(a);
}
const b = true;
let c = 10;

myFn(2+3)//5
myFn(b)//true
myFn(c = c + 1)//11
myFn(let d)//ошибка, т.к. выражение не может быть инструкциеу
myFn(c = c + 1;)// ошибка
*/



//"массив"
/*
const myArray = [1, 2, 3]//формат записи массивов
console.log(myArray)//[1, 2, 3]

const myArray2 = new Array(2, 3, 4)
console.log(myArray2)//[2, 3, 4]

const myArray = [1, true, 'a']//чтение массива
console.log(myArray)//[1, true, 'a']
console.log(myArray[0])//1
console.log(myArray[1])//true
console.log(myArray.length)//3

const myArray = [1, 2, 3, 4]
console.log(myArray)//[1, 2, 3, 4]
console.log(myArray.length)//4
myArray[2] = 'abc'//меняем одно из значения массива
console.log(myArray)//[1, 2, 'abc', 4]
console.log(myArray.length)//4
myArray[4] = true//добовляем еще один элемент в массив
console.log(myArray)//[1, 2, 'abc', 4, true]
console.log(myArray.length)//5

const myArray = [1, 2, 3]
console.log(myArray)//[ 1, 2, 3 ]
myArray.push(4)//push - функция массива которая добовляет элемент
console.log(myArray)//[ 1, 2, 3, 4 ]
myArray.push(true)
console.log(myArray)//[ 1, 2, 3, 4, true ]

const myArray = [1, 2, 3]
console.log(myArray)//[ 1, 2, 3 ]
myArray.pop()//pup - функция массива которая удаляет последний элемент
console.log(myArray)//[ 1, 2,]
const removedElement = myArray.pop()//присваеваем удаленный элемент новой переменной
console.log(myArray)//[1]
console.log(removedElement)//2

const myArray = [1, 2, 3]
console.log(myArray)//[ 1, 2, 3 ]
myArray.unshift(true)//добовляет в начало массива и сдвигает все остальные
console.log(myArray)//[true, 1, 2, 3 ]
myArray.unshift('abc')
console.log(myArray)//['abc', true, 1, 2, 3 ]

const myArray = [1, 2, 3]
console.log(myArray)//[ 1, 2, 3 ]
myArray.shift()//функция массива которая удаляет первый элемент
console.log(myArray)//[ 2, 3]
const removedElement = myArray.shift()//присваеваем удаленный элемент новой переменной
console.log(myArray)//[3]
console.log(removedElement)//2

const myArray = [1, 2, 3]
console.log(myArray)//[ 1, 2, 3 ]
myArray.forEach(el => console.log(el * 2))//перебирает все элементы масива и выполняет с ней в данном случае функцию, получается 2, 4, 6 в столбик
console.log(myArray)//функция forEach не меняе оригинал [ 1, 2, 3 ]

const myArray = [1, 2, 3]
console.log(myArray)//[ 1, 2, 3 ]
const newArray = myArray.map(el => el * 3)//мар - вегда возвращает новый массив, который нужно присвоить новой переменной
console.log(newArray)//[ 3, 6, 9 ]
console.log(myArray)//[ 1, 2, 3 ]
*/



//"деструктуризация"
/*
const userProfile = {//объект
    name: 'Alex',
    commentsQty: 23,
    hasSignedAgreement: false,
}
const { name, commentsQty } = userProfile//с помощью деструктуризации можно копировать значения элементов, создавая новые переменные
const { hasSignedAgreement } = userProfile
console.log(name)//'Alex
console.log(hasSignedAgreement)//false
console.log(commentsQty)//23
console.log(userProfile)//{ name: 'Alex', commentsQty: 23, hasSignedAgreement: false }

const fruits = ['Apple', 'Banana']//массив
const [fruitOne, fruitTwo] = fruits//деструктуризация
console.log(fruitOne)//Apple
console.log(fruitTwo)//Banana
console.log(fruits)//[ 'Apple', 'Banana' ]

const userProfile = {
    name: 'Alex',
    commentsQty: 23,
    hasSignedAgreement: false,
}
const userInfo = ({ name, commentsQty }) => {//деструктуризация
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}
userInfo(userProfile)
*/



//"условные инструкции"
/*
let val = 10
if (val > 5) {//true это условие правдиво
    val += 20// блок кода выполняется однократно, если условие правдиво
}
console.log(val)//30

const person = {
    age: 20
}
if (!person.name) {// не undefinde === true
    console.log('Имя не указано')
}

let val = 10
if (val < 5) {
    val += 20
} else {// блок кода выполняется однократно, если условие ложно
    val -=20
}
console.log(val)//-10

const age = 25
if (age > 18) {//условие1
  console.log('Is adult')  
} else if (age >= 12) {//условие2
    console.log('Is teenager')
} else {
    console.log('Is child')
}

const age = 10//написание предыдущего кода только с помощью IF
if (age > 18) {//условие1
  console.log('Is adult')  
}
if (age >= 12 && age <= 18) {//условие2
    console.log('Is teenager')
}
if (age < 12) {//условие3
    console.log('Is child')
}

const sumPositiveNumbers = (a, b) => {//применение IF в функциях
    if (typeof a != 'number' || typeof b !== 'number') {
        return 'Один из аргументов не число'
    }
    if (a <= 0 || b <= 0) {
        return 'Числа не являются позитивные'
    }
    return a + b
}
console.log(sumPositiveNumbers(10, 20))//30
console.log(sumPositiveNumbers(true, 20))//Один из аргументов не число
console.log(sumPositiveNumbers(-5, 20))//Числа не являются позитивные

const month = 5
switch (month) {//условная инструкция switsh
    case 12:
        console.log('December')
        break
    case 1:
        console.log('January')
        break
    case 2:
        console.log('Febuary')
        break
    default:
        console.log('This is not winter month')
}

let value = 11
console.log(value >= 0 ? value : -value)//11 (тернарный оператор Значение ? Условие1 : Условие2)

value = -5
const res = value >= 0 ? value : -value
 console.log(res)//5 (--5)
*/



//"циклы"
/*
let i = 0//принцип действия цикла
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++

const myArray = [true, 'abc', 10]//перебор всех элементов массива без цикла
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

const myObject = {//перебор свойств объекта без цикла
    x: 10,
    y: true,
    z: 'abc'
}
console.log(myObject.x)
console.log(myObject.y)
console.log(myObject.z)

for (let i = 0; i < 5; i++) {//цикл for
    console.log(i)
}

const myArray = ['first', 'second', 'third']
for (let i = 0; i < myArray.length; i++) {//lenght это количество элементов в массиве
    console.log(myArray[i]);
}

const myArray = ['first', 'second', 'third']
myArray.forEach((element, index) => {//метод масивов forEach, вариант как проще написать прошлый пример
    console.log(element, index)
})

let i = 0
while (i < 5) {//цикл while
    console.log(i)
    i++//изменения условия внутри цикла
}

let i = 0
do {//цикл do while
    console.log(i)//этот цикл выполняется хоть один раз
    i++
} while (i < 5)

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myObject) {//цикл for in
    console.log(key, myObject[key])//key-название свойств, myObject[key]-значение свойств
}

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
Object.keys(myObject).forEach(key => {// forEach для объектов, Object.keys(myObject)-получение всех ключей объекта в виде массива
    console.log(key, myObject[key])
})

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
Object.values(myObject).forEach(value => {//Object.values(myObject)-получение всех значений свойств объекта в виде массива
console.log(value)
})

const myArray = [true, 10, 'abc', null]//for in для массивов, но так делать не рекомендуется
for (const key in myArray) {
    console.log(myArray[key])
}

const myString = 'Hey'// for of для строк
for (const letter of myString) {
    console.log(letter)
}

const myArray = [true, 10, 'abc', null]// for of для массивов
for (const element of myArray) { //но для массивов всё таки лучше использовать forEach
    console.log(element)
}

let myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const prop of myObject) {//for of не используется для объектов
    console.log(prop)
}
*/



//"модули"
/*
все примеры в файлах modulOne.mjs и modulTwo.mjs
*/



//"классы и прототипы"
/*
class Comment {
    constructor(text) {
        this.text = text//this переменная в класе
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {//статистический метод, не наследуется экземплярами класса
        return '${first} ${second}'
    }
}
const firstComment = new Comment('First comment')//new вызывае функцию constructor
console.log(firstComment)//Comment { text: 'First comment', votesQty: 0 }

firstComment instanceof Comment//true наследует методы
firstComment instanceof Object//true наследует методы

console.log(firstComment.votesQty)//0
firstComment.upvote()//вызываем метод upvote
console.log(firstComment.votesQty)//1
firstComment.upvote()
console.log(firstComment.votesQty)//2
console.log(firstComment)//Comment { text: 'First comment', votesQty: 2 }

const secondComment = new Comment('Second comment')//разные объекты с разными собственными свойствами
const thirdComment = new Comment('Third comment')
console.log(secondComment)//Comment { text: 'Second comment', votesQty: 0 }
console.log(thirdComment)//Comment { text: 'Third comment', votesQty: 0 }
thirdComment.upvote()
console.log(thirdComment)//Comment { text: 'Third comment', votesQty: 1 }

Comment.mergeComments('Fourth comment.', 'Fifth comment')//вызов статического метода
*/
/*
class NumbersArray extends Array {//расширение других классов
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)
console.log(myArray)//NumbersArray(3) [ 2, 5, 7 ]
myArray.sum()//14
*/



//"промисы"
/*
const myPromise = new Promise((resolve, reject) => {
    //Выполнение асинхронных действий
    //Внутри этой функции нужно в результате вызвать одну из функций resolve(выполнено) или reject(ошибка)
})

myPromise
.then(value => {
//Значение value это значение, переданное в вызове функции resolve внутри Промиса
})
.catch(error => {
//Значение error это значение, переданное в вызове функции reject внутри Промиса
})


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responce => responce.json())
    .then(json => console.log(json))
.catch(error => console.error(error))
//упращенное написание метода fetch, сделать утилит(первая часть кода) и с помощью модулей вызывать в других файлах
const getData = (url) => 
    new Promise((resolve, reject) =>
        fetch(url)
    .then(responce => responce.json())
    .then(json => resolve(json))
.catch(error => reject(error))
    )
getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
*/



//"ASYNC/AWAIT" асинхронная функция
/*
async function asencFn() {
    //всегда возвращает Промис
}

const asyncFn = async() => {
    //всегда возвращает Промис
}

const asyncFn = async() => {
    return 'Success!'
}
asyncFn()

const asyncFn = async() => {
    return 'Success!'
}
asyncFn()
.then(value => console.log(value))

const asyncFn = async() => {
    throw new Error('There was an error!')
}
asyncFn()
.then(value => console.log(value))
.catch(error => console.log(error.message))

const timerPromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))
const asyncFn = async () => {
    console.log('Timer starts')
    await timerPromise()
    console.log('Timer ended')
}
asyncFn()

const timerPromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))
const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}
asyncFn()

const getData = async (url) => {//переписал Промис на ASYNC
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url = 'https://jsonplaceholder.typicode.com/todos'
try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console,log(error.mesage)
}
*/











