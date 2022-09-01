//"стрелочные функции"

(a, b) => { //анонимная стрелочная функция
    let c
    a = a + 1
    c = a - b
    return c
}


const myFunction = (a, b) => { //стрелочная функция c присвоением ей имени
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(myFunction(5, 3))//9

setTimeout(() => {//стрелочная функция с вызовом другой функции
    console.log('отложенное сообщение')
}, 3000)

function multByFactor(value, multiplier = 1) {//значения параметров функции по умолчанию
    return value * multiplier
}
multByFactor(10, 2)
console.log(multByFactor(10, 2))//20
multByFactor(5)
console.log(multByFactor(5))//5

const newPost = (post, addedAt = Date()) => ({
    ...post,
   addedAt, 
})
const firstPost = {
    id: 1,
    author: 'Aleksandr'
}
newPost(firstPost)
console.log(newPost(firstPost))