//импорт переменной, можно присвоить другое имя
import sumNumbers from './moduleOne.mjs'

const res1 = sumNumbers(10, 2)
console.log(res1)//12

const res2 = sumNumbers(5, 10)
console.log(res2)//15

//импорт нескольких переменных
import {
    one,
    two
} from './moduleOne.mjs'

console.log(one)//1
console.log(two)//two
/*
import {
    one as oneRenamed,//переименовать одну из переменных
    two
} from './moduleOne.mjs'

console.log(oneRenamed)//1
console.log(two)//two
*/

import { sum, mult } from './moduleOne.mjs'
console.log(sum(10, 2))//12
console.log(mult(10,2))//20