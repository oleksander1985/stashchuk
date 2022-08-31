//экспорт переменной
const sum = (a, b) => a + b

export default sum

//можно экспортировать и несколько переменных
const one = 1
const two = 'two'

export {
    one,
    two
}

const mult = (a, b) => a * b

export {
    sum,
    mult
}